<script setup>
import { ref, watch, computed } from 'vue';
import { Link } from '@inertiajs/vue3';
import { usePage } from '@inertiajs/vue3';
</script>

<template>
  <div id="about" class="bg-gray-900 text-white flex items-center justify-center min-h-screen">
    <div class="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-center">
      <!-- About Text Section -->
      <div class="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col items-start text-left">
        <h1 class="text-4xl md:text-5xl font-bold text-blue-400 mb-4">About Me</h1>
        <h2 class="text-2xl font-bold mb-2">VIKRI ABDULLAH R – FULLSTACK WEB, UI/UX, GAME DEVELOPER</h2>
        <p class="text-base leading-relaxed mb-4">
          Hi, My name is Vikri Abdullah R. I am a Fullstack Web Developer, UI/UX and also a small game developer i've  experienced in creating engaging and functional user interfaces. I am proficient in HTML, CSS, JavaScript, and various modern frameworks such as Vue.js and Laravel. Furthermore, I am also experienced in UI/UX design focused on optimal user experience.
          I have worked on a variety of projects, from web applications to e-commerce sites, and I always strive to provide innovative and efficient solutions. I believe that good design should not only be visually appealing but also easy to use and responsive across devices.
          I also have experience working with cross-functional teams, including back-end developers and graphic designers, to ensure each project runs smoothly from start to finish. I am always open to learning new things and adapting to the latest technologies to improve my skills.
        </p>
      </div>
      <!-- Image Section -->
      <div class="w-full md:w-2/6 flex justify-center">
        <div class="w-72 h-72 bg-white rounded-lg overflow-hidden flex items-center justify-center">
          <img src="assets/Profile2.jpg" alt="Profile Picture" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </div>
</template>
