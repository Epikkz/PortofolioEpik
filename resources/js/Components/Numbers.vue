<script setup>
import { ref, onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

const number = ref(0); // Current number displayed
let observer = null; // IntersectionObserver instance

// Function to start the counting animation
const startCounting = () => {
  const target = 12; // Target number
  const duration = 2000; // Total animation duration in milliseconds
  const steps = target; // Number of steps (counting whole numbers)
  const interval = duration / steps; // Interval time per step

  let current = 0;

  const counter = setInterval(() => {
    current += 1;
    if (current > target) {
      clearInterval(counter); // Stop the interval when the target is reached
    } else {
      number.value = current;
    }
  }, interval);
};

onMounted(() => {
  // Initialize AOS for scroll animations
  AOS.init();

  // Use IntersectionObserver to start counting when the element enters the viewport
  const numberElement = document.querySelector('#number-counter');
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounting();
          observer.unobserve(numberElement); // Stop observing after the animation starts
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the element is visible
  );

  observer.observe(numberElement);
});
</script>

<template>
  <div class="bg-gray-950 w-full px-4 py-8 text-white">
    <div class="text-center" data-aos="fade-up">
      <h1 class="text-4xl font-bold mb-4">Number Of Projects I Did.</h1>
      <p id="number-counter" class="text-6xl font-bold mb-2">{{ number }}</p>
      <p class="text-lg">
        Including Personal Projects, Old School Projects, and Projects with Corporations
      </p>
    </div>
    <div class="flex justify-center items-center mt-8 w-full" data-aos="zoom-in">
      <div
        class="bg-gray-400 w-[80%] max-w-5xl aspect-video flex justify-center items-center overflow-hidden relative"
      >
        <img
          src="assets/iconplusframe.jpg"
          alt="Project Image"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

<style>
/* Smooth fade-up and scale animations */
[data-aos="fade-up"] {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
[data-aos="zoom-in"] {
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
</style>
