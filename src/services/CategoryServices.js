import apiClient from "./services";

export default {
  getAllCategories() {
    return apiClient.get("categories");
  }
};
