const now = new Date(); //获取当前月份
const year = now.getFullYear();
const month = now.getMonth() + 1;

initTime();
generateDays();

//帮助函数
function initTime() {
  const time = g("#time");
  time.textContent = `${year}年${month}月`;
}

function generateDays() {
  //days
  const 月初 = new Date(year, month - 1, 1);
  const 月初星期几 = 月初.getDay();
  const 月末 = new Date(new Date(year, month - 1 + 1, 1) - 86400 * 1000);
  const 月末几号 = 月末.getDate();
  const 月末星期几 = 月末.getDay();
  const days = g("#days");
  //月初铺垫
  for (let i = 1; i < 月初星期几; i++) {
    const li = document.createElement("li");
    const d = new Date(月初 - 86400 * 1000 * i);
    li.textContent = d.getDate();
    days.prepend(li);
  }
  const 这个月多少天 = 月末几号;
  for (let i = 1; i <= 这个月多少天; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    days.append(li);
  }
  //月尾铺垫
  for (let i = 月末星期几 + 1; i <= 7; i++) {
    const delta = i - 月末星期几;
    const li = document.createElement("li");
    const d = new Date(月末 - 0 + 86400 * 1000 * delta);
    li.textContent = d.getDate();
    days.append(li);
  }
}

function g(selector) {
  return document.querySelector(selector);
}
function gs(selector) {
  return document.querySelectorAll(selector);
}
