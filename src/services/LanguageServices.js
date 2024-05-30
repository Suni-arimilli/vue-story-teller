import apiClient from "./services";

export default {
  getAllLanguages() {
    return apiClient.get("languages");
  }
};
