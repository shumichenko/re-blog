import React, { Component } from "react";

const { Provider, Consumer: AuthConsumer } = React.createContext({
    isAuthorized: false
});

class AuthProvider extends Component {
    constructor() {
        super();
        this.state = { isAuthorized: false };
        this.authorize = this.authorize.bind(this);
    }

    authorize() {
        // Перенаправление на страницу авторизации ВК
        this.setState({ isAuthorized: true });
    }

    render() {
        const isAuthorized = this.state.isAuthorized;

        return (
            React.createElement(Provider, {
                value: { 
                    isAuthorized, authorize: this.authorize
                }
            }, this.props.children
            )
        );
    }
}

export function withAuth(WrappedComponent) {
    return class AuthHOC extends Component {
        render() {
            return(
                React.createElement(AuthConsumer, null, (contextProps) => (
                    <WrappedComponent { ...contextProps } { ...this.props } />
                    )
                )
            )
        }
    }
};

export { AuthProvider };