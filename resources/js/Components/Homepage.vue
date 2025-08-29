<script setup>
import { ref, onMounted } from 'vue';

const baseText = "I Am into ";
const words = ["Front-End", "UI/UX", "Design"];
let i = 0; // index for the current word
let j = 0; // index for the current letter of the word
let isDeleting = false; // flag for deletion mode

const typewriterText = ref(baseText); // reactive reference for the typewriter text

// Function to handle the typewriter effect
function type() {
  const currentWord = words[i];

  if (isDeleting) {
    typewriterText.value = baseText + currentWord.substring(0, j - 1);
    j--;
    if (j === 0) {
      isDeleting = false;
      i++;
      if (i === words.length) {
        i = 0; // reset to the first word
      }
    }
  } else {
    typewriterText.value = baseText + currentWord.substring(0, j + 1);
    j++;
    if (j === currentWord.length) {
      isDeleting = true; // start deleting after finishing the current word
    }
  }

  setTimeout(type, isDeleting ? 100 : 220); // adjust speed based on deletion
}

// Start the typewriter effect when the component is mounted
onMounted(() => {
  type();
});
</script>

<template>
  <div id="home" class="flex items-center justify-center min-h-screen px-5 md:px-20">
    <div class="container flex flex-col md:flex-row items-center text-white p-5 space-y-6 md:space-y-0 md:space-x-10">
      <!-- Profile Circle with Image -->
      <div class="profile-circle w-48 h-48 md:w-64 md:h-64 rounded-full bg-gray-800 border-4 border-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 mb-4 md:mb-0 overflow-hidden">
        <img src="assets/me.png" alt="Profile" class="w-full h-full object-cover" />
      </div>
      <!-- Text Section -->
      <div class="text-center md:text-left">
        <h1 class="text-3xl md:text-5xl font-bold mb-4">Hi! My name is Vikri Abdullah Razzak</h1>
        <p class="text-xl md:text-2xl mb-4">A Computer Science enthusiast.</p>
        <p class="text-xl md:text-2xl mb-4">Part of Exovate.tech</p>
        <p class="text-lg md:text-xl mb-8" v-text="typewriterText"></p>
        <a href="#project">
          <button
            class="bg-white text-black py-2 px-4 md:py-3 md:px-6 rounded-full text-lg md:text-xl mb-6 md:mb-8 
              transition transform duration-300 ease-in-out 
              hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 
              hover:shadow-lg hover:scale-110 hover:text-white">
            View My Work
          </button>
        </a>

        <p class="text-lg md:text-xl mb-4">Let's connect</p>
        <div class="flex justify-center md:justify-start space-x-6">
          <a href="#" class="text-white text-2xl md:text-3xl"><i class="fab fa-instagram"></i></a>
          <a href="#" class="text-white text-2xl md:text-3xl"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-white text-2xl md:text-3xl"><i class="fab fa-linkedin"></i></a>
          <a href="#" class="text-white text-2xl md:text-3xl"><i class="fab fa-whatsapp"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

