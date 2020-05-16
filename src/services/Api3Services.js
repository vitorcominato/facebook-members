import axios from '../helpers/AxiosHelper';
import config from '../config';

const baseUrl = config.baseUrl.autenticacao;
class Api3 {
  static postMethod(param1, param2) {
    return axios.post(`${baseUrl}/postMethod`,
      {
        param1,
        param2,
      });
  }

  static getMethod() {
    return axios.get(`${baseUrl}/getMethod`);
  }
}

export default Api3;
