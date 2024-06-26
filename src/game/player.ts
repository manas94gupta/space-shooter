export interface Player {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  movingLeft: boolean;
  movingRight: boolean;
  rotation: number;
  image: HTMLImageElement;
}

export const createPlayer = (canvasWidth: number, canvasHeight: number): Player => {
  const img = new Image();
  img.src = '/assets/images/player.png';
  return {
    x: canvasWidth / 2 - 20,
    y: canvasHeight - 50 ,
    width: 40,
    height: 40,
    speed: 5,
    movingLeft: false,
    movingRight: false,
    rotation: 0,
    image: img,
  };
};

export const updatePlayerPosition = (player: Player, canvasWidth: number) => {
  if (player.movingLeft && player.x > 0) {
    player.x -= player.speed;
    player.rotation = Math.max(player.rotation - 2, -15);
  } else if (player.movingRight && player.x + player.width < canvasWidth) {
    player.x += player.speed;
    player.rotation = Math.min(player.rotation + 2, 15);
  } else {
    player.rotation = 0;
  }
};

export const drawPlayer = (context: CanvasRenderingContext2D, player: Player) => {
  context.save();
  context.translate(player.x + player.width / 2, player.y + player.height / 2);
  context.rotate((player.rotation * Math.PI) / 180);
  context.translate(-(player.x + player.width / 2), -(player.y + player.height / 2));
  context.drawImage(player.image, player.x, player.y, player.width, player.height);
  context.restore();
};
