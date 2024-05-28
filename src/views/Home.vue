<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

async function isUserLoggedIn() {
  const router = useRouter();

  try {
    const user = localStorage.getItem('user');
    if (!user) {
      router.push('/signin');
    }
  } catch (error) {
    console.error("Error checking if user is logged in:", error);
  }
}

onMounted(isUserLoggedIn);
</script>

<template>
  <div>
    <h1>Home Page</h1>
  </div>
</template>
