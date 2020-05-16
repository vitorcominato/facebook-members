const isAuthenticated = (user) => {
  if (user) {
    if (user.TOKEN_NAME) {
      return true;
    }
    return false;
  }
  return false;
};

export default isAuthenticated;
