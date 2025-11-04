import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // You could log error to a monitoring service here
    // console.error('UI error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen grid place-items-center bg-white text-slate-800 p-6">
          <div className="max-w-md text-center">
            <h2 className="text-2xl font-bold">Something went wrong</h2>
            <p className="mt-2 text-slate-600">Please refresh the page. If it persists, try disabling extensions or using a private window.</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 inline-flex rounded-full bg-emerald-600 px-5 py-2.5 font-semibold text-white shadow-md hover:bg-emerald-700"
            >
              Refresh
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
