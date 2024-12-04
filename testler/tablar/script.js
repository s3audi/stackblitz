// Tab başlıkları ve içerik alanlarını seçiyoruz
const tabs = document.querySelectorAll('.tab-titles li');
const panels = document.querySelectorAll('.tab-panel');

// Tab başlıklarına tıklama olayı ekliyoruz
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    // Önceki aktif tab'ı pasif yapıyoruz
    tabs.forEach((t) => t.classList.remove('active'));
    // Yeni tıklanan tab'ı aktif yapıyoruz
    tab.classList.add('active');

    // Hangi tab'a tıklanmışsa, ona ait içeriği gösteriyoruz
    const tabId = tab.getAttribute('data-tab');
    panels.forEach((panel) => {
      if (panel.id === tabId) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });
  });
});
