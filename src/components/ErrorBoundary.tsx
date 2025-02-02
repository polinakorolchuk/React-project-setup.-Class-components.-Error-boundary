import React, { Component, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    state = {
        hasError: false,
    };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        console.error("Ошибка:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ошибка</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;