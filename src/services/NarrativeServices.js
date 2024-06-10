import apiClient from "./services";

export default {
  getAllNarratives() {
    return apiClient.get("narratives");
  },
  getNarrative(id) {
    return apiClient.get(`narratives/${id}`);
  },
  createNarrative(narrative) {
    return apiClient.post("narratives", narrative);
  },
  updateNarrative(narrative) {
    return apiClient.put(`narratives/${narrative.id}`, narrative);
  },
  deleteNarrative(id) {
    return apiClient.delete(`narratives/${id}`);
  }
};
