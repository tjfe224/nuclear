import {
  getBestNewAlbums,
  getBestNewTracks
} from 'pitchfork-bnm';

export const LOAD_BEST_NEW_ALBUMS_START = 'LOAD_BEST_NEW_ALBUMS_START';
export const LOAD_BEST_NEW_ALBUMS_SUCCESS = 'LOAD_BEST_NEW_ALBUMS_SUCCESS';
export const LOAD_BEST_NEW_ALBUMS_ERROR = 'LOAD_BEST_NEW_ALBUMS_ERROR';

export const LOAD_BEST_NEW_TRACKS_START = 'LOAD_BEST_NEW_TRACKS_START';
export const LOAD_BEST_NEW_TRACKS_SUCCESS = 'LOAD_BEST_NEW_TRACKS_SUCCESS';
export const LOAD_BEST_NEW_TRACKS_ERROR = 'LOAD_BEST_NEW_TRACKS_ERROR';

export function loadBestNewAlbumsStart() {
  return {
    type: LOAD_BEST_NEW_ALBUMS_START
  };
}

export function loadBestNewAlbumsSuccess(albums) {
  return {
    type: LOAD_BEST_NEW_ALBUMS_SUCCESS,
    payload: albums
  };
}

export function loadBestNewAlbumsError() {
  return {
    type: LOAD_BEST_NEW_ALBUMS_ERROR
  };
}

export function loadBestNewAlbums() {
  return dispatch => {
    dispatch(loadBestNewAlbumsStart());
    getBestNewAlbums().
      then(albums => {
	dispatch(loadBestNewAlbumsSuccess(albums));
      })
      .catch(error => {
	dispatch(loadBestNewAlbumsError());
	console.error(error);
      });
  };  
}

export function loadBestNewTracksStart() {
  return {
    type: LOAD_BEST_NEW_TRACKS_START
  };
}

export function loadBestNewTracksSuccess(tracks) {
  return {
    type: LOAD_BEST_NEW_TRACKS_SUCCESS,
    payload: tracks
  };
}

export function loadBestNewTracksError() {
  return {
    type: LOAD_BEST_NEW_TRACKS_ERROR
  };
}

export function loadBestNewTracks() {
  return dispatch => {
    dispatch(loadBestNewAlbumsStart());
    getBestNewTracks().
      then(tracks => {
	dispatch(loadBestNewTracksSuccess(tracks));
      })
      .catch(error => {
	dispatch(loadBestNewTracksError());
	console.error(error);
      });
  };
}
