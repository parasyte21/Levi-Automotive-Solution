  const contactBtn = document.querySelector('.contact-button');
  const popup = document.querySelector('.popup');
  const closeBtn = document.querySelector('.close-button');

  // 点击按钮 -> 显示 popup
  contactBtn.addEventListener('click', () => {
    popup.style.display = 'block';
  });

  // 点击关闭按钮 -> 隐藏 popup
  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  // 点击背景区域（不是弹窗内容） -> 也关闭 popup
  window.addEventListener('click', (event) => {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });