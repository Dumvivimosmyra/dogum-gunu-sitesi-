// Rastgele mesajlar
const messages = [
    "Bugün senin günün! 🎉",
    "Daha nice mutlu yıllara! 🥳",
    "Umarım harika bir yıl geçirirsin! 💖",
    "İyi ki doğdun, seni çok seviyorum! 😊",
    "Her günün bu kadar özel olsun! 🌟"
];

// Sayfa yüklendiğinde rastgele mesaj göster
document.addEventListener("DOMContentLoaded", () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("random-message").innerText = randomMessage;

    // Karanlık mod ayarını yükle
    loadTheme();
});

// Yeni rastgele mesaj gösterme fonksiyonu
function showRandomMessage() {
    const specialMessages = [
        "Hayatına renk katacak bir yıl diliyorum! 🎉",
        "Bu yılın en güzel yılın olsun! 💖",
        "Dilerim her günün çok özel geçer! ✨",
        "Her şey gönlünce olsun! 🌸",
        "Sen ve hayatın çok kıymetli 💫",
        "Her şey için teşekkür ederim 🤗",
        "İstediğini başarabilir ve yapabilirsin! 🌈"
    ];
    alert(specialMessages[Math.floor(Math.random() * specialMessages.length)]);
}

// Rastgele mesaj butonuna olay dinleyici ekle
document.getElementById("random-message-btn").addEventListener("click", showRandomMessage);

// Karanlık / Aydınlık mod
const darkModeButton = document.getElementById("dark-mode-btn");
const body = document.body;

function loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        darkModeButton.innerText = "Aydınlık Mod";
    } else {
        darkModeButton.innerText = "Karanlık Mod";
    }
}

darkModeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");

    // Tema bilgisini yerel depolamaya kaydet
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // Buton metnini değiştir
    darkModeButton.innerText = isDark ? "Aydınlık Mod" : "Karanlık Mod";
});

// YouTube API ile müzik arama
const apiKey = 'AIzaSyAwZ-jhy-8Sm4D7i3rUZkQFHy-uMzm-NqI'; // API anahtarınızı burada kullanın

function searchMusic() {
    const query = document.getElementById('search-input').value.trim();
    if (!query) {
        alert('Lütfen bir şarkı adı girin!');
        return;
    }

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&maxResults=5&key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const resultsContainer = document.getElementById('search-results');
            resultsContainer.innerHTML = ''; // Önceki sonuçları temizle

            data.items.forEach(item => {
                const videoId = item.id.videoId;
                const title = item.snippet.title;

                const songElement = document.createElement('div');
                songElement.classList.add('song');
                songElement.textContent = title;
                songElement.onclick = () => playMusic(videoId);

                resultsContainer.appendChild(songElement);
            });
        })
        .catch(error => {
            console.error('API hatası:', error);
            alert('Bir hata oluştu, lütfen tekrar deneyin.');
        });
}

// Şarkıyı çalma fonksiyonu
function playMusic(videoId) {
    const player = document.getElementById('youtube-player');
    player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`;
    document.getElementById('now-playing').innerText = `Şu anda çalıyor: ${videoId}`;
}

// Doğum günü tarihi
const birthdayDate = new Date("2025-03-25T00:05:00"); // 5 dakika sonrasını manuel olarak ayarla



// Sayfa yüklendiğinde geri sayımı başlat
document.addEventListener("DOMContentLoaded", () => {
    updateCountdown(); // Geri sayımı başlat
    setInterval(updateCountdown, 1000); // Her saniye geri sayımı güncelle
});

// Geri sayım güncelleme fonksiyonu
function updateCountdown() {
    const now = new Date();
    const timeDifference = birthdayDate - now;

    // Eğer doğum günü gelmişse, içeriği değiştir
    if (timeDifference <= 0) {
        // Geri sayım ve diğer içerikleri gizle
        document.getElementById("countdown-container").style.display = 'none';
        // Sayfanın geri kalan kısmını göster
        document.querySelector(".container").style.display = 'block';
    }

    // Gün, saat, dakika ve saniye hesaplama
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Geri sayım metnini güncelle
    document.getElementById("countdown").innerHTML = `${days}g ${hours}s ${minutes}d ${seconds}s`;
}


