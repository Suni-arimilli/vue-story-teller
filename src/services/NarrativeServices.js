import apiClient from "./services";

export default {
  getAllNarratives() {
    return apiClient.get("narratives");
  }
};
