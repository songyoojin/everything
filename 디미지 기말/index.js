// 날짜를 설정하는 함수
function updateDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
    const day = String(now.getDate()).padStart(2, '0');
    const dayName = now.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase(); // 요일을 영어 약자로 표시

    // HTML 요소에 날짜 삽입
    document.querySelector('.year').textContent = `${year}.`;
    document.querySelector('.month').textContent = `${month}.`;
    document.querySelector('.day').textContent = `${day}.`;
    document.querySelector('.day-name').textContent = `${dayName}.`; // 요일에 마침표 추가
}

// 페이지 로드 시 날짜 업데이트 실행
document.addEventListener('DOMContentLoaded', updateDate);


// 버튼에 문자열 "> " 추가
function addPrefixToButtons() {
    const buttons = document.querySelectorAll('.btn'); // 모든 버튼 선택
    buttons.forEach(button => {
        button.textContent = `> ${button.textContent.trim()}`; // 기존 텍스트 앞에 "> " 추가
    });
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', addPrefixToButtons);


// script.js
// 랜덤 운세 목록
const fortunes = [
    "오늘은 행운이 가득한 하루가 될 거예요!",
    "작은 일에서 큰 성과를 얻을 수 있어요.",
    "노력의 결실을 맺는 날입니다.",
    "약간의 인내가 필요한 하루가 될 거예요.",
    "좋은 소식이 당신을 기다리고 있습니다.",
    "새로운 도전을 시작하기에 좋은 날이에요.",
    "평온하고 안정적인 하루를 보내게 될 거예요.",
    "주변 사람들과의 협력이 필요한 하루입니다.",
    "오늘은 당신의 날! 자신감을 가지세요.",
    "작은 행복을 느낄 수 있는 하루입니다."
];

// 버튼 클릭 이벤트에 랜덤 운세 추가
function setupFortuneButton() {
    const fortuneButton = document.querySelector('.fortune'); // Fortune 버튼 선택

    fortuneButton.addEventListener('click', () => {
        const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)]; // 랜덤 운세 선택
        const encodedFortune = encodeURIComponent(randomFortune); // URL로 전달하기 위해 인코딩
        window.location.href = `fortune.html?message=${encodedFortune}`; // fortune.html로 이동하며 운세 전달
    });
}

// 페이지 로드 시 이벤트 설정
document.addEventListener('DOMContentLoaded', setupFortuneButton);




// 랜덤 음악 데이터
const musicList = [
    { title: "Bohemian Rhapsody", artist: "Queen", url: "https://youtu.be/fJ9rUzIMcZQ" },
    { title: "Shape of You", artist: "Ed Sheeran", url: "https://youtu.be/JGwWNGJdvx8" },
    { title: "Blinding Lights", artist: "The Weeknd", url: "https://youtu.be/4NRXx6U8ABQ" },
    { title: "Rolling in the Deep", artist: "Adele", url: "https://youtu.be/rYEDA3JcQqw" },
    { title: "Hotel California", artist: "Eagles", url: "https://youtu.be/5Nt4Tnnu3ig" }
];


// 버튼 클릭 이벤트에 랜덤 음악 추가
function setupMusicButton() {
    const musicButton = document.querySelector('.music'); // Music 버튼 선택

    if (musicButton) {
        musicButton.addEventListener('click', () => {
            const randomMusic = musicList[Math.floor(Math.random() * musicList.length)]; // 랜덤 음악 선택
            const encodedMusic = encodeURIComponent(JSON.stringify(randomMusic)); // JSON 데이터를 URL로 인코딩
            window.location.href = `music.html?data=${encodedMusic}`; // music.html로 이동하며 데이터 전달
        });
    } else {
        console.error("Music 버튼이 HTML에서 찾을 수 없습니다.");
    }
}

// 페이지 로드 시 이벤트 설정
document.addEventListener('DOMContentLoaded', setupMusicButton);





// Weather 버튼 클릭 이벤트 설정
function setupWeatherButton() {
    const weatherButton = document.querySelector('.weather'); // Weather 버튼 선택

    if (weatherButton) {
        weatherButton.addEventListener('click', () => {
            window.location.href = 'weather.html'; // weather.html로 이동
        });
    } else {
        console.error('Weather 버튼이 HTML에서 찾을 수 없습니다.');
    }
}

// 페이지 로드 시 이벤트 설정
document.addEventListener('DOMContentLoaded', setupWeatherButton);






