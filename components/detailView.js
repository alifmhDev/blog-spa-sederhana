function renderDetailView(id) {
    const app = document.getElementById('app');
    app.innerHTML = '<p>Loading...</p>';
  
    fetch(`data/${id}.json`)
      .then(res => res.json())
      .then(data => {
        app.innerHTML = `
          <h2>${data.judul}</h2>
          <p><em>${data.penulis} - ${data.tanggal}</em></p>
          <div class="detail-isi">
            ${data.isi.map(paragraf => `<p>${paragraf}</p>`).join('')}
          </div>
          <br>
          <a href="index.html">← Kembali</a>
        `;
      })
      .catch(error => {
        console.error('Gagal memuat artikel:', error);
        app.innerHTML = '<p>Gagal memuat artikel.</p>';
      });
  }
  