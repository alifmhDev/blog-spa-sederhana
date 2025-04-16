function router() {
    const hash = location.hash;
  
    if (!hash || hash === '#') {
      renderListView();
    } else if (hash.startsWith('#artikel-')) {
      const id = hash.replace('#', '');
      renderDetailView(id);
    }
  }
  
  // Jalankan pertama kali & saat URL berubah
  window.addEventListener('load', router);
  window.addEventListener('hashchange', router);
  