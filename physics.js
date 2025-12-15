export class Physics {
move(player, velocity) {
player.position.add(velocity);


if (player.position.y <= 0) {
player.position.y = 0;
velocity.y = 0;
player.onGround = true;
}
}
}
