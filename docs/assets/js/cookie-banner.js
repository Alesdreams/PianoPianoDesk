document.addEventListener('DOMContentLoaded', function () {
  if (typeof window === 'undefined') return;
  if (localStorage.getItem('cookieChoice')) return;

  const banner = document.createElement('div');
  banner.id = 'cookieBanner';
  banner.className = 'cookie-banner';
  banner.innerHTML = `
    <p>Seleziona una delle seguenti opzioni prima di continuare:</p>
    <div class="buttons">
      <button class="btn-primary">Ti ho mandato il link</button>
      <button class="btn-secondary">Stai visionando il sito per un esame</button>
      <button class="btn-tertiary">Sto impazzendo e mi stai aiutando a capire cosa ho sbagliato</button>
    </div>
  `;

  document.body.appendChild(banner);

  // Small enter animation
  requestAnimationFrame(() => {
    banner.style.opacity = '1';
    banner.style.transform = 'translateY(0)';
  });

  banner.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', function () {
      const choice = this.textContent.trim();
      localStorage.setItem('cookieChoice', choice);
      banner.style.transition = 'opacity 180ms ease-out, transform 180ms ease-out';
      banner.style.opacity = '0';
      banner.style.transform = 'translateY(8px)';
      setTimeout(() => banner.remove(), 200);
      console.log('Scelta salvata:', choice);
    });
  });
});
