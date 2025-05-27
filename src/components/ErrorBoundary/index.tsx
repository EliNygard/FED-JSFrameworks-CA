import * as React from "react";

interface ErrorBoundaryProps {
  fallback: React.ReactNode;
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    console.error(error);

    return { hasError: true };
  }

  // log the error
  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    console.error("Error caught by ErrorBoundary:", error, info);
  }

  render() {
    // You can render any custom fallback UI

    // if (this.state.hasError) {
    //   return this.props.fallback;
    // }

    // return this.props.children;

    const { fallback, children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return fallback;
    }

    return children;
  }
}

export default ErrorBoundary;
