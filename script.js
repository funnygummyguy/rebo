import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';
import { Input } from './engine/input.js';
import { CameraController } from './engine/camera.js';
import { Player } from './engine/player.js';
import { Physics } from './engine/physics.js';
import { PartManager } from './engine/parts.js';


// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);


// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);


// Lighting
scene.add(new THREE.AmbientLight(0xffffff, 0.4));
const sun = new THREE.DirectionalLight(0xffffff, 0.8);
sun.position.set(10,20,10);
scene.add(sun);


// Ground
const ground = new THREE.Mesh(
new THREE.BoxGeometry(200, 1, 200),
new THREE.MeshStandardMaterial({ color: 0x4caf50 })
);
ground.position.y = -0.5;
ground.userData.collidable = true;
scene.add(ground);


// Systems
const input = new Input();
const physics = new Physics();
const parts = new PartManager(scene);
const player = new Player(scene);
const cameraController = new CameraController(camera, player);


let playMode = false;


// UI Buttons
document.getElementById('playBtn').onclick = () => playMode = true;
document.getElementById('editBtn').onclick = () => playMode = false;
document.getElementById('addBlock').onclick = () => parts.createBlock();
document.getElementById('addRamp').onclick = () => parts.createRamp();


// Loop
function animate() {
requestAnimationFrame(animate);


if (playMode) {
player.update(input, physics);
}


cameraController.update(input);
renderer.render(scene, camera);
}


animate();
