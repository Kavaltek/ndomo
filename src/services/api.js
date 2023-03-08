import axios from "axios";
export const api = axios.create({
  baseURL: "https://api.nacaocoragem.ao/api/"
})
export const createSession = async (email, password) => {
  return api.post("v1/auth/login", {email, password})
}