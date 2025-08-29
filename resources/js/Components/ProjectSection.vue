<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Define content data
const contents = ref([
  {
    title: 'System E-Voting SMKN 1 KOTA BENGKULU',
    description:
      'Web-based E-Voting Application System that my team and I created for the election of OSIS & MPK chairman of SMKN 1 Kota Bengkulu, our application is currently still being used at SMKN 1 KOTA BENGKULU!',
    image:
      'assets/evoting.png',
  },
  {
    title: 'School Suite SMKN 1 KOTA BENGKULU',
    description:
      'School Suite is a web-based digital attendance system. Its a collaborative application between SMKN 1 KOTA BENGKULU and PT Inovindo Digital Media. Im the front-end team here! <a href="https://schoolsuite.id/" class="text-pink-500 underline" target="_blank">Website SchoolSuite</a> (Website Unactive)',
    image:
      'assets/ssuite.jpg',
  },

  {
    title: 'CMS System For PLN Icon Plus',
    description:
      'CMS system for PLN Icon Plus employees',
    image:
      'assets/cmsweb.png',
  },

  {
    title: 'Digital Signature System For PLN Icon Plus',
    description:
      'Digital Signature System or digital signature for PLN Icon Plus employees',
    image:
      'assets/digitalsig.png',
  },

  {
    title: 'UI/UX For Listirqu App',
    description:
      'UI/UX For  mobile Listriqu App (Revamp)',
    image:
      'assets/listriquui.png',
  },

    {
    title: 'Form Registrasi Atlet',
    description:
      'National Athlete Registration Form Website, created for client request',
    image:
      'assets/formregistrasi.png',
  },

     {
    title: 'Apotek E-Commerce',
    description:
      'Web-based Pharmacy E-Commerce System, This application is made for client requests',
    image:
      'assets/ecommerce.png',
  },

   {
    title: 'Deadman : Project Game',
    description:
      'Personal game project that I made, with the Godot Engine <a href="https://bluesluka.itch.io/deadman-project" class="text-pink-500 underline" target="_blank">Download Game nya (PC Only)</a>',
    image:
      'assets/deadman.png',
  },

     {
    title: 'SMKN 1 Kota Bengkulu 3D Model (Roblox)',
    description:
      '3D View of the Front Building of SMKN 1 Bengkulu City Model <a href="https://www.roblox.com/games/13183729188/SMKN-1-KOTA-BENGKULU-REPLIKA" class="text-pink-500 underline" target="_blank">See the building</a>',
    image:
      'assets/robloxbuild.png',
  }

]);

const currentContentIndex = ref(0);

const showNextContent = () => {
  currentContentIndex.value =
    (currentContentIndex.value + 1) % contents.value.length;
};

// Auto-slide setup
let autoSlideInterval;
onMounted(() => {
  autoSlideInterval = setInterval(showNextContent, 10000);
});

onBeforeUnmount(() => {
  clearInterval(autoSlideInterval);
});

// Navigate to the previous content
const showPreviousContent = () => {
  currentContentIndex.value =
    (currentContentIndex.value - 1 + contents.value.length) %
    contents.value.length;
};
</script>

<template>
  <div id="project" class="bg-gray-950 w-full px-4 py-8 relative">
    <h1 class="text-4xl font-bold mb-8 text-white text-center">
      Project that I had <span class="text-pink-500">done.</span>
    </h1>
    <div class="flex items-center lg:relative">
      <!-- Left Button -->
      <button
        class="bg-white text-black rounded-full p-2 absolute top-56 left-2 lg:static z-10"
        @click="showPreviousContent"
      >
        <i class="fas fa-chevron-left"></i>
      </button>

      <!-- Dynamic Content -->
      <div
        class="flex-1 flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 transition-all duration-500 ease-in-out"
        key="currentContentIndex"
      >
        <!-- Image Container with Fixed 16:9 Aspect Ratio -->
        <div class="relative w-full lg:w-1/3 aspect-w-16 aspect-h-9">
          <!-- Image with Absolute Size -->
          <img
            :key="contents[currentContentIndex].image"
            :alt="contents[currentContentIndex].title"
            class="absolute inset-0 w-full h-full object-cover"
            :src="contents[currentContentIndex].image"
          />
        </div>
        
        <div
          :key="contents[currentContentIndex].title"
          class="transition-opacity duration-500 opacity-0 animate-fade-in"
        >
          <h3 class="text-2xl font-bold text-white">
            {{ contents[currentContentIndex].title }}
          </h3>
          <p class="text-white" v-html="contents[currentContentIndex].description"></p>
        </div>
      </div>

      <!-- Right Button -->
      <button
        class="bg-white text-black rounded-full p-2 absolute top-56 right-2 lg:static"
        @click="showNextContent"
      >
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-in-out forwards;
}

/* Ensures 16:9 aspect ratio for all images */
.aspect-w-16 {
  aspect-ratio: 16 / 9;
}

.aspect-h-9 {
  aspect-ratio: 16 / 9;
}
</style>
