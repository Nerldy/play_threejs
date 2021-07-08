import "./style.css";
import * as THREE from 'three';

// Scene
const scene = new THREE.Scene()

// Object 
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 0xff0000})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes 
const size = {
    width: 800,
    height: 600
}

// Camera 
const camera = new THREE.PerspectiveCamera(75, size.width/size.height)
camera.position.z = 3
scene.add(camera)

// Renderer 
const renderer = new THREE.WebGL1Renderer({
    canvas: document.querySelector('canvas.webgl')
})
renderer.setSize(size.width, size.height)
renderer.render(scene, camera)