// ===== カウントダウン =====
const targetDate = new Date("2025-11-22T13:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  const countdown = document.getElementById("countdown");
  if (diff <= 0) {
    countdown.innerHTML = "TIME IS NOW!!";
    countdown.classList.add("countdown-finished");
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);


// ===== DOM準備ができたら =====
document.addEventListener('DOMContentLoaded', () => {
  // フェードイン共通処理（fade-in-up と animate-on-scroll に対応）
  const fadeTargets = document.querySelectorAll('.fade-in-up, .animate-on-scroll');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view', 'visible');
      }
    });
  }, {
    threshold: 0.1
  });

  fadeTargets.forEach(el => observer.observe(el));

  // 初期スクロール位置でも表示されるようにチェック
  setTimeout(() => {
    fadeTargets.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('in-view', 'visible');
      }
    });
  }, 100);

  // コイン回転処理
  document.querySelectorAll('.coin').forEach(img => {
    img.addEventListener('click', () => {
      img.classList.add('flip');
      img.addEventListener('animationend', () => {
        img.classList.remove('flip');
      }, { once: true });
    });
  });
});


// ===== ページロード完了時（画像なども含む）=====
window.addEventListener('load', () => {
  // MVクラスのロード済み処理
  document.querySelector('.mv')?.classList.add('loaded');

  // ローディングフェードアウト処理
  const loader = document.getElementById("loader");
  const main = document.querySelector("main");

  setTimeout(() => {
    loader.classList.add("fade-out");
    main.style.display = "block";
    setTimeout(() => loader.remove(), 1000);
  }, 1000);
});