import apiClient from "./services";

export default {
  getAllStories() {
    return apiClient.get("stories");
  },
  getStory(id) {
    return apiClient.get(`stories/${id}`);
  },
  createStory(story) {
    return apiClient.post("stories", story);
  },
  getStoryByUserId(id) {
    return apiClient.get(`stories/user/${id}`);
  }
};
