// URL에서 데이터 읽어오기
function displayMusic() {
    const urlParams = new URLSearchParams(window.location.search);
    const musicData = urlParams.get('data');

    if (musicData) {
        const { title, artist, url } = JSON.parse(decodeURIComponent(musicData));
        document.querySelector('.music-title').textContent = title;
        document.querySelector('.music-artist').textContent = artist;
        document.querySelector('.music-link').textContent = "Listen on YouTube";
        document.querySelector('.music-link').href = url;
    } else {
        document.querySelector('.music-info').textContent = "음악 정보를 불러올 수 없습니다. 다시 시도해주세요.";
    }
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', displayMusic);
