import GitHubApi from '../services/gitHubApi';

export function getMembers(
  callbackSuccess = () => { }, callbackError = () => { },
) {
  return (dispatch) => {
    GitHubApi.getMembers()
      .then((res) => {
        dispatch({ type: 'GET_MEMBERS', payload: res });
        callbackSuccess();
      })
      .catch((error) => {
        callbackError(error);
      });
  };
}

export function getUserInfo(
  login,
  callbackSuccess = () => { }, callbackError = () => { },
) {
  return (dispatch) => {
    GitHubApi.getUserInfo(login)
      .then((res) => {
        dispatch({ type: 'GET_USER_INFO', payload: res });
        callbackSuccess();
      })
      .catch((error) => {
        callbackError(error);
      });
  };
}
