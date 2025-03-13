// Giriş ekranı ve kullanıcı adı işlemleri
document.getElementById('login-btn').addEventListener('click', function() {
    const nickname = document.getElementById('nickname').value.trim();
    
    if (nickname) {
        // Kullanıcı adını yerel depolamaya kaydet
        localStorage.setItem('nickname', nickname);

        // Giriş ekranını gizle
        document.getElementById('login-screen').style.display = 'none';

        // Ana içeriği göster
        document.getElementById('main-content').style.display = 'block';

        // Kullanıcı adı göster
        document.getElementById('user-name').innerText = nickname;
    } else {
        alert('Lütfen bir takma ad girin!');
    }
});

// Sayfa yüklendiğinde, önceki giriş varsa kullanıcı adı ile karşılama
window.onload = function() {
    const storedNickname = localStorage.getItem('nickname');
    if (storedNickname) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        document.getElementById('user-name').innerText = storedNickname;
    }
};

// Rastgele mesajlar
const messages = [
    "Bugün senin günün! 🎉",
    "Daha nice mutlu yıllara! 🥳",
    "Umarım harika bir yıl geçirirsin! 💖",
    "İyi ki doğdun, seni çok seviyorum! 😊",
    "Her günün bu kadar özel olsun! 🌟"
];

// Sayfa yüklendiğinde rastgele mesaj
const randomMessage = messages[Math.floor(Math.random() * messages.length)];
document.getElementById("random-message").innerText = randomMessage;

// Yeni rastgele mesaj
function showRandomMessage() {
    const specialMessages = [
        "Hayatına renk katacak bir yıl diliyorum! 🎉",
        "Bu yılın en güzel yılın olsunn! 💖",
        "Dilerimm her günün çok özel geçerr! ✨",
        "Her şey gönlünce olsuunn! 🌸",
        "Senn ve hayatın çok kıymetli 💫", 
        "Her şey için teşekkür ederimm 🤗",
        "İstediğini başarabilir ve yapabilirsin!🌈"
    ];
    alert(specialMessages[Math.floor(Math.random() * specialMessages.length)]);
}

document.getElementById("random-message-btn").addEventListener("click", showRandomMessage);

// Karanlık/Aydınlık mod
const darkModeButton = document.getElementById("dark-mode-btn");
const body = document.body;

// Yerel depolamadan önceki tema bilgisini al
const savedTheme = localStorage.getItem("theme");

// Sayfa yüklendiğinde doğru tema ayarını yap
if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    darkModeButton.innerText = "Aydınlık Mod";
} else {
    darkModeButton.innerText = "Karanlık Mod";
}

darkModeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode"); // Karanlık modu aç/kapat
    const isDark = body.classList.contains("dark-mode"); // Tema durumu kontrol et

    // Tema bilgisini yerel depolamaya kaydet
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // Buton metnini değiştir
    darkModeButton.innerText = isDark ? "Aydınlık Mod" : "Karanlık Mod";
});

// YouTube API ile müzik arama
const apiKey = 'AIzaSyAwZ-jhy-8Sm4D7i3rUZkQFHy-uMzm-NqI'; // API anahtarı

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
    document.getElementById('now-playing').innerText = 'Şu anda çalıyor: ' + videoId;
}




