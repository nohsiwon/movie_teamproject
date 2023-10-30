//1. 페이지가 로드되면 좋아요를 검색하고
updateLikeDislikeUIOnLoad();

function updateLikeDislikeUIOnLoad() {
  console.log('테스트중입니다2.');
  let posts = JSON.parse(localStorage.getItem('posts')) || [];
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    console.log(post.movieId, movieId);
    if (post.movieId === movieId) {
      console.log('테스트중입니다.');
      updateLikeDislikeUI(i + 1, post.likes || 0, post.dislikes || 0);
    }
  }
}

//좋아요와 싫어요 로직 추가: 다음으로, 좋아요와 싫어요 버튼을 토글하는 함수를 추가합니다. 이 함수는 각 댓글에 대한 상태를 추적하고 로컬 스토리지에 저장합니다.
function toggleLikeDislike(commentId, action) {
  let posts = JSON.parse(localStorage.getItem('posts')) || [];
  const comment = posts[commentId - 1];

  // 좋아요와 싫어요 상태 추적
  if (!comment.likes) comment.likes = 0;
  if (!comment.dislikes) comment.dislikes = 0;

  if (action === 'like') {
    if (!comment.liked) {
      comment.likes++;
      comment.liked = true;
    } else {
      comment.likes--;
      comment.liked = false;
    }
  } else if (action === 'dislike') {
    if (!comment.disliked) {
      comment.dislikes++;
      comment.disliked = true;
    } else {
      comment.dislikes--;
      comment.disliked = false;
    }
  }

  // 로컬 스토리지에 업데이트된 댓글 저장
  localStorage.setItem('posts', JSON.stringify(posts));

  // 화면 업데이트
  updateLikeDislikeUI(commentId, comment.likes, comment.dislikes);
}

//화면 업데이트: 좋아요와 싫어요 상태가 변경될 때 화면을 업데이트하는 함수를 추가합니다.
function updateLikeDislikeUI(commentId, likes, dislikes) {
  // 좋아요와 싫어요 버튼 업데이트
  const likeBtn = document.querySelector(`#likeBtn_${commentId}`);
  console.log(`#likeBtn_${commentId}`);
  const dislikeBtn = document.querySelector(`#dislikeBtn_${commentId}`);
  likeBtn.textContent = `좋아요 (${likes})`;
  dislikeBtn.textContent = `싫어요 (${dislikes})`;
}

const likeBtns = document.querySelectorAll('.likeBtn');

for (const likeBtn of likeBtns) {
  likeBtn.addEventListener('click', (e) => {
    const svgs = likeBtn.querySelectorAll('svg'); // Use querySelectorAll on likeBtn
    const like = svgs[0];
    const disLike = svgs[1];
    console.log('clicked' + e);

    if (disLike.style.display === 'none') {
      // Check style.display to control visibility
      like.style.display = 'none';
      disLike.style.display = 'inline-block';
    } else {
      like.style.display = 'inline-block';
      disLike.style.display = 'none';
    }
  });
}
