import apiClient from "./services";

export default {
  getAllStoryRoles() {
    return apiClient.get("storyRoles");
  }
};
