import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
//Variables
let sun, planet1, planet2, renderer, camera, scene, orbit, ambLight; 
let material = new THREE.MeshPhongMaterial();
//Renderer
renderer = new THREE.WebGLRenderer(); 
renderer.setSize(window.innerWidth, window.innerHeight); 
document.body.appendChild(renderer.domElement); 

//scene
scene = new THREE.Scene(); 

//camera
camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.set(30, 0, -20);

//camera controls
orbit = new OrbitControls(camera, renderer.domElement);
orbit.listenToKeyEvents(window); 

orbit.enableDamping = true; 
orbit.dampingFactor = 0.03;

orbit.minDistance = 100; 
orbit.MaxDistance = 500; 

//lights 
ambLight = new THREE.AmbientLight(0x333333)
scene.add(ambLight); 

//Planets 
sun = new THREE.Mesh(new THREE.SphereGeometry(30, 60, 31), material );
scene.add(sun); 

window.addEventListener( 'resize', onWindowResize );
animate(); 
function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate(){
    requestAnimationFrame(animate); 
    orbit.update(); 
    render(); 
}

function render(){
    renderer.render(scene, camera); 
}
