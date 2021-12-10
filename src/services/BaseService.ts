import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_HOST;

export default abstract class BaseService {
  abstract entity: string;
  create(data: any) {
    const headers = this.getHeaders();
    return axios.post(this.entity, data, { headers });
  }

  async getAll(params = {}) {
    const headers = this.getHeaders();
    return await axios.get(this.entity, { headers, params });
  }

  async getOne(id: string) {
    const headers = this.getHeaders();
    const item = await axios.get(`${this.entity}/${id}`, { headers });
    return item;
  }

  edit(id: string, data: any) {
    const headers = this.getHeaders();
    return axios.put(`${this.entity}/${id}`, data, { headers });
  }

  delete(id: string) {
    const headers = this.getHeaders();
    return axios.delete(`${this.entity}/${id}`, { headers });
  }

  getHeaders() {
    const token = localStorage.getItem("token");
    if (!token) return {};
    return { Authorization: `Bearer ${token}` };
  }
}
