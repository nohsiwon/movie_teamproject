// 시간을 표시하는 함수
const elapsedTime = (date) => {
    date = new Date(date);
    if (!(date instanceof Date) || isNaN(date)) {
      return '작성 시간 미정'; // 날짜가 유효하지 않으면 특별한 문자열 반환
    }
  
    const start = new Date(date);
    const end = new Date();
  
    const seconds = Math.floor((end.getTime() - start.getTime()) / 1000);
    if (seconds < 60) return '방금 전';
  
    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;
  
    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;
  
    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;
  
    return start.toLocaleDateString();
  };