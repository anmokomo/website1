import React from "react";
import styles from "./ErrorBoundary.module.css";
//type for ErrorBoundary's props
interface ErrorBoundaryProps {
    children: React.ReactNode[];
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    info: object;
}

class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
    > {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            error: new Error(),
            info: { componentStack: "" },
        };
    }

    //if there are any errors, set hasError to 'true' and let the UI fallback
    static getDerivedStateFromError = (error: Error) => {
        return { hasError: true };
    };

    //log error in componentDidCatch(error, info)
    componentDidCatch(error: Error | null, info: object) {
        console.log("error", error);
        this.setState({ hasError: true, error, info });
    }

render() {
    if (this.state.hasError) {
        return (
            <div className={styles.errorContainer}>
                <h2 style={{ padding: "2em" }}>
                    Something has gone wrong.
                </h2>
            </div>
        );
    }
    //render the component children if no error
    return this.props.children;
}
}
export default ErrorBoundary;
