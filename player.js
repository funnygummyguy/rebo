import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';


export class Player {
constructor(scene) {
this.group = new THREE.Group();


const mat = new THREE.MeshStandardMaterial({ color: 0x2196f3 });


const torso = new THREE.Mesh(new THREE.BoxGeometry(1,1.5,0.5), mat);
torso.position.y = 1.5;
this.group.add(torso);


const head = new THREE.Mesh(new THREE.BoxGeometry(0.8,0.8,0.8), mat);
head.position.y = 2.6;
this.group.add(head);


this.velocity = new THREE.Vector3();
this.onGround = false;


scene.add(this.group);
}


get position() {
return this.group.position;
}


update(input, physics) {
const speed = 0.1;


if (input.keys['w']) this.velocity.z = -speed;
if (input.keys['s']) this.velocity.z = speed;
if (input.keys['a']) this.velocity.x = -speed;
if (input.keys['d']) this.velocity.x = speed;


if (this.onGround && input.keys[' ']) {
this.velocity.y = 0.3;
this.onGround = false;
}


this.velocity.y -= 0.01;


physics.move(this, this.velocity);
}
}
