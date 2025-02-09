<template>
  <div class="container" @mousemove="handleMouseMove" @wheel="handleScroll">
    <canvas ref="threeCanvas" class="three-canvas"></canvas>
    <h1 ref="animatedText" class="title">{{ message }}</h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import * as THREE from "three";

const messages = ["I DESIGN & CODE.", "Sometimes :)"];
const message = ref(messages[0]);
const animatedText = ref(null);
const threeCanvas = ref(null);

let index = 0;
let torusKnot, camera, particleSystem, scene, renderer;

function switchText() {
  gsap.to(animatedText.value, {
    duration: 1,
    opacity: 0,
    scale: 0.5,
    rotation: 180,
    ease: "power2.inOut",
    onComplete: () => {
      index = (index + 1) % messages.length;
      message.value = messages[index];

      gsap.fromTo(
        animatedText.value,
        { opacity: 0, scale: 0.5, rotation: -180 },
        { duration: 1.5, opacity: 1, scale: 1, rotation: 0, ease: "bounce.out" }
      );
    },
  });
}

function initThree() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ canvas: threeCanvas.value, alpha: true });

  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.z = 5;

  // Torus Knot (3Dオブジェクト)
  const geometry = new THREE.TorusKnotGeometry(1, 0.4, 100, 16);
  const material = new THREE.MeshStandardMaterial({ color: 0xff6347, wireframe: true });
  torusKnot = new THREE.Mesh(geometry, material);
  scene.add(torusKnot);

  // パーティクルシステムの追加
  const particleCount = 1000;
  const particlesGeometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20; // 20x20x20の範囲にランダム配置
  }

  particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const particlesMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.1,
    transparent: true,
    opacity: 0.8,
  });

  particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particleSystem);

  // ライト
  const light = new THREE.PointLight(0xffffff, 1, 100);
  light.position.set(5, 5, 5);
  scene.add(light);

  function animate() {
    requestAnimationFrame(animate);

    // パーティクルを回転させる
    particleSystem.rotation.y += 0.002;
    particleSystem.rotation.x += 0.001;

    renderer.render(scene, camera);
  }

  animate();
}

function handleMouseMove(event) {
  const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

  gsap.to(torusKnot.rotation, {
    x: mouseY * Math.PI,
    y: mouseX * Math.PI,
    duration: 0.5,
    ease: "power2.out",
  });

  gsap.to(particleSystem.rotation, {
    x: mouseY * 0.5,
    y: mouseX * 0.5,
    duration: 1,
    ease: "power2.out",
  });
}

function handleScroll(event) {
  gsap.to(camera.position, {
    z: camera.position.z + event.deltaY * 0.01,
    duration: 0.5,
    ease: "power2.out",
  });
}

onMounted(() => {
  initThree();
  setInterval(switchText, 3000);
});
</script>

<style scoped>
.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #121212;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: crosshair;
}

/* Three.js Canvas */
.three-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

/* メインタイトル */
.title {
  position: relative;
  color: #EAEAEA;
  font-size: 6rem;
  font-family: "Inter", "BIZ UDPGothic", sans-serif;
  font-weight: bold;
  text-align: center;
  z-index: 10;
  transition: all 0.4s ease;
  user-select: none;
}
</style>
