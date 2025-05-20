export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  // API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  API_KEY: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjk2YWExZjY2YjQwNWQxMDYwYmNlNDA0NmIzMTI5NyIsIm5iZiI6MTc0NzQ3MzA0Ni4wOTksInN1YiI6IjY4Mjg1Mjk2YmRkMDcxNjNkZDJmNmE3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IUg_eKss2Q0IRTc40B1b6-HOSukTC95kuobUXpUoFis",
  headers: {
    accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjk2YWExZjY2YjQwNWQxMDYwYmNlNDA0NmIzMTI5NyIsIm5iZiI6MTc0NzQ3MzA0Ni4wOTksInN1YiI6IjY4Mjg1Mjk2YmRkMDcxNjNkZDJmNmE3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IUg_eKss2Q0IRTc40B1b6-HOSukTC95kuobUXpUoFis`,
  },
};

export const fetchPopularMovies = async ({
  query,
}: {
  query: string;
}): Promise<Movie[]> => {
  const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

  const response = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch movies: ${response.statusText}`);
  }

  const data = await response.json();

  return data.results;
};
