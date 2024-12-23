const apiKey = 'a2779f31ff1efacd51fed9b6e6ae0d13'; // OpenWeather API 키를 입력하세요
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// 날씨 데이터를 가져오는 함수
async function getWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords; // 사용자 위치
                console.log(`Latitude: ${latitude}, Longitude: ${longitude}`); // 디버깅용 콘솔 로그

                try {
                    // OpenWeather API 호출
                    const response = await fetch(
                        `${apiUrl}?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
                    );
                    const data = await response.json();
                    displayWeather(data); // 날씨 데이터를 표시하는 함수 호출
                } catch (error) {
                    console.error('API 요청 실패:', error);
                    document.querySelector('.weather-title').textContent =
                        '날씨 정보를 가져올 수 없습니다.';
                }
            },
            (error) => {
                console.error('위치 정보 가져오기 실패:', error);
                document.querySelector('.weather-title').textContent =
                    '위치 정보를 가져올 수 없습니다.';
            }
        );
    } else {
        console.error('브라우저에서 위치 정보를 지원하지 않습니다.');
        document.querySelector('.weather-title').textContent =
            '브라우저에서 위치 정보를 지원하지 않습니다.';
    }
}

// 날씨 데이터를 HTML에 표시하는 함수
function displayWeather(data) {
    const weather = data.weather[0].main; // 날씨 상태 (e.g., Clear, Rain)
    const temp = Math.round(data.main.temp); // 온도

    // 날씨 상태 및 온도 표시
    document.querySelector('.weather-title').textContent = `It's ${weather}`;
    document.querySelector('.weather-temp').textContent = `${temp}°C`;

    // 날씨 상태에 따라 스타일 변경
    const container = document.querySelector('.weather-container');
    container.classList.remove('sunny', 'rainy', 'cloudy', 'snowy'); // 기존 클래스 제거

    if (weather === 'Clear') {
        container.classList.add('sunny');
    } else if (weather === 'Rain') {
        container.classList.add('rainy');
    } else if (weather === 'Clouds') {
        container.classList.add('cloudy');
    } else if (weather === 'Snow') {
        container.classList.add('snowy');
    } else {
        container.classList.add('cloudy'); // 기본값: 구름 낀 날씨
    }
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', getWeather);
