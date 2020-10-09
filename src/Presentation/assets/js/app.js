import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import '../css/app.css';
import { AuthProvider } from './Auth';
import ApplicationRouter from './routing/ApplicationRouter';

class App extends React.Component {
    
    componentDidMount() {
        document.title = "ReBlog – Резюме-блог @shumichenko";
        console.log(
            "██████╗░███████╗██████╗░██╗░░░░░░█████╗░░██████╗░" + "\n" +
            "██╔══██╗██╔════╝██╔══██╗██║░░░░░██╔══██╗██╔════╝░" + "\n" +
            "██████╔╝█████╗░░██████╦╝██║░░░░░██║░░██║██║░░██╗░" + "\n" +
            "██╔══██╗██╔══╝░░██╔══██╗██║░░░░░██║░░██║██║░░╚██╗" + "\n" +
            "██║░░██║███████╗██████╦╝███████╗╚█████╔╝╚██████╔╝" + "\n" +
            "╚═╝░░╚═╝╚══════╝╚═════╝░╚══════╝░╚════╝░░╚═════╝░"
        );
        console.log("This website was designed and built by Igor Shumichenko");
    }

    render() {
        return (
            React.createElement(
                BrowserRouter,
                null,
                React.createElement(AuthProvider, {},
                    React.createElement(ApplicationRouter, null)
                )
            )
        );
    }
} 

ReactDom.render(
    React.createElement(App, null), 
    document.getElementById('application')
);