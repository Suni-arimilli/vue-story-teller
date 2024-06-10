import apiClient from "./services";

export default {
  getAllCategories() {
    return apiClient.get("categories");
  },
  getCategory(id) {
    return apiClient.get(`categories/${id}`);
  },
  createCategory(category) {
    return apiClient.post("categories", category);
  },
  updateCategory(category) {
    return apiClient.put(`categories/${category.id}`, category);
  },
  deleteCategory(id) {
    return apiClient.delete(`categories/${id}`);
  }
};
