const weekPlan = document.querySelector('#weekPlan');
const days = [
  ['週一', '全身啟動'], ['週二', '伸展放鬆'], ['週三', '核心力量'],
  ['週四', '休息一下'], ['週五', '全身啟動'], ['週六', '自由活動'], ['週日', '好好休息']
];

// 用 JavaScript 產生每週計畫，之後要調整內容只需改上方資料。
days.forEach((day, index) => {
  const item = document.createElement('div');
  item.className = index === 0 ? 'day active' : 'day';
  item.innerHTML = `<b>${day[0]}</b><span>${day[1]}</span>`;
  weekPlan.appendChild(item);
});

const startButton = document.querySelector('#startButton');
const timer = document.querySelector('#timer');
let seconds = 15 * 60;
let interval;

// 按鈕提供簡易倒數，讓使用者能立刻開始第一段訓練。
startButton.addEventListener('click', () => {
  if (interval) return;
  startButton.textContent = '訓練進行中';
  interval = setInterval(() => {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
    const remain = String(seconds % 60).padStart(2, '0');
    timer.textContent = `剩下 ${minutes}:${remain}`;
    seconds -= 1;
    if (seconds < 0) {
      clearInterval(interval);
      interval = null;
      timer.textContent = '完成了！今天的你很棒。';
      startButton.textContent = '再做一次';
      seconds = 15 * 60;
    }
  }, 1000);
});
