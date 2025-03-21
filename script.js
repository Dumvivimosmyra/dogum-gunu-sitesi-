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
const apiKey = 'YOUR_YOUTUBE_API_KEY'; // API anahtarınızı burada kullanın

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

// Videoyu gizlemek için iframe stilini ayarla
    player.style.display = 'none'; // Videoyu gizler

    document.getElementById('now-playing').innerText = `Şu anda çalıyor: ${videoId}`;
}

// Sayfa yüklendiğinde karanlık mod kontrolü
document.addEventListener("DOMContentLoaded", () => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "enabled") {
        document.body.classList.add("dark-mode");
    }
});

// Karanlık mod geçişinde renkleri kaydetme
function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
}


