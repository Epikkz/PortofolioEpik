<script setup>
import { ref, onMounted } from 'vue';

// Intersection Observer setup
const observedElements = ref([]);

const observeScrollEffects = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-100', 'translate-y-0');
      entry.target.classList.remove('opacity-0', 'translate-y-8');
    } else {
      entry.target.classList.add('opacity-0', 'translate-y-8');
      entry.target.classList.remove('opacity-100', 'translate-y-0');
    }
  });
};

onMounted(() => {
  const observer = new IntersectionObserver(observeScrollEffects, {
    threshold: 0.2, // Trigger at 20% visibility
  });

  observedElements.value = document.querySelectorAll('.fade-scroll');
  observedElements.value.forEach((el) => {
    observer.observe(el);
  });
});
</script>

<template>
  <div id="contact" class="bg-gray-900 min-h-screen flex items-center justify-center">
    <div
      class="fade-scroll opacity-0 translate-y-8 transition-all duration-700 w-full max-w-md px-4 text-center sm:px-6 mx-auto my-10"
    >
      <h1 class="text-yellow-400 text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
        Get ready to work with me?
      </h1>
      <div class="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg">
        <a
          href="https://www.linkedin.com/in/vikri-razzak-908942303/"
          target="_blank"
          class="group relative flex items-center border-b border-gray-600 py-3 sm:py-4 cursor-pointer overflow-hidden"
        >
          <i class="fab fa-linkedin text-white text-xl sm:text-2xl"></i>
          <span
            class="text-white text-lg sm:text-xl ml-4 flex-grow text-left transition-transform group-hover:translate-x-2"
          >
            LinkedIn
          </span>
          <span
            class="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
          ></span>
        </a>
        <a
          href="https://wa.me/6285179696920"
          target="_blank"
          class="group relative flex items-center border-b border-gray-600 py-3 sm:py-4 cursor-pointer overflow-hidden"
        >
          <i class="fab fa-whatsapp text-white text-xl sm:text-2xl"></i>
          <span
            class="text-white text-lg sm:text-xl ml-4 flex-grow text-left transition-transform group-hover:translate-x-2"
          >
            WhatsApp
          </span>
          <span
            class="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
          ></span>
        </a>
        <a
          href="https://www.instagram.com/ordinaryswanderer/"
          target="_blank"
          class="group relative flex items-center border-b border-gray-600 py-3 sm:py-4 cursor-pointer overflow-hidden"
        >
          <i class="fab fa-instagram text-white text-xl sm:text-2xl"></i>
          <span
            class="text-white text-lg sm:text-xl ml-4 flex-grow text-left transition-transform group-hover:translate-x-2"
          >
            Instagram
          </span>
          <span
            class="absolute inset-0 bg-pink-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
          ></span>
        </a>
        <!-- <a
          href="https://www.twitter.com"
          target="_blank"
          class="group relative flex items-center py-3 sm:py-4 cursor-pointer overflow-hidden"
        >
          <i class="fab fa-twitter text-white text-xl sm:text-2xl"></i>
          <span
            class="text-white text-lg sm:text-xl ml-4 flex-grow text-left transition-transform group-hover:translate-x-2"
          >
            Twitter
          </span>
          <span
            class="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
          ></span>
        </a> -->
      </div>
    </div>
  </div>
</template>

<style>
.fade-scroll {
  will-change: opacity, transform;
}
</style>
