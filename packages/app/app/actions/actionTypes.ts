export enum LocalLibrary {
  UPDATE_LOCAL_FOLDERS = 'UPDATE_LOCAL_FOLDERS',
  REMOVE_LOCAL_FOLDER = 'REMOVE_LOCAL_FOLDER',
  SCAN_LOCAL_FOLDERS = 'SCAN_LOCAL_FOLDERS',
  SCAN_LOCAL_FOLDERS_PROGRESS = 'SCAN_LOCAL_FOLDERS_PROGRESS',
  SCAN_LOCAL_FOLDERS_SUCCESS = 'SCAN_LOCAL_FOLDERS_SUCCESS',
  SCAN_LOCAL_FOLDERS_FAILURE = 'SCAN_LOCAL_FOLDERS_FAILURE',
  UPDATE_LOCAL_FILTER = 'UPDATE_LOCAL_FILTER',
  UPDATE_LOCAL_SORT = 'UPDATE_LOCAL_SORT',
  UPDATE_LIBRARY_LIST_TYPE = 'UPDATE_LIBRARY_LIST_TYPE',
  UPDATE_EXPANDED_FOLDERS = 'UPDATE_EXPANDED_FOLDERS',
}

export enum Search {
  UNIFIED_SEARCH_START = 'UNIFIED_SEARCH_START',
  UNIFIED_SEARCH_SUCCESS = 'UNIFIED_SEARCH_SUCCESS',
  UNIFIED_SEARCH_ERROR = 'UNIFIED_SEARCH_ERROR',
  ARTIST_SEARCH_SUCCESS = 'ARTIST_SEARCH_SUCCESS',
  ALBUM_SEARCH_SUCCESS = 'ALBUM_SEARCH_SUCCESS',
  ALBUM_INFO_SEARCH_START = 'ALBUM_INFO_SEARCH_START',
  ALBUM_INFO_SEARCH_SUCCESS = 'ALBUM_INFO_SEARCH_SUCCESS',
  ALBUM_INFO_SEARCH_ERROR = 'ALBUM_INFO_SEARCH_ERROR',
  PODCAST_SEARCH_SUCCESS = 'PODCAST_SEARCH_SUCCESS',
  ARTIST_INFO_SEARCH_START = 'ARTIST_INFO_SEARCH_START',
  ARTIST_INFO_SEARCH_SUCCESS = 'ARTIST_INFO_SEARCH_SUCCESS',
  ARTIST_INFO_SEARCH_ERROR = 'ARTIST_INFO_SEARCH_ERROR',
  ARTIST_RELEASES_SEARCH_START = 'ARTIST_RELEASES_SEARCH_START',
  ARTIST_RELEASES_SEARCH_SUCCESS = 'ARTIST_RELEASES_SEARCH_SUCCESS',
  ARTIST_RELEASES_SEARCH_ERROR = 'ARTIST_RELEASES_SEARCH_ERROR',
  LASTFM_TRACK_SEARCH_START = 'LASTFM_TRACK_SEARCH_START',
  LASTFM_TRACK_SEARCH_SUCCESS = 'LASTFM_TRACK_SEARCH_SUCCESS',
  YOUTUBE_PLAYLIST_SEARCH_START = 'YOUTUBE_PLAYLIST_SEARCH_START',
  YOUTUBE_PLAYLIST_SEARCH_SUCCESS = 'YOUTUBE_PLAYLIST_SEARCH_SUCCESS',
  YOUTUBE_LIVESTREAM_SEARCH_START = 'YOUTUBE_LIVESTREAM_SEARCH_START',
  YOUTUBE_LIVESTREAM_SEARCH_SUCCESS = 'YOUTUBE_LIVESTREAM_SEARCH_SUCCESS',
  YOUTUBE_LIVESTREAM_SEARCH_ERROR = 'YOUTUBE_LIVESTREAM_SEARCH_ERROR',
  SEARCH_DROPDOWN_DISPLAY_CHANGE = 'SEARCH_DROPDOWN_DISPLAY_CHANGE',
  UPDATE_SEARCH_HISTORY = 'UPDATE_SEARCH_HISTORY',
}

export enum Scrobbling {
  LASTFM_CONNECT = 'LASTFM_CONNECT',
  LASTFM_LOGIN = 'LASTFM_LOGIN',
  LASTFM_LOGOUT = 'LASTFM_LOGOUT',
  LASTFM_READ_SETTINGS = 'LASTFM_READ_SETTINGS',
  LASTFM_ENABLE_SCROBBLING = 'LASTFM_ENABLE_SCROBBLING',
  LASTFM_DISABLE_SCROBBLING = 'LASTFM_DISABLE_SCROBBLING',
  LASTFM_SCROBBLE = 'LASTFM_SCROBBLE',
  LASTFM_UPDATE_NOW_PLAYING = 'LASTFM_UPDATE_NOW_PLAYING',
}

