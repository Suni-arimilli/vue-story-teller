import apiClient from "./services";

export default {
  getAllStoryRoles() {
    return apiClient.get("storyRoles");
  },
  getStoryRole(id) {
    return apiClient.get(`storyRoles/${id}`);
  },
  createStoryRole(storyRole) {
    return apiClient.post("storyRoles", storyRole);
  },
  updateStoryRole(storyRole) {
    return apiClient.put(`storyRoles/${storyRole.id}`, storyRole);
  },
  deleteStoryRole(id) {
    return apiClient.delete(`storyRoles/${id}`);
  }
};
