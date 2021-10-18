import React from 'react';
import _ from 'lodash';
import { Tab } from 'semantic-ui-react';
import { withTranslation } from 'react-i18next';
import { Card } from '@nuclear/ui';

import AllResults from './AllResults';
import TracksResults from './TracksResults';
import PlaylistResults from './PlaylistResults';

import styles from './styles.scss';

@withTranslation('search')
class SearchResults extends React.Component {
  renderAllResultsPane() {
    return (
      <Tab.Pane loading={this.props.unifiedSearchStarted} attached={false}>
        <div className={styles.pane_container}>
          <div className={styles.row}>
            <AllResults
              {...this.props}
              albumInfoSearch={this.albumInfoSearch.bind(this)}
              artistInfoSearch={this.artistInfoSearch.bind(this)}
              podcastInfoSearch={this.podcastInfoSearch.bind(this)}
            />
          </div>
        </div>
      </Tab.Pane >
    );
  }

  renderPane(collection, onClick) {
    const selectedProvider = _.find(this.props.metaProviders, { sourceName: this.props.selectedPlugins.metaProviders });

    return (
      <Tab.Pane loading={this.props.unifiedSearchStarted} attached={false}>
        <div className={styles.pane_container}>
          {collection.length > 0
            ? this.props.unifiedSearchStarted
              ? null
              : collection.map((el, i) => {
                const id = _.get(el, `ids.${selectedProvider.searchName}`, el.id);
                return (
                  <Card
                    key={'title-card-' + i}
                    header={el.title || el.name}
                    content={el.artist}
                    image={
                      el.coverImage ||
                      el.thumb
                    }
                    onClick={() => onClick(id, el.type)}
                  />
                );
              })
            : this.props.t('empty')}
        </div>
      </Tab.Pane>
    );
  }

  renderTrackListPane(collection) {
    if (typeof collection !== 'undefined') {

      return (
        <Tab.Pane loading={this.props.unifiedSearchStarted} attached={false}>
          <div className={styles.pane_container}>
            {collection.length > 0
              ? this.props.unifiedSearchStarted
                ? null
                : <TracksResults tracks={collection} limit='15' />
              : this.props.t('empty')}
          </div>
        </Tab.Pane>
      );
    } else {
      return (
        <Tab.Pane
          loading={this.props.unifiedSearchStarted}
          attached={false}
        >
          <div className={styles.pane_container}>{this.props.t('empty')}</div>
        </Tab.Pane>
      );
    }
  }

  renderPlaylistPane() {
    return (
      <Tab.Pane attached={false}>
        <PlaylistResults
          playlistSearchStarted={this.props.playlistSearchStarted}
          playlistSearchResults={this.props.playlistSearchResults}
          addToQueue={this.props.addToQueue}
          clearQueue={this.props.clearQueue}
          startPlayback={this.props.startPlayback}
          selectSong={this.props.selectSong}
          streamProviders={this.props.streamProviders}
        />
      </Tab.Pane>
    );
  }

  panes() {
    const artistsHasResults = _.get(this.props.artistSearchResults, ['length'], 0) > 0;
    const albumsHasResults = _.get(this.props.albumSearchResults, ['length'], 0) > 0;
    const tracksHasResults = _.get(this.props.trackSearchResults, ['info', 'length'], 0) > 0;
    const playlistsHasResults = _.get(this.props.playlistSearchResults, ['info', 'length'], 0) > 0;
    const liveStreamsHasResults = _.get(this.props.liveStreamSearchResults, ['info', 'length'], 0) > 0;
    const podcastsHasResults = _.get(this.props.podcastSearchResults, ['length'], 0) > 0;

    const panes = [
      {
        menuItem: 'All',
        render: () => this.renderAllResultsPane()
      },
      {
        menuItem: artistsHasResults && 'Artists',
        render: () =>
          this.renderPane(
            this.props.artistSearchResults,
            this.artistInfoSearch.bind(this)
          )
      },
      {
        menuItem: albumsHasResults && 'Albums',
        render: () =>
          this.renderPane(
            this.props.albumSearchResults,
            this.albumInfoSearch.bind(this)
          )
      },
      {
        menuItem: tracksHasResults && 'Tracks',
        render: () => this.renderTrackListPane(this.props.trackSearchResults.info)
      },
      {
        menuItem: playlistsHasResults && 'Playlist',
        render: () => this.renderPlaylistPane()
      },
      {
        menuItem: liveStreamsHasResults && 'LiveStream',
        render: () => this.renderTrackListPane(this.props.liveStreamSearchResults.info)
      },
      {
        menuItem: podcastsHasResults && 'Podcast',
        render: () =>
          this.renderPane(
            this.props.podcastSearchResults,
            this.podcastInfoSearch.bind(this)
          )
      }
    ];

    return panes;
  }

  albumInfoSearch(albumId, releaseType, release) {
    this.props.albumInfoSearch(albumId, releaseType, release);
    this.props.history.push('/album/' + albumId);
  }

  artistInfoSearch(artistId) {
    this.props.artistInfoSearch(artistId);
    this.props.history.push('/artist/' + artistId);
  }

  podcastInfoSearch(podcastId, releaseType, release) {
    this.props.albumInfoSearch(podcastId, releaseType, release);
    this.props.history.push('/album/' + podcastId);
  }

  render() {
    return (
      <div>
        <Tab menu={{ secondary: true, pointing: true }} panes={this.panes()} />
      </div>
    );
  }
}

export default SearchResults;
