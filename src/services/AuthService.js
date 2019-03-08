const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

class Auth {
  user = null;

  isAuthenticated = () => this.user !== null;

  login = async (email, password) => {
    await wait(500);
    this.user = { name: "Gracjan" };
  };

  logout = async () => {
    await wait(500);
    this.user = null;
  };
}

export default Auth;
