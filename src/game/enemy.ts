const enemyImages = ['/src/assets/images/enemies/gorgias.png', '/src/assets/images/enemies/shopify.png', '/src/assets/images/enemies/zendesk.png', '/src/assets/images/enemies/kustomer.png'];

export interface Enemy {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  image: HTMLImageElement;
}

const enemySizes = [
  { width: 50, height: 50, speed: 2 },
  { width: 40, height: 40, speed: 1.75 },
  { width: 30, height: 30, speed: 1.5 },
];

export const createEnemy = (canvasWidth: number, difficultyMultiplier: number): Enemy => {
  const img = new Image();
  img.src = enemyImages[Math.floor(Math.random() * enemyImages.length)];
  const size = enemySizes[Math.floor(Math.random() * enemySizes.length)];
  return {
    x: Math.random() * (canvasWidth - size.width),
    y: -size.height,
    width: size.width,
    height: size.height,
    speed: size.speed * difficultyMultiplier,
    image: img,
  };
};

export const updateEnemyPosition = (enemy: Enemy) => {
  enemy.y += enemy.speed;
};

export const drawEnemy = (context: CanvasRenderingContext2D, enemy: Enemy) => {
  context.drawImage(enemy.image, enemy.x, enemy.y, enemy.width, enemy.height);
};

