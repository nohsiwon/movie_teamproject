// URL에서 movieId 가져오기
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');
console.log(movieId);
// API에서 영화 데이터 가져오기
const options = {
  method: 'GET',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODJmZGE4ZDMzZjM3ZjQzMTgyOTlkMWEwZjE4YjU0YiIsInN1YiI6IjY1MmZhZGMxY2FlZjJkMDExY2M3ODY1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wmHOY_iWlMlVfnWoFTBFlIgDDVv5qR8q3Il78PrgkEE',
  },
};

fetch(`https://api.themoviedb.org/3/movie/${movieId}`, options)
  .then((response) => {
    return response.json();
  })
  .then((movie) => {
    // 페이지에 영화 데이터 표시하기
    const movieTitle = document.getElementById('movieTitle');
    const movieImage = document.getElementById('movieImage');
    const movieRating = document.getElementById('movieRating');
    const movieOverview = document.getElementById('movieOverview');

    movieTitle.textContent = movie.title;
    movieImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    movieImage.alt = movie.title;
    movieRating.textContent = `Rating: ${movie.vote_average}`;
    movieOverview.textContent = movie.overview;
  })
  .catch((e) => console.log('오류났습니다! 아쉽네요'));
//test
