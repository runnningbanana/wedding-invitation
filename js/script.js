
  // 結婚式の日付をここで指定
  const targetDate = new Date("2025-11-22T13:00:00");

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      document.getElementById("countdown").innerHTML = "TIME IS NOW!!";
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



  document.addEventListener('DOMContentLoaded', () => {
    const fadeInTargets = document.querySelectorAll('.fade-in-up');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, {
      threshold: 0.1
    });

    fadeInTargets.forEach(el => {
      observer.observe(el);
    });

    // 強制的に最初の要素の位置を確認
    setTimeout(() => {
      fadeInTargets.forEach(el => {
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView) {
          el.classList.add('in-view');
        }
      });
    }, 100);

    // コインの回転処理
    document.querySelectorAll('.coin').forEach(img => {
      img.addEventListener('click', () => {
        img.classList.add('flip');
        img.addEventListener('animationend', () => {
          img.classList.remove('flip');
        }, { once: true });
      });
    });
  });


  // フェードイン＋ふわふわ用（Intersection Observer）
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

  // タップ回転
  document.querySelectorAll('.coin').forEach(img => {
    img.addEventListener('click', () => {
      img.classList.add('flip');
      img.addEventListener('animationend', () => {
        img.classList.remove('flip');
      }, { once: true });
    });
  });


  window.addEventListener('load', () => {
    document.querySelector('.mv')?.classList.add('loaded');
  });



window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const main = document.querySelector("main");

  // フェードアウト
  setTimeout(() => {
    loader.classList.add("fade-out");
    // 本文表示
    main.style.display = "block";
    // ローダー削除（任意）
    setTimeout(() => {
      loader.remove();
    }, 1000); // フェードアウトの遅延と同じにする
  }, 1000); // ページ読み込み後すぐに開始してもOK（1秒でフェードアウト）
});
