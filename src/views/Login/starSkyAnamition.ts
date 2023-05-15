type StarI =  { x: number, y: number, size: number }

export function starSkyAnimate() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  // 设置画布大小为窗口大小
  canvas.width = window.innerWidth * 1.2;
  canvas.height = window.innerWidth * 1.2;

  // 定义星星的数量和大小范围
  const numStars = 1000;
  const minStarSize = 0.5;
  const maxStarSize = 1.5;

  // 创建星星对象数组
  let stars: StarI[] = [];
  for (let i = 0; i < numStars; i++) {
    // 随机生成星星的位置和大小
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * (maxStarSize - minStarSize) + minStarSize;
    stars.push({ x, y, size });
  }

  // 绘制星空背景
  function drawBackground() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  // 绘制单个星星
  function drawStar(star: StarI) {
    const gradient = ctx.createRadialGradient(
      star.x,
      star.y,
      0,
      star.x,
      star.y,
      star.size
    );
    gradient.addColorStop(0, "#fff");
    gradient.addColorStop(1, "#5f7dbb");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fill();
  }

  // 绘制所有星星
  function drawStars() {
    stars.forEach((star) => drawStar(star));
  }

  // 更新星星位置
  function updateStars() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const speed = 0.001; // 调整旋转速度

    stars.forEach((star) => {
      const angle = Math.atan2(star.y - centerY, star.x - centerX);
      const distance = Math.sqrt(
        (star.x - centerX) ** 2 + (star.y - centerY) ** 2
      );
      const newAngle = angle + speed;
      star.x = centerX + Math.cos(newAngle) * distance;
      star.y = centerY + Math.sin(newAngle) * distance;
    });
  }

  // 主循环
  function loop() {
    drawBackground();
    updateStars();
    drawStars();
    requestAnimationFrame(loop);
  }

  loop();
};
