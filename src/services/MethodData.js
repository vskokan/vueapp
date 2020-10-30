import http from "../http-common";

class MethodData {
    
  getAll() {
    return http.get("/methods");
  }

//   get(id) {
//     return http.get(`/fish/${id}`);
//   }

  create(data) {
    return http.post("/methods", data);
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

export default new MethodData();