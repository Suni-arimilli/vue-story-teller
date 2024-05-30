import apiClient from "./services";

export default {
  getAllCountries() {
    return apiClient.get("storyCountries");
  }
};
