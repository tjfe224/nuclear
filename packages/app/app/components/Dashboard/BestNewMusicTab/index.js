import React from 'react';
import { Tab } from 'semantic-ui-react';
import _ from 'lodash';

import BestNewMusicMenu from './BestNewMusicMenu';
import BestNewMusicContent from './BestNewMusicContent';
import styles from './styles.scss';

class BestNewMusicTab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: null
    };
  }

  componentDidMount() {
    if (this.state.activeItem === null) {
      const firstAlbum = _.head(this.props.dashboardData.bestNewAlbums);

      if (firstAlbum) {
        this.setActiveItem(firstAlbum);
      }
    }
  }

  isLoading() {
    return (this.props.dashboardData.bestNewAlbums && this.props.dashboardData.bestNewTracks) ? this.props.dashboardData.bestNewAlbums.length < 1 || this.props.dashboardData.bestNewTracks.length < 1 : true;
  }

  setActiveItem(activeItem) {
    this.setState({ activeItem });
  }


  render() {
    const {
      dashboardData,
      artistInfoSearchByName,
      albumInfoSearchByName,
      addToQueue,
      selectSong,
      clearQueue,
      startPlayback,
      streamProviders,
      history
    } = this.props;

    return (
      <Tab.Pane
        loading={this.isLoading()}
        attached={false}
        className={styles.best_new_music_tab_pane}
      >
        <BestNewMusicMenu
          albums={dashboardData.bestNewAlbums}
          tracks={dashboardData.bestNewTracks}
          setActiveItem={this.setActiveItem.bind(this)}
        />
        <BestNewMusicContent
          item={this.state.activeItem}
          artistInfoSearchByName={artistInfoSearchByName}
          albumInfoSearchByName={albumInfoSearchByName}
          addToQueue={addToQueue}
          selectSong={selectSong}
          clearQueue={clearQueue}
          startPlayback={startPlayback}
          streamProviders={streamProviders}
          history={history}
        />
      </Tab.Pane>
    );
  }
}

export default BestNewMusicTab;
