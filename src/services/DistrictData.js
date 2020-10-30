import http from "../http-common";

class DistrictData {
    
  getAll() {
    return http.get("/districts");
  }

//   get(id) {
//     return http.get(`/fish/${id}`);
//   }

  create(data) {
    return http.post("/districts", data);
  }

//   update(id, data) {
//     return http.put(`/fish/${id}`, data);
//   }

//   delete(id) {
//     return http.delete(`/fish/${id}`);
//   }

//   deleteAll() {
//     return http.delete(`/fish`);
//   }

//   findByTitle(title) {
//     return http.get(`/fish?title=${title}`);
//   }
  
}

export default new DistrictData();