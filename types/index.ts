

export type Movie = {
  Poster?: string,
  Title?: string,
  Type?: string,
  Year?: string,
  imdbID?: string,
}

export type Rating = {
  Source?: string,
  /** rating as a string with this format: 5.7/10 */
  Value?: string,
}

export type MovieDetails = {
  Actors?: string,
  Awards?: string,
  BoxOffice?: string,
  Country?: string,
  DVD?: string,
  Director?: string,
  Genre?: string,
  Language?: string,
  Metascore?: string,
  Plot?: string,
  Poster?: string,
  Production?: string,
  Rated?: string,
  Ratings?: Rating[],
  Released?: string,
  Response?: string,
  Runtime?: string,
  Title?: string,
  Type?: string,
  Website?: string,
  Writer?: string,
  Year?: string,
  imdbID?: string,
  imdbRating?: string,
  imdbVotes?: string,
}

export interface APISearchBody {
  Search?: Movie[],
  // number as string 
  totalResults?: string,
  Response: "True" | "False",
  Error?: string,
  /* properties defined here */
};

export type APIMovieBody = {
  movie: MovieDetails
};