import axios from '../helpers/AxiosHelper';
import config from '../config';

const baseUrl = config.githubApi;
class gitHubApi {
  static getMembers() {
    return axios.get(`${baseUrl}orgs/facebook/public_members`);
  }

  static getUserInfo(login) {
    return axios.get(`${baseUrl}users/${login}`);
  }
}

export default gitHubApi;
