await loadSprite("player", "pics/player.png");

const player = add([
    sprite("player"),
    pos(100, 100),
    area(),
    body(),
]);

const SPEED = 200;

onKeyDown("left", () => player.move(-SPEED, 0));
onKeyDown("right", () => player.move(SPEED, 0));
onKeyDown("up", () => player.move(0, -SPEED));
onKeyDown("down", () => player.move(0, SPEED));