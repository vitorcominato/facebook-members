import GitHubApi from '../services/gitHubApi';

export default function getMembers(
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
