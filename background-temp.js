import * as THREE from '../node_modules/three/build/three.module.js';

function main() {
  const canvas = document.querySelector('#home-background');
  const renderer = new THREE.WebGLRenderer({canvas});

  const fov = 75;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 15;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 6;

  const scene = new THREE.Scene();

  const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
  const detailedCubeGeometry = new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  const circleGeometry = new THREE.CircleGeometry(0.5, 12);

  function createObject(geometry, color) {
    let material = new THREE.MeshPhongMaterial({color});
  
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
  
    return cube;
  }
  // background plane
  const background = createObject(new THREE.PlaneGeometry(25, 25), 0xffffff);
  background.position.z = -1;

  const heartShape = new THREE.Shape();
  

  const objects = [
    createObject(cubeGeometry, 0xff4000),
    createObject(detailedCubeGeometry, 0xff0040),
    createObject(circleGeometry, 0x40ff00),
    createObject(new THREE.CircleGeometry(0.5, 24, Math.PI * 0.5, Math.PI * 1.5), 0x00ff40),
    createObject(new THREE.ConeGeometry(0.5, 1, 12), 0x4000ff),
    createObject(new THREE.ConeGeometry(0.5, 1, 24, Math.PI * 0.5, Math.PI * 1.5), 0x0040ff),
    createObject(new THREE.CylinderGeometry(0.5, 0.5, 1, 12), 0xff8000),
    createObject(new THREE.CylinderGeometry(0.6, 0.4, 1, 24, 4, true, 0, Math.PI), 0xff0080),
    createObject(new THREE.DodecahedronGeometry(0.5), 0x80ff00),
    createObject(new THREE.DodecahedronGeometry(0.5, 1), 0x00ff80),
  ];
  let columns = 4;

  const rotationSpeeds = new Array(objects.length);
  for (let i = 0; i < objects.length; i++)
    rotationSpeeds[i] = 0.5 + Math.random();

  const color = 0xffffff;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);

  function resizeRenderer(renderer, width, height) {
    const canvas = renderer.domElement;
    if (canvas.width !== width || canvas.height !== height) {
      columns = Math.floor((width - 100) / 100);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }
  }

  // render function ('draw')
  function render(time) {
    time *= 0.001;

    // resizes canvas and reframes camera when window is resized
    resizeRenderer(renderer, canvas.clientWidth, canvas.clientHeight);

    objects.forEach((object, i) => {
      const x = i % columns;
      const y = Math.floor(i / columns);
      object.position.x = -2 * ((columns - 1) / 2) + x * 2;
      object.position.y = 3 - y * 2;
      const speed = rotationSpeeds[i];
      const rot = time * speed;
      object.rotation.x = rot;
      object.rotation.y = rot;
    });
  
    renderer.render(scene, camera);
  
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

main();
