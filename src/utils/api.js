const apikey = "5a7423fedfd153af48ffb96a6433df60";

const discoverURL = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

const tredingPersonURL = `https://api.themoviedb.org/3/trending/person/week?api_key=${apikey}`;

const posterPath = "https://image.tmdb.org/t/p/w1280/";

function find(external_id) {
  return `
   https://api.themoviedb.org/3/find/${external_id}?api_key=${apikey}&language=en-US&external_source=imdb_id`;
}

export { discoverURL, posterPath, find };
