import Api1Services from '../services/Api1Services';

export function actionMethod(
  param1, param2, callbackSuccess = () => { },
  callbackError = () => { },
) {
  return (dispatch) => {
    Api1Services.postMethod(param1, param2)
      .then((res) => {
        dispatch({ type: 'SUCCESS', payload: res.data });
        callbackSuccess(res);
      })
      .catch((error) => {
        dispatch({ type: 'ERROR', payload: error });
        callbackError(error);
      });
  };
}

export function logout(
  param1,
  param2,
  callbackSuccess = () => { }, callbackError = () => { },
) {
  return () => {
    Api1Services.getMethod(param1, param2)
      .then((res) => {
        callbackSuccess(res);
      })
      .catch((error) => {
        callbackError(error);
      });
  };
}
