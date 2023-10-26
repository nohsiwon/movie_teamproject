fetch('https://api.themoviedb.org/3/movie/top_rated?language=ko-US&page=1', options)
  .then((response) => response.json())
  .then((response) => {
    // 엔터누를 때 마다 검색
    value.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        moviesearch();
      }
    });

    // 입력할 때 마다 검색
    // value.addEventListener("keyup", () => {
    // moviesearch();
    // });

    // search 아이콘 누를 때 마다 검색
    search.addEventListener('click', () => {
      moviesearch();
    });

    // 검색결과 필터링 함수
    function moviesearch() {
      let searchValue = value.value;

      if (searchValue == '') {
        // 검색어가 비어있을 시
        alert('검색어를 입력해주세요');
      }

      // 검색어와 영화이름과 비교(대문자 ,소문자 상관x)
      let filtering = response.results.filter((movie1) =>
        movie1.title.toUpperCase().includes(searchValue.toUpperCase()),
      );

      // 일치하는 검색어가 없을 시, 있다면 필터링
      if (filtering.length == 0) {
        // 일치하는 검색어가 없을 시
        alert('일치하는 검색어가 없습니다');
      } else {
        // 일치하는 검색어가 있을 시 필터링

        // map 사용전에 부모 박스 비우기
        movies.innerHTML = '';

        // 필터링된 영화만 map으로 표시
        filtering.map((movie) => {
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
      }
    }
  });
