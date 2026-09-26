export interface Artist {
  id: string;
  name: string;
  bio?: string;
  monthly_listeners?: number;
}

export interface Album {
  id: string;
  title: string;
  cover_url: string;
  release_year: number;
}

export interface Track {
  id: string;
  title: string;
  duration_ms: number;
  explicit: boolean;
  artists: Artist[];
  album: Album;
}

export interface LibraryItem {
  id: string;
  type: "playlist" | "album" | "liked_songs";
  title: string;
  subtitle: string;
  total_tracks: number;
  pinned: boolean;
  cover_url: string;
}

export interface CurrentlyPlaying {
  is_playing: boolean;
  progress_ms: number;
  track: Track;
  queue: Track[];
}

export interface PlaylistFeed {
  id: string;
  title: string;
  description: string;
  cover_url: string;
  owner: string;
  followers: number;
  tracks: Track[];
}
