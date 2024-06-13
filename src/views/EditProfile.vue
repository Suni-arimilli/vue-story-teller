<template>
  <v-container class="container">
    <h1>Edit Profile</h1>
    <v-form @submit.prevent="updateProfile">
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field v-model="user.first_name" label="First Name" required></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="user.last_name" label="Last Name" required></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="user.email" label="Email" disabled></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="user.password" label="Password" type="password" required></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn type="submit" color="primary">Update</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import userService from '../services/UserServices'; // Import the user service with API calls
import { useRouter } from 'vue-router';

const router = useRouter();

const user = ref({
  firstName: '',
  lastName: '',
  email: '', // Email will be fetched from API
  password: '',
  id: ''
});

onMounted(async () => {
  // Fetch user details from API
  try {
    const userSession = JSON.parse(localStorage.getItem('user'));
    if (!userSession) {
      router.push('/signin');
    }
    fetchUserInfo();
  } catch (error) {
    console.error('Error fetching user details:', error);
  }
});

const updateProfile = async () => {
  try {
    await userService.updateUser(user.value); // API call to update user profile
    alert('Profile updated successfully!');
    fetchUserInfo();
  } catch (error) {
    console.error('Error updating profile:', error);
    alert('Failed to update profile. Please try again.');
  }
};

const fetchUserInfo = async() => {
    const userSession = JSON.parse(localStorage.getItem('user'));
    const response = await userService.getUserById(userSession.id);
    user.value = response.data;
}
</script>

<style scoped>

.container {
    background-color: white;
    margin-top: 20px;
    border-radius: 5px;

}

</style>
