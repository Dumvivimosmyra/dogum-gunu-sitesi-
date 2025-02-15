// İlk rastgele mesajları tanımlıyoruz
const messages = [
    "Bugün senin günün! 🎉",
    "Daha nice mutlu yıllara! 🥳",
    "Umarım harika bir yıl geçirirsin! 💖",
    "İyi ki doğdun, seni çok seviyoruz! 😊",
    "Her günün bu kadar özel olsun! 🌟"
];

// Sayfa yüklendiğinde ilk rastgele mesajı göster
const randomMessage = messages[Math.floor(Math.random() * messages.length)];
document.getElementById("random-message").innerText = randomMessage;

// Butona tıklanınca rastgele mesaj gösteren fonksiyon
function showRandomMessage() {
    const specialMessages = [  // Butonla gösterilecek farklı mesajlar
        "Hayatına renk katacak bir yıl diliyorum! 🎉",
        "Bu yılın en güzel yılın olsunn! 💖",
        "Dilerim her günün çok özel geçer! ✨",
        "Her şey gönlünce olsun! 🌸",
        "Sen ve hayatın çok kıymetli 💫", 
        "Her şey için teşekkür ederimm 🤗",
        "İstediğini başarabilir ve yapabilirsin!🌈"
    ];
    
    const randomSpecialMessage = specialMessages[Math.floor(Math.random() * specialMessages.length)];
    alert(randomSpecialMessage);  // Mesaj gösteren kutu
}

// Butona tıklanıldığında rastgele mesaj göster
document.getElementById("random-message-btn").addEventListener("click", showRandomMessage);

const darkModeButton = document.getElementById("dark-mode-btn");
const body = document.body;

// LocalStorage'den mod bilgisini al
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    darkModeButton.innerText = "Aydınlık Mod";  // Buton metnini güncelle
}

// Butona tıklanıldığında mod değiştir
darkModeButton.addEventListener("click", function() {
    body.classList.toggle("dark-mode");

    // Modu localStorage'a kaydet
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        darkModeButton.innerText = "Aydınlık Mod";  // Buton metnini güncelle
    } else {
        localStorage.removeItem("theme");
        darkModeButton.innerText = "Karanlık Mod";  // Buton metnini geri al
    }
});

