export interface LayoutProps {
  children: React.ReactNode;
}
export interface Device {
  width: number;
  height: number;
}
export interface FilterProps {
  category: string;
  onChangeFilter: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export interface PaginationProps {
  numberOfPages: number;
  pageLimit?: number;
  onChangePage: (page: number) => void;
}
export interface PaginateParams {
  numberOfPages: number;
  pageLimit?: number;
  onChangePage: (page: number) => void;
}

export interface MoviesType {
  results: [
    {
      id: number;
      release_date: string;
      original_title: string;
      poster_path: string;
      vote_average: number;
    }
  ];
}

export interface CardProps {
  isWatchList?: boolean;
  release_date: string;
  poster_path: string;
  original_title: string;
  vote_average: number;
  id: number;
}
export interface CardsProps {
  isWatchList?: boolean;
  movies: CardProps[];
}
export interface MovieDetails {
  backdrop_path: string;
  poster_path: string;
  original_title: string;
  vote_average: string;
  overview: string;
  genres: string[];
  spoken_languages: string[];
  release_date: string;
  id: string;
}
export interface Credits {
  cast: {
    id: number;
    name: String;
    profile_path: string;
  }[];
}

export interface Gallery {
  backdrops: { file_path: string }[];
}
export interface SearchResults {
  results: { title: string; id: number }[];
}
export interface ShowDetailsProps extends NotifProps, MovieDetails {}
export interface NotifProps {
  addNotif: () => void;
}
