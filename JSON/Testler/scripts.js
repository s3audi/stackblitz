window.onload = function() {
    // GSAP animasyonu ile daireyi hareket ettiriyoruz
    gsap.fromTo(".circle", {
        x: -200,  // Başlangıç pozisyonu
        opacity: 0,
    }, {
        x: 200,   // Bitiş pozisyonu
        opacity: 1,
        duration: 2, // 2 saniye sürecek animasyon
        ease: "power2.out", // Animasyon geçiş hızı
        repeat: -1,  // Sonsuz kez tekrarlama
        yoyo: true   // Animasyon bittiğinde tersine dönmesini sağlama
    });
};
