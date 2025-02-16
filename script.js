// Rastgele mesajları tanımla
const messages = [
    "Bugün senin günün! 🎉",
    "Daha nice mutlu yıllara! 🥳",
    "Umarım harika bir yıl geçirirsin! 💖",
    "İyi ki doğdun, seni çok seviyoruz! 😊",
    "Her günün bu kadar özel olsun! 🌟"
];

// Sayfa yüklendiğinde rastgele mesajı göster
const randomMessage = messages[Math.floor(Math.random() * messages.length)];
document.getElementById("random-message").innerText = randomMessage;

// Rastgele mesaj gösteren fonksiyon
function showRandomMessage() {
    const specialMessages = [
        "Hayatına renk katacak bir yıl diliyorum! 🎉",
        "Bu yılın en güzel yılın olsun! 💖",
        "Dilerim her günün çok özel geçer! ✨",
        "Her şey gönlünce olsun! 🌸",
        "Sen ve hayatın çok kıymetli 💫",
        "Her şey için teşekkür ederim 🤗",
        "İstediğini başarabilir ve yapabilirsin!🌈"
    ];
    
    alert(specialMessages[Math.floor(Math.random() * specialMessages.length)]);
}

document.getElementById("random-message-btn").addEventListener("click", showRandomMessage);

// Aydınlık/Karanlık mod
const darkModeButton = document.getElementById("dark-mode-btn");
const body = document.body;

// Sayfa yüklenirken tema kontrolü
const savedTheme = localStorage.getItem("theme");
console.log("Sayfa yüklendi, tema kontrolü yapılıyor:", savedTheme);

if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    darkModeButton.innerText = "Aydınlık Mod";
} else if (savedTheme === "light") {
    body.classList.remove("dark-mode");
    darkModeButton.innerText = "Karanlık Mod";
}

darkModeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    darkModeButton.innerText = isDark ? "Aydınlık Mod" : "Karanlık Mod";
    console.log("Tema değiştirildi, yeni tema:", isDark ? "dark" : "light");
});

const apiKey = 'AIzaSyBMO0er75YBNra6a8F539gEIqf3IlVHdAc';  // YouTube API Anahtarını buraya ekle

function searchMusic() {
    const query = document.getElementById('search-input').value;
    if (!query) return alert('Lütfen bir şarkı adı girin!');

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&maxResults=5&key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const resultsContainer = document.getElementById('search-results');
            resultsContainer.innerHTML = '';

            data.items.forEach(item => {
                const videoId = item.id.videoId;
                const title = item.snippet.title;

                const songElement = document.createElement('div');
                songElement.classList.add('song');
                songElement.textContent = title;
                songElement.onclick = () => playMusic(videoId, title);

                resultsContainer.appendChild(songElement);
            });
        })
        .catch(error => console.error('Hata:', error));
}

function playMusic(videoId, title) {
    document.getElementById('now-playing').innerText = `Şu an çalan: ${title}`;
    document.getElementById('youtube-player').src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
}

