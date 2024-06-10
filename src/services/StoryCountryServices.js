import apiClient from "./services";

export default {
  getAllCountries() {
    return apiClient.get("storyCountries");
  },
  getCountry(id) {
    return apiClient.get(`storyCountries/${id}`);
  },
  createCountry(country) {
    return apiClient.post("storyCountries", country);
  },
  updateCountry(country) {
    return apiClient.put(`storyCountries/${country.id}`, country);
  },
  deleteCountry(id) {
    return apiClient.delete(`storyCountries/${id}`);
  }
};
