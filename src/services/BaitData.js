import http from "../http-common";

class BaitData {
    
  getAll() {
    return http.get("/baits");
  }

//   get(id) {
//     return http.get(`/fish/${id}`);
//   }

  create(data) {
    return http.post("/baits", data);
  }

//   update(id, data) {
//     return http.put(`/fish/${id}`, data);
//   }

  delete(id) {
    return http.delete(`/baits/${id}`);
  }

//   deleteAll() {
//     return http.delete(`/fish`);
//   }

//   findByTitle(title) {
//     return http.get(`/fish?title=${title}`);
//   }
  
}

export default new BaitData();