import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import numeral from 'numeral';

import artPlaceholder from '../../../resources/media/art_placeholder.png';

import TrackPopupContainer from '../../containers/TrackPopupContainer';
import { formatDuration } from '../../utils';

import styles from './styles.scss';

class TrackRow extends React.Component {
  getThumbnail(track) {
    return _.get(
      track,
      'image[1][\'#text\']',
      _.get(
        track,
        'image[0][\'#text\']',
        artPlaceholder
      )
    );
  }

  renderDuration (track) {
    if (track.duration === 0) {
      return <td className={styles.track_duration} />;
    }
    return (
      <td className={styles.track_duration}>
        {formatDuration(track.duration)}
      </td>
    );
  }

  renderTrigger (track) {
    return (
      <tr className={styles.track} onDoubleClick={this.playTrack}>
        {
          this.props.displayCover &&
            <td className={styles.track_thumbnail}>
              <img src={this.getThumbnail(track)}/>
            </td>
        }
        {this.props.displayTrackNumber && <td className={styles.track_artist}>{track.position}</td>}
        {this.props.displayArtist && <td className={styles.track_artist}>{track.artist.name}</td>}
        <td className={styles.track_name}>{track.name}</td>
        {this.props.displayDuration && this.renderDuration(track)}
        {this.props.displayPlayCount && <td className={styles.playcount}>{numeral(track.playcount).format('0,0')}</td>}
      </tr>
    );
  }

  render () {
    let {
      track,

      withAddToQueue,
      withPlayNow,
      withAddToFavorites,
      withAddToDownloads
    } = this.props;
    
    return (
      <TrackPopupContainer
        trigger={this.renderTrigger(track)}
        track={ track }
        artist={ track.artist.name }
        title={ track.name }
        thumb={ this.getThumbnail(track) }

        withAddToQueue={ withAddToQueue }
        withPlayNow={ withPlayNow }
        withAddToFavorites={ withAddToFavorites }
        withAddToDownloads={ withAddToDownloads }
      />
    );
  }
}

TrackRow.propTypes = {
  track: PropTypes.object,

  displayCover: PropTypes.bool,
  displayTrackNumber: PropTypes.bool,
  displayArtist: PropTypes.bool,
  displayDuration: PropTypes.bool,
  displayPlayCount: PropTypes.bool,
  
  withAddToQueue: PropTypes.bool,
  withPlayNow: PropTypes.bool,
  withAddToFavorites: PropTypes.bool,
  withAddToDownloads: PropTypes.bool
};

TrackRow.defaultProps = {
  withAddToQueue: true,
  withPlayNow: true,
  withAddToFavorites: true,
  withAddToDownloads: true
};

export default TrackRow;
