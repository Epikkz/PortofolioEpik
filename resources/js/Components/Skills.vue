<template>
  <div id="skills" class="min-h-screen bg-gray-900 text-white">
    <div class="container mx-auto p-8">
      <div class="text-4xl font-bold text-green-400 mb-4">My Skills</div>
      <div class="border-b-2 border-gray-400 mb-8"></div>
      <!-- Responsive grid layout with 3 columns on mobile -->
      <div class="grid grid-cols-3 gap-4 sm:grid-cols-3 lg:grid-cols-3">
        <div v-for="(skill, index) in skills" :key="index" class="flex flex-col items-center gap-2">
          <img :src="skill.logo" :alt="skill.name + ' logo'" class="w-16 h-16" />
          <div class="font-bold text-center">{{ skill.name }}</div>
          <div class="w-full flex relative">
            <div class="skill-bar-bg flex-grow h-2">
              <div
                :class="`skill-bar-liquid ${isInView ? 'animate' : ''}`"
                :style="{ width: skill.percentage + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-left text-xl font-bold text-gray-400 mt-8">
        Including Soft Skill++
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const skills = [
  { name: "Photoshop", logo: "assets/adobeps.png", percentage: 75 },
  { name: "Canva", logo: "assets/canva.png", percentage: 80 },
  { name: "HTML5", logo: "assets/html5.png", percentage: 85 },
  { name: "JavaScript", logo: "assets/javascript.png", percentage: 81 },
  { name: "Laravel PHP", logo: "assets/laravel.png", percentage: 85 },
  { name: "UI/UX", logo: "assets/figma.png", percentage: 89 },
  { name: "Godot", logo: "assets/godot.png", percentage: 86 },
  { name: "PublicSpeaking", logo: "assets/pubspeak.png", percentage: 90 },
  { name: "Team Work", logo: "assets/teamwork.png", percentage: 85 },
];

const isInView = ref(false);

const observerOptions = {
  threshold: 0.5, // Trigger when 50% of the element is in view
};

onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    isInView.value = entry.isIntersecting;
  }, observerOptions);

  const skillBars = document.querySelectorAll('.skill-bar-bg');
  skillBars.forEach(bar => observer.observe(bar));
});
</script>

<style scoped>
/* Skill Bar Container */
.skill-bar-bg {
  background: #2d3748; /* Dark background for the empty progress bar */
  border-radius: 999px;
  overflow: hidden;
  position: relative;
}

/* Liquid effect progress bar */
.skill-bar-liquid {
  background: #48ef6e; /* Light green color for the liquid */
  height: 100%;
  border-radius: 999px;
  position: absolute;
  top: 0;
  left: 0;
  transition: width 0.5s ease-in-out;
}

/* Add animation when in view */
.skill-bar-liquid.animate {
  animation: liquidFill 2s ease-in-out forwards;
}

/* Keyframes for liquid-like animation */
@keyframes liquidFill {
  0% {
    width: 0%; /* Start at 0% width */
    transform: scaleY(1.2); /* Make the liquid a bit taller at the start */
  }
}

.skill-bar-container img {
  width: 60px;
  height: 60px;
}
</style>
