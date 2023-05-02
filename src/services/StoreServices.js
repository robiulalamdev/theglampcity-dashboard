import requests from "./httpService";

const StoreServices = {
  getAllStore() {
    return requests.get("/store");
  },

  getStoreById(id) {
    return requests.get(`/category/${id}`);
  },

  addCategory(body) {
    return requests.post("/category/add", body);
  },

  updateCategory(id, body) {
    return requests.put(`/category/${id}`, body);
  },

  updateStatus(id, body) {
    return requests.put(`/category/status/${id}`, body);
  },

  deleteCategory(id, body) {
    return requests.patch(`/category/${id}`, body);
  },
};

export default StoreServices;
