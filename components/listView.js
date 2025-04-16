function renderListView() {
    const app = document.getElementById('app');
    app.innerHTML = '<h2>Daftar Artikel</h2>';
  
    // Buat daftar file JSON (bisa otomatis nantinya)
    const daftarArtikel = ['artikel-1', 'artikel-2', 'artikel-3'];
  
    daftarArtikel.forEach(file => {
      fetch(`data/${file}.json`)
        .then(res => res.json())
        .then(data => {
          const card = document.createElement('div');
          card.classList.add('artikel-card'); // ✅ Tambahin class di sini

          card.innerHTML = `
            <h3><a href="#${data.id}">${data.judul}</a></h3>
            <p><em>${data.penulis} - ${data.tanggal}</em></p>
            <hr/>
          `;
          
          app.appendChild(card);
        });
    });
  }
  
