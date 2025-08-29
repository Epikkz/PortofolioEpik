<script setup>
import { ref } from 'vue';
import '@fortawesome/fontawesome-free/css/all.css';

// Reactive state for toggling the mobile menu
const isMobileMenuOpen = ref(false);

// Toggle the mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
  <nav
    id="navbar"
    class="relative flex items-center justify-between p-4 shadow-lg md:fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out bg-white"
  >
    <div class="text-xl font-bold text-black">Vikri Abdullah Razzak</div>
    <!-- Hamburger Menu -->
    <div class="flex items-center md:hidden">
      <button
        id="navbar-toggle"
        @click="toggleMobileMenu"
        class="text-black focus:outline-none transition-transform duration-300 transform hover:scale-110"
      >
        <i :class="isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
      </button>
    </div>
    <!-- Desktop Menu -->
    <div class="hidden md:flex space-x-6 items-center" id="navbar-menu">
      <a href="#home" class="text-black hover:text-blue-400 transition-colors duration-300 hover:underline">
        HomePage
      </a>
      <a href="#about" class="text-black hover:text-blue-400 transition-colors duration-300 hover:underline">
        AboutMe
      </a>
      <a href="#project" class="text-black hover:text-blue-400 transition-colors duration-300 hover:underline">
        Portfolio
      </a>
      <a href="#skills" class="text-black hover:text-blue-400 transition-colors duration-300 hover:underline">
        Skills!
      </a>
      <a href="#services" class="text-black hover:text-blue-400 transition-colors duration-300 hover:underline">
        Service
      </a>
      <a href="#contact" class="text-black hover:text-blue-400 transition-colors duration-300 hover:underline">
        Contact
      </a>
      <!-- Corrected Resume Link -->
      <a
        href="/assets/pdf/CV_Epik.pdf"
        download="CV_Epik.pdf"
        class="text-black hover:text-blue-400 transition-colors duration-300 hover:underline"
      >
        Resume/CV
      </a>
    </div>
    <!-- Mobile Menu -->
    <div
      id="mobile-menu"
      :class="isMobileMenuOpen ? 'block' : 'hidden'"
      class="absolute top-full left-0 w-full bg-white shadow-lg md:hidden transition-all duration-300"
    >
      <a href="#home" class="block px-4 py-2 text-black hover:text-blue-400 transition-colors duration-300">
        HomePage
      </a>
      <a href="#about" class="block px-4 py-2 text-black hover:text-blue-400 transition-colors duration-300">
        AboutMe
      </a>
      <a href="#project" class="block px-4 py-2 text-black hover:text-blue-400 transition-colors duration-300">
        Portfolio
      </a>
      <a href="#skills" class="block px-4 py-2 text-black hover:text-blue-400 transition-colors duration-300">
        Skills!
      </a>
      <a href="#services" class="block px-4 py-2 text-black hover:text-blue-400 transition-colors duration-300">
        Service
      </a>
      <a href="#contact" class="block px-4 py-2 text-black hover:text-blue-400 transition-colors duration-300">
        Contact
      </a>
      <!-- Corrected Resume Link for Mobile -->
      <a
        href="/assets/pdf/CV_Epik.pdf"
        download="CV_Epik.pdf"
        class="text-black hover:text-blue-400 block px-4 py-2 transition-colors duration-300 hover:underline"
      >
        Resume/CV
      </a>
    </div>
  </nav>
</template>

<style>
/* Navbar styles */
nav {
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

/* Mobile menu styles */
#mobile-menu {
  transition: max-height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

/* Body styles */
body {
  background-color: #1a1a1a;
  background-image: url('https://www.transparenttextures.com/patterns/cubes.png');
  font-family: 'Inter', sans-serif;
}
</style>
