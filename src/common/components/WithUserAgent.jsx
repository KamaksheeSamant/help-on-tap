// This function takes a component and wraps user agent detection aroun it 
import React, { Component } from 'react';
import { logInfo } from '../helper/ErrorLogger';

export default function withErrorBoundry(WrappedComponent) {
    class UserAgent extends Component {
        state = {
            userAgent: null
        };

        componentDidMount() {
            let userAgent = navigator.userAgent;
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i
                .test(userAgent))
                userAgent="Mobile";
            else
                userAgent="Desktop";
            logInfo("UA Detected :",userAgent);
            this.setState({userAgent});
        }

        render() {
            return (<WrappedComponent {...this.state} {...this.props}/>);
        }
    }
    return UserAgent
}