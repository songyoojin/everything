// fortune.js
// URL 파라미터에서 운세 메시지를 읽어와 표시
function displayFortune() {
    const urlParams = new URLSearchParams(window.location.search);
    const fortuneMessage = urlParams.get('message');

    if (fortuneMessage) {
        document.querySelector('.fortune-message').textContent = decodeURIComponent(fortuneMessage);
    } else {
        document.querySelector('.fortune-message').textContent = "운세를 가져올 수 없습니다. 다시 시도해주세요.";
    }
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', displayFortune);
