import apiClient from "./services";

export default {
  getAllConfigurations() {
    return apiClient.get("configurations");
  }
};
