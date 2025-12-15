export class CameraController {
constructor(camera, player) {
this.camera = camera;
this.player = player;
this.rotation = { x: 0, y: 0 };


document.addEventListener('mousemove', e => {
if (document.pointerLockElement) {
this.rotation.y -= e.movementX * 0.002;
this.rotation.x -= e.movementY * 0.002;
this.rotation.x = Math.max(-1.2, Math.min(1.2, this.rotation.x));
}
});


document.body.onclick = () => document.body.requestPointerLock();
}


update() {
const offset = { x: 0, y: 4, z: 8 };


const x = Math.sin(this.rotation.y) * offset.z;
const z = Math.cos(this.rotation.y) * offset.z;


this.camera.position.set(
this.player.position.x + x,
this.player.position.y + offset.y,
this.player.position.z + z
);


this.camera.lookAt(this.player.position);
}
}
