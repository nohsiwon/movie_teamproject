// 사이트이름
let title = document.querySelector('.title');

// 검색창(input)
let value = document.getElementById('result');

// 검색아이콘
let search = document.getElementById('searchIcon');

// 무비 카드의 부모
let movies = document.querySelector('.movies');

// 사이트이름 클릭 시 새로고침
title.addEventListener('click', () => {
  location.reload();
});

// 사이트 들어왔을 때 검색창에 포커스
value.focus();

// API 가져오기
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODJmZGE4ZDMzZjM3ZjQzMTgyOTlkMWEwZjE4YjU0YiIsInN1YiI6IjY1MmZhZGMxY2FlZjJkMDExY2M3ODY1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wmHOY_iWlMlVfnWoFTBFlIgDDVv5qR8q3Il78PrgkEE',
  },
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=ko-US&page=1', options)
  .then((response) => response.json())
  .then((response) => {
    // 모든 영화 표시
    response.results.map((movie) => {
      let movieBox = document.createElement('div');
      movieBox.className = 'movie';
      movieBox.innerHTML = `
        <div class="movieTitle">${movie.title}</div>
          <div class="movieInner">
            <div class="movieImg">
              <img
                src=https://image.tmdb.org/t/p/w500${movie.poster_path}
                alt=""
              />
            </div>
            <div class="movieContent">
              <div class="rating">Rating : ${movie.vote_average}</div>
              <div class="summary">${movie.overview}</div>
          </div>
        </div>
      `;

      // 영화 부모 박스에 카드들 하나씩 넣기
      movies.append(movieBox);

      // 클릭 시 상세 페이지로 이동
      movieBox.addEventListener('click', () => {
        window.location.href = `./movieDetail.html?id=${movie.id}`;
      });
    });
  });
