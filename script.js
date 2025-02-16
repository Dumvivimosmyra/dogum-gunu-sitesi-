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

if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    darkModeButton.innerText = "Aydınlık Mod";
}

darkModeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    darkModeButton.innerText = isDark ? "Aydınlık Mod" : "Karanlık Mod";
});
localStorage.clear();
location.reload();
