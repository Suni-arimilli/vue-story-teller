import apiClient from "./services";

export default {
  getAllConfigurations() {
    return apiClient.get("configurations");
  },
  getLanguage(id) {
    return apiClient.get(`configurations/${id}`);
  },
  createLanguage(language) {
    return apiClient.post("configurations", language);
  },
  updateLanguage(language) {
    return apiClient.put(`configurations/${language.id}`, language);
  },
  deleteLanguage(id) {
    return apiClient.delete(`configurations/${id}`);
  }
};
