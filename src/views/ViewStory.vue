<template>
  <v-container>
    <v-card v-if="story.id" ref="storyContent">
      <v-card-title>{{ story.title }}</v-card-title>
      <v-card-subtitle>{{ formattedDate }}</v-card-subtitle>
      <v-card-text>
        <div v-html="story.content"></div>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-subtitle>Details:</v-card-subtitle>
      <v-card-text>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Category:</v-list-item-title>
              <v-list-item-subtitle>{{ story.category.name }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Story Country:</v-list-item-title>
              <v-list-item-subtitle>{{ story.storyCountry.name }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Story Role:</v-list-item-title>
              <v-list-item-subtitle>{{ story.storyRole.name }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Narrative:</v-list-item-title>
              <v-list-item-subtitle>{{ story.narrative.name }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Configuration:</v-list-item-title>
              <v-list-item-subtitle>{{ story.configuration.name }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Language:</v-list-item-title>
              <v-list-item-subtitle>{{ story.language.name }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import StoryService from '../services/StoryServices';

const router = useRouter();
const storyId = ref(router.currentRoute.value.params.id);
const story = ref({});
const formattedDate = computed(() => {
  const date = new Date(story.value.publication_date);
  return date.toLocaleString();
});
const isLoading = ref(false);

onMounted(async () => {
  try {
    const { data } = await StoryService.getStory(storyId.value);
    story.value = data;
  } catch (error) {
    console.error('Error fetching story:', error);
  }
});
</script>

<style scoped>
/* Add custom styles here */
</style>
