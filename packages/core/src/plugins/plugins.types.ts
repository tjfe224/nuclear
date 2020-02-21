import Track from '../structs/Track';

export enum SearchResultsSource {
    Discogs = 'Discogs',
    Musicbrainz = 'Musicbrainz',
    Bandcamp = 'Bandcamp'
}

export enum AlbumType {
    master = 'master',
    release = 'release',
    unknown = 'unknown'
}

export type SearchResultsArtist = {
    id: string;
    coverImage: string;
    thumb: string;
    name: string;
    resourceUrl?: string;
    source: SearchResultsSource;
}

export type SearchResultsAlbum = {
    id: string;
    coverImage: string;
    thumb: string;
    title: string;
    artist: string;
    resourceUrl?: string;
    source: SearchResultsSource;
}

export type SearchResultsTrack = {
    id: string;
    title: string;
    artist: string;
    source: SearchResultsSource;
}

export type ArtistTopTrack = {
    artist: string;
    title: string;
    thumb?: string;
    playcount?: number;
    listeners?: number;
}

export type SimilarArtist = {
    name: string;
    thumbnail: string;
}

export type ArtistDetails = {
    id: string;
    name: string;
    description?: string;
    tags?: string[];
    onTour?: boolean;
    coverImage?: string;
    thumb?: string;
    images?: string[];
    topTracks: ArtistTopTrack[];
    similar: SimilarArtist[];
    source: SearchResultsSource;
}

export type AlbumDetails = {
    id: string;
    artist: string;
    title: string;
    thumb?: string;
    coverImage?: string;
    images?: string[];
    genres?: string[];
    year?: string;
    type?: AlbumType;
    tracklist: Track[];
};

export type StreamQuery = {
    artist: string;
    track: string;
}

export type StreamData = {
    source: string;
    id: string;
    stream: string;
    duration: number;
    title: string;
    thumbnail: string;
}
