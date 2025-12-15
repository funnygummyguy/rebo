import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';


export class PartManager {
constructor(scene) {
this.scene = scene;
this.parts = [];
}


createBlock() {
const block = new THREE.Mesh(
new THREE.BoxGeometry(4,1,4),
new THREE.MeshStandardMaterial({ color: 0xff5722 })
);
block.position.set(0,0.5,-5);
block.userData = { anchored: true, canCollide: true };
this.scene.add(block);
this.parts.push(block);
}


createRamp() {
const ramp = new THREE.Mesh(
new THREE.BoxGeometry(4,1,4),
new THREE.MeshStandardMaterial({ color: 0x9c27b0 })
);
ramp.rotation.x = -0.5;
ramp.position.set(6,0.5,-5);
this.scene.add(ramp);
this.parts.push(ramp);
}
}