export enum Settings {
  READ_SETTINGS = 'READ_SETTINGS',
  SET_BOOLEAN_OPTION = 'SET_BOOLEAN_OPTION',
  SET_STRING_OPTION = 'SET_STRING_OPTION',
  SET_NUMBER_OPTION = 'SET_NUMBER_OPTION',
}

export enum Playlists {
  LOAD_LOCAL_PLAYLISTS_START = 'LOAD_LOCAL_PLAYLISTS_START',
  LOAD_LOCAL_PLAYLISTS_SUCCESS = 'LOAD_LOCAL_PLAYLISTS_SUCCESS',
  LOAD_LOCAL_PLAYLISTS_ERROR = 'LOAD_LOCAL_PLAYLISTS_ERROR',
  UPDATE_LOCAL_PLAYLISTS = 'UPDATE_LOCAL_PLAYLISTS',

  LOAD_REMOTE_PLAYLISTS_START = 'LOAD_REMOTE_PLAYLISTS_START',
  LOAD_REMOTE_PLAYLISTS_SUCCESS = 'LOAD_REMOTE_PLAYLISTS_SUCCESS',
  LOAD_REMOTE_PLAYLISTS_ERROR = 'LOAD_REMOTE_PLAYLISTS_ERROR',
}

export enum ImportFavs {
  FAV_IMPORT_INIT = 'FAV_IMPORT_INIT',
  LASTFM_FAV_IMPORT_START = 'LASTFM_FAV_IMPORT_START',
  LASTFM_FAV_IMPORT_SUCCESS_1 = 'LASTFM_FAV_IMPORT_SUCCESS_1',
  LASTFM_FAV_IMPORT_SUCCESS_FINAL = 'LASTFM_FAV_IMPORT_SUCCESS_FINAL',
  LASTFM_FAV_IMPORT_ERROR = 'LASTFM_FAV_IMPORT_ERROR',
}

export enum Mastodon {
  MASTODON_REGISTER_NUCLEAR_START = 'MASTODON_REGISTER_NUCLEAR_START',
  MASTODON_REGISTER_NUCLEAR_SUCCESS = 'MASTODON_REGISTER_NUCLEAR_SUCCESS',
  MASTODON_REGISTER_NUCLEAR_ERROR = 'MASTODON_REGISTER_NUCLEAR_ERROR',

  MASTODON_GET_ACCESS_TOKEN_START = 'MASTODON_GET_ACCESS_TOKEN_START',
  MASTODON_GET_ACCESS_TOKEN_SUCCESS = 'MASTODON_GET_ACCESS_TOKEN_SUCCESS',
  MASTODON_GET_ACCESS_TOKEN_ERROR = 'MASTODON_GET_ACCESS_TOKEN_ERROR',

  MASTODON_LOG_OUT = 'MASTODON_LOG_OUT',
}

export enum Connectivity {
  CHANGE_CONNECTIVITY = 'CHANGE_CONNECTIVITY',
}

export enum Dashboard {
  LOAD_BEST_NEW_ALBUMS_START = 'LOAD_BEST_NEW_ALBUMS_START',
  LOAD_BEST_NEW_ALBUMS_SUCCESS = 'LOAD_BEST_NEW_ALBUMS_SUCCESS',
  LOAD_BEST_NEW_ALBUMS_ERROR = 'LOAD_BEST_NEW_ALBUMS_ERROR',
  LOAD_BEST_NEW_TRACKS_START = 'LOAD_BEST_NEW_TRACKS_START',
  LOAD_BEST_NEW_TRACKS_SUCCESS = 'LOAD_BEST_NEW_TRACKS_SUCCESS',
  LOAD_BEST_NEW_TRACKS_ERROR = 'LOAD_BEST_NEW_TRACKS_ERROR',
  LOAD_TOP_TAGS_START = 'LOAD_TOP_TAGS_START',
  LOAD_TOP_TAGS_SUCCESS = 'LOAD_TOP_TAGS_SUCCESS',
  LOAD_TOP_TAGS_ERROR = 'LOAD_TOP_TAGS_ERROR',
  LOAD_TOP_TRACKS_START = 'LOAD_TOP_TRACKS_START',
  LOAD_TOP_TRACKS_SUCCESS = 'LOAD_TOP_TRACKS_SUCCESS',
  LOAD_TOP_TRACKS_ERROR = 'LOAD_TOP_TRACKS_ERROR',

  LOAD_EDITORIAL_CHARTS_START = 'LOAD_EDITORIAL_CHARTS_START',
  LOAD_EDITORIAL_CHARTS_SUCCESS = 'LOAD_EDITORIAL_CHARTS_SUCCESS',
  LOAD_EDITORIAL_CHARTS_ERROR = 'LOAD_EDITORIAL_CHARTS_ERROR',

