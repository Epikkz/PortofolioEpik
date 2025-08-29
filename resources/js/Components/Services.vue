<script setup>
import { ref, watch, computed } from 'vue';
import { Link } from '@inertiajs/vue3';
import { usePage } from '@inertiajs/vue3';
</script>

<template>
  <div id="services" class="mx-auto p-4 bg-gray-950 text-white min-h-screen">
    <h1 class="text-center text-3xl sm:text-4xl font-bold mb-8">Service</h1>

    <!-- Gray Container for Image -->
    <div class="bg-gray-400 h-64 mb-8 flex items-center justify-center rounded-lg overflow-hidden">
      <!-- Replace the src below with your image path -->
      <img src="assets/Profile.png" alt="Service Image" class="w-full h-full object-cover" />
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <!-- Frontend Service Card -->
      <div class="bg-gray-800 p-6 rounded-lg text-center transform transition duration-300 hover:scale-105 hover:bg-gray-700">
        <div class="bg-white p-4 rounded-full inline-block mb-4">
          <i class="fas fa-mobile-alt text-3xl text-gray-800"></i>
        </div>
        <h2 class="text-xl sm:text-2xl font-bold mb-2">FrontEnd</h2>
        <p class="text-gray-400 text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
      </div>

      <!-- UI/UX Service Card -->
      <div class="bg-gray-800 p-6 rounded-lg text-center transform transition duration-300 hover:scale-105 hover:bg-gray-700">
        <div class="bg-white p-4 rounded-full inline-block mb-4">
          <i class="fas fa-pencil-ruler text-3xl text-gray-800"></i>
        </div>
        <h2 class="text-xl sm:text-2xl font-bold mb-2">UI/UX</h2>
        <p class="text-gray-400 text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
      </div>

      <!-- Design Service Card -->
      <div class="bg-gray-800 p-6 rounded-lg text-center transform transition duration-300 hover:scale-105 hover:bg-gray-700">
        <div class="bg-white p-4 rounded-full inline-block mb-4">
          <i class="fas fa-paint-brush text-3xl text-gray-800"></i>
        </div>
        <h2 class="text-xl sm:text-2xl font-bold mb-2">Game Developer (Godot)</h2>
        <p class="text-gray-400 text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
      </div>
    </div>
  </div>
</template>
