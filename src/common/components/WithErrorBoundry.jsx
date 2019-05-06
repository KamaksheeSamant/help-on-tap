// This function takes a component and wraps error boundry aroun it 
import React, { Component, Fragment } from 'react';
import { logError } from '../helper/ErrorLogger';

export default function withErrorBoundry(WrappedComponent) {
    class ErrorBoundery extends Component {
        state = {
            hasError: false //status of global error of the app
        };

        static getDerivedStateFromError(error) {
            // Update state so the next render will show the fallback UI.
            return { hasError: true };
        }

        componentDidCatch(error, info) {
            // You can also log the error to an error reporting service
            logError(error, info);
        }

        render() {
            return (
                <Fragment>
                     {(this.state.hasError) ?
                        <h1>Something Went Wrong !!</h1>
                        :
                        <WrappedComponent {...this.props}/>}
                </Fragment>
            );
        }
    }
    return ErrorBoundery
}