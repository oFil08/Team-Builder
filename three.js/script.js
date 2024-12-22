var scene = new THREE.Scene();
scene.background = new THREE.Color('gainsboro');

var camera = new THREE.PerspectiveCamera(30, innerWidth / innerHeight);
camera.position.set(5, 5, 10);
camera.lookAt(scene.position);

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.setAnimationLoop(animationLoop);
document.body.appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 1024;
directionalLight.shadow.mapSize.height = 1024;
directionalLight.shadow.camera.near = 1;
directionalLight.shadow.camera.far = 50;
directionalLight.shadow.camera.left = -10;
directionalLight.shadow.camera.right = 10;
directionalLight.shadow.camera.top = 10;
directionalLight.shadow.camera.bottom = -10;
scene.add(directionalLight);

const floorGeometry = new THREE.PlaneGeometry(30,30);
const floorMaterial = new THREE.MeshStandardMaterial({ color: 'lightgray' });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.receiveShadow = true;
floor.rotation.x = -Math.PI/2;
floor.rotation.z = Math.sin(60);
floor.position.y = -5;
scene.add(floor);

const wallMaterial = new THREE.MeshStandardMaterial({ color: 'lightgray', side: THREE.DoubleSide });
const backWall = new THREE.Mesh(new THREE.PlaneGeometry(30, 30), wallMaterial);
backWall.rotation.y = Math.sin(60);
backWall.position.z = -15;
backWall.receiveShadow = true;
scene.add(backWall);

const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(30, 30), wallMaterial);
leftWall.rotation.y = Math.PI / 2;
leftWall.position.x = -12; 
leftWall.position.z = -10;
leftWall.rotation.y = 1-Math.sin(60);
leftWall.receiveShadow = true;
scene.add(leftWall);


var geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 'tan' });
const object = new THREE.Mesh(geometry, material);
object.castShadow = true;
scene.add(object);

window.addEventListener("mousemove", onMouseMove);
let mouse = { x: 0, y: 0 };

function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
    const lightX = mouse.x * 10;
    const lightY = Math.max(mouse.y * 10, 1);
    directionalLight.position.set(lightX, lightY, 5);
  
}

function animationLoop() {
  object.rotation.y += 0.01;
  object.rotation.z += 0.01;

  renderer.render(scene, camera);
}
