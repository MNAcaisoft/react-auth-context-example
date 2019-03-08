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
  }

  login = async (email, password) => {
    // custom logic
    console.log("logging in via Context", email, password);

    await this.props.client.login(email, password);

    if (this.props.client.isAuthenticated()) {
      this.setState({
        user: this.props.client.user,
        isAuthenticated: true
      });
    } else {
      // Error
    }
  };

  logout = async () => {
    // custom logic
    console.log("logging out via Context");

    await this.props.client.logout();
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
