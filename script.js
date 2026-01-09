function celebrate(e) { // 這裡加上 e 來接收事件
  const wElement = document.getElementById('w');
  wElement.style.display = 'block';
 
  // 立即發射一次大噴發
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
  });

  // 自動持續噴發（建議寫成匿名函數，比較好控制參數）
  setInterval(function() {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
  }, 2000);

  // 隱藏按鈕：使用 e.target 就不會出錯了
  e.target.style.display = 'none';
  
  // 更改文字
  document.getElementById('title').innerText = "🎂 Happy Birthday! 🎂";
  document.getElementById('t').innerText = "";
}