import GitHubApi from '../services/gitHubApi';

export default function getMembers(
  param1,
  param2,
  callbackSuccess = () => { }, callbackError = () => { },
) {
  return () => {
    GitHubApi.getMembers(param1, param2)
      .then((res) => {
        callbackSuccess(res);
      })
      .catch((error) => {
        callbackError(error);
      });
  };
}
