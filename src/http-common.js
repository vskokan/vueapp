import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000/api", //для локальной сети попменять на 192.168.0.102
  headers: {
    //"Content-type": "application/json",
    "Content-type": "multipart/form-data",
    withCredentials: true,
  }
});

