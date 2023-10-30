// 글 작성이 완료된 후 글 내용을 로컬 스토리지에 저장
function saveToLocalStorage(writer, pwd, content, star, timestamp, likes, disLikes) {
  const newIdx = issueNewCommentIdx();
  const comment = {
    id: newIdx,
    writer,
    pwd,
    content,
    star,
    timestamp,
    likes: 0, // 초기 좋아요 카운트
    dislikes: 0, // 초기 싫어요 카운트
  };

  let posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.push(comment);
  localStorage.setItem('posts', JSON.stringify(posts));
}

/* 페이지 로드 시 로컬 스토리지에서 글을 불러와 목록에 표시 */
window.onload = function () {
  loadFromLocalStorage();
};

function loadFromLocalStorage() {
  let list = document.getElementById('list');
  let posts = JSON.parse(localStorage.getItem('posts')) || [];
  for (let i = 0; i < posts.length; i++) {
    let post = posts[i];
    // 영화 ID에 따라 필터링
    if (post.movieId === movieId) {
      let el = makeDiv(i, post.writer, post.pwd, post.content, post.star, post.timestamp);
      list.appendChild(el);
    }
  }
}

function issueNewCommentIdx() {
  let posts = JSON.parse(localStorage.getItem('posts')) || [];
  return posts.length;
}
