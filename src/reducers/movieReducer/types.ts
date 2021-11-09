export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  genres: string[];
  release_date: string;
  runtime: number;
  vote_average?: number;
  overview: string;
};

export type Movies = {
  data: Movie[] | [];
  total: number;
  offset: number;
  limit: number;
};
