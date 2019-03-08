import React from "react";

const DEFAULT_STATE = {
  isAuthenticated: false,
  user: null
};

const AuthContext = React.createContext(DEFAULT_STATE);
const { Consumer, Provider } = AuthContext;

class StatefulProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...DEFAULT_STATE,
      login: this.login,
      logout: this.logout
    };
    this.authClient = props.client;
  }

  login = async (email, password) => {
    // custom logic
    console.log("logging in via Context", email, password);

    await this.authClient.login(email, password);

    if (this.authClient.isAuthenticated()) {
      this.setState({
        user: this.authClient.user,
        isAuthenticated: true
      });
    } else {
      // Error
    }
  };

  logout = async () => {
    // custom logic
    console.log("logging out via Context");

    await this.authClient.logout();
    this.setState({ isAuthenticated: false });
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export {
  StatefulProvider as AuthProvider,
  Consumer as AuthConsumer,
  AuthContext
};
