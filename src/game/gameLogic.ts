import { ref, type Ref } from 'vue';
import { createPlayer, drawPlayer, updatePlayerPosition } from './player';
import { type Enemy, createEnemy, drawEnemy, updateEnemyPosition } from './enemy';
import { type Bullet, createBullet, drawBullet, updateBulletPosition } from './bullet';

export const useGameLogic = (context: Ref<CanvasRenderingContext2D | null>, canvasWidth: number, canvasHeight: number) => {
  const player = ref(createPlayer(canvasWidth, canvasHeight));
  const enemies = ref<Enemy[]>([]);
  const bullets = ref<Bullet[]>([]);
  const score = ref(0);
  const lives = ref(3);
  const gameStarted = ref(false);
  const gameOver = ref(false);
  const highestScore = ref(parseInt(localStorage.getItem('highestScore') || '0', 10));
  let enemyInterval: number | null = null;
  let difficultyMultiplier = 1;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.code === 'ArrowLeft') {
      player.value.movingLeft = true;
    } else if (event.code === 'ArrowRight') {
      player.value.movingRight = true;
    } else if (event.code === 'Space') {
      if (!gameStarted.value) {
        startGame();
      } else {
        shootBullet();
      }
    }
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.code === 'ArrowLeft') {
      player.value.movingLeft = false;
    } else if (event.code === 'ArrowRight') {
      player.value.movingRight = false;
    }
  };

  const shootBullet = () => {
    bullets.value.push(createBullet(player.value.x + player.value.width / 2, player.value.y));
  };

  const spawnEnemy = () => {
    if (enemyInterval !== null) {
      clearInterval(enemyInterval);
    }

    enemyInterval = setInterval(() => {
      if (gameStarted.value) {
        enemies.value.push(createEnemy(canvasWidth, difficultyMultiplier));
      }
    }, 1000);
  };

  const checkCollision = (obj1: any, obj2: any): boolean => {
    return obj1.x < obj2.x + obj2.width &&
           obj1.x + obj1.width > obj2.x &&
           obj1.y < obj2.y + obj2.height &&
           obj1.y + obj1.height > obj2.y;
  };

  const update = () => {
    if (!context.value) return;

    context.value.clearRect(0, 0, canvasWidth, canvasHeight);
    updatePlayerPosition(player.value, canvasWidth);
    drawPlayer(context.value, player.value);

    bullets.value.forEach((bullet, index) => {
      updateBulletPosition(bullet);
      drawBullet(context.value, bullet);
      if (bullet.y < 0) {
        bullets.value.splice(index, 1);
      }
    });

    enemies.value.forEach((enemy, index) => {
      updateEnemyPosition(enemy);
      drawEnemy(context.value, enemy);

      if (enemy.y > canvasHeight) {
        lives.value--;
        enemies.value.splice(index, 1);
      }

      if (checkCollision(player.value, enemy)) {
        lives.value--;
        enemies.value.splice(index, 1);
      }

      bullets.value.forEach((bullet, bulletIndex) => {
        if (checkCollision(bullet, enemy)) {
          score.value += 10;
          enemies.value.splice(index, 1);
          bullets.value.splice(bulletIndex, 1);
        }
      });
    });

    // Increase difficulty based on the score
    difficultyMultiplier = 1 + Math.floor(score.value / 100) * 0.1;

    if (lives.value > 0) {
      requestAnimationFrame(update);
    } else {
      gameOver.value = true;
      gameStarted.value = false;
      if (score.value > highestScore.value) {
        highestScore.value = score.value;
        localStorage.setItem('highestScore', highestScore.value.toString());
      }
    }
  };

  const startGame = () => {
    gameStarted.value = true;
    gameOver.value = false;
    lives.value = 3;
    score.value = 0;
    enemies.value = [];
    bullets.value = [];
    spawnEnemy();
    update();
  };

  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('keyup', handleKeyUp);

  return {
    score,
    lives,
    gameStarted,
    gameOver,
    highestScore,
    startGame
  };
};
