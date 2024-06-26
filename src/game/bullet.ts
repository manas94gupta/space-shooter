export interface Bullet {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
}

export const createBullet = (x: number, y: number): Bullet => ({
  x: x - 2.5,
  y: y,
  width: 5,
  height: 10,
  speed: 7,
});

export const drawBullet = (context: CanvasRenderingContext2D, bullet: Bullet) => {
  context.fillStyle = 'white';
  context.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
};

export const updateBulletPosition = (bullet: Bullet) => {
  bullet.y -= bullet.speed;
};
