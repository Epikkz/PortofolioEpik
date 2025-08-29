<script setup>
import { Head, Link } from '@inertiajs/vue3';
import HeadbarLayout from '@/Layouts/HeadbarLayout.vue';
import HomePage from '@/Components/Homepage.vue';
import aboutme from '@/Components/Aboutme.vue';
import projectsection from '@/Components/ProjectSection.vue';
import skills from '@/Components/Skills.vue';
import service from '@/Components/Services.vue';
import contact from '@/Components/Contact.vue';
import number from '@/Components/Numbers.vue';
import { ref, onMounted, computed } from 'vue';
import { defineProps } from 'vue';
</script>

<template>
  <HeadbarLayout/>
  <HomePage/>
  <aboutme/>
  <projectsection/>
  <number/>
  <skills/>
  <service/>
  <contact/>
    
</template>

<style scoped>
        h1, h2, h3, h4, h5, h6 {
            font-family: 'Poppins', sans-serif; /* Use Poppins for headings */
        }

        .text-lg, .text-xl, .text-2xl, .text-3xl, .text-5xl {
            font-family: 'Inter', sans-serif; /* Ensure that text elements use Inter */
        }
</style>