  LOAD_EDITORIAL_PLAYLIST_START = 'LOAD_EDITORIAL_PLAYLIST_START',
  LOAD_EDITORIAL_PLAYLIST_SUCCESS = 'LOAD_EDITORIAL_PLAYLIST_SUCCESS',
  LOAD_EDITORIAL_PLAYLIST_ERROR = 'LOAD_EDITORIAL_PLAYLIST_ERROR',

  LOAD_PROMOTED_ARTISTS_START = 'LOAD_PROMOTED_ARTISTS_START',
  LOAD_PROMOTED_ARTISTS_SUCCESS = 'LOAD_PROMOTED_ARTISTS_SUCCESS',
  LOAD_PROMOTED_ARTISTS_ERROR = 'LOAD_PROMOTED_ARTISTS_ERROR',
}

export enum NuclearIdentity {
  SIGN_UP_START = 'SIGN_UP_START',
  SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
  SIGN_UP_ERROR = 'SIGN_UP_ERROR',

  SIGN_IN_START = 'SIGN_IN_START',
  SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
  SIGN_IN_ERROR = 'SIGN_IN_ERROR',

  SIGN_OUT = 'SIGN_OUT'
}

export enum NuclearConfiguration {
  FETCH_NUCLEAR_CONFIG_START = 'FETCH_NUCLEAR_CONFIG_START',
  FETCH_NUCLEAR_CONFIG_SUCCESS = 'FETCH_NUCLEAR_CONFIG_SUCCESS',
  FETCH_NUCLEAR_CONFIG_ERROR = 'FETCH_NUCLEAR_CONFIG_ERROR',

  FETCH_NUCLEAR_PARAMS_START = 'FETCH_NUCLEAR_PARAMS_START',
  FETCH_NUCLEAR_PARAMS_SUCCESS = 'FETCH_NUCLEAR_PARAMS_SUCCESS',
  FETCH_NUCLEAR_PARAMS_ERROR = 'FETCH_NUCLEAR_PARAMS_ERROR',
}

export enum Equalizer {
  CHANGE_VALUE = 'CHANGE_VALUE',
  SELECT_PRESET = 'SELECT_PRESET',
  SET_PREAMP = 'SET_PREAMP',
  TOGGLE_SPECTRUM = 'TOGGLE_VISUALIZATION',
  SET_SPECTRUM = 'SET_SPECTRUM'
}

export enum Download {
  READ_DOWNLOADS = 'READ_DOWNLOADS',
  ADD_TO_DOWNLOADS = 'ADD_TO_DOWNLOADS',
  DOWNLOAD_STARTED = 'DOWNLOAD_STARTED',
  DOWNLOAD_PAUSED = 'DOWNLOAD_PAUSED',
  DOWNLOAD_RESUMED = 'DOWNLOAD_RESUMED',
  DOWNLOAD_PROGRESS = 'DOWNLOAD_PROGRESS',
  DOWNLOAD_FINISHED = 'DOWNLOAD_FINISHED',
  DOWNLOAD_ERROR = 'DOWNLOAD_ERROR',
  DOWNLOAD_REMOVED = 'DOWNLOAD_REMOVED',
  CLEAR_FINISHED_DOWNLOADS = 'CLEAR_FINISHED_DOWNLOADS'
}

export enum Toast {
  ADD_NOTIFICATION = 'ADD_NOTIFICATION',
  REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION'
}

export enum Player {
  START_PLAYBACK = 'START_PLAYBACK',
  PAUSE_PLAYBACK = 'PAUSE_PLAYBACK',
  UPDATE_PLAYBACK_PROGRESS = 'UPDATE_PLAYBACK_PROGRESS',
  UPDATE_SEEK = 'UPDATE_SEEK',
  UPDATE_VOLUME = 'UPDATE_VOLUME',
  MUTE = 'MUTE',
  UNMUTE = 'UNMUTE',
  UPDATE_PLAYBACK_STREAM_LOADING = 'UPDATE_PLAYBACK_STREAM_LOADING'
}

export enum Queue {
  QUEUE_DROP = 'QUEUE_DROP',
  ADD_QUEUE_ITEM  = 'ADD_QUEUE_ITEM',
  PLAY_NEXT_ITEM = 'PLAY_NEXT_ITEM',
  REMOVE_QUEUE_ITEM = 'REMOVE_QUEUE_ITEM',
  UPDATE_QUEUE_ITEM = 'UPDATE_QUEUE_ITEM',
  CLEAR_QUEUE = 'CLEAR_QUEUE',
  NEXT_TRACK = 'NEXT_TRACK',
  PREVIOUS_TRACK = 'PREVIOUS_TRACK',
  SELECT_TRACK = 'SELECT_TRACK',
  REPOSITION_TRACK = 'REPOSITION_TRACK',
  STREAM_FAILED = 'STREAM_FAILED',
  CHANGE_TRACK_STREAM = 'CHANGE_TRACK_STREAM',
  ADD_NEW_STREAM  = 'ADD_NEW_STREAM',
}
