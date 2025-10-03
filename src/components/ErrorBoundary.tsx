import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ error, errorInfo });
    
    // Log error to analytics service in production
    if (import.meta.env.PROD) {
      // You can integrate with your analytics service here
      // AnalyticsService.getInstance().logError(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
              <div className="flex justify-center mb-6">
                <AlertTriangle className="w-16 h-16 text-red-500" />
              </div>
              
              <h1 className="text-2xl font-bold text-white mb-4">
                Oops! Etwas ist schiefgelaufen
              </h1>
              
              <p className="text-gray-300 mb-6">
                Es tut uns leid, aber es ist ein unerwarteter Fehler aufgetreten. 
                Bitte versuchen Sie es erneut oder kontaktieren Sie uns, wenn das Problem weiterhin besteht.
              </p>

              <div className="space-y-3">
                <button
                  onClick={() => window.location.reload()}
                  className="w-full flex items-center justify-center gap-2 green-button text-white font-medium py-3 px-4 rounded-md transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  Seite neu laden
                </button>
                
                <Link
                  to="/"
                  className="w-full flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-4 rounded-md transition-colors"
                >
                  <Home className="w-4 h-4" />
                  Zur Startseite
                </Link>
              </div>

              {import.meta.env.DEV && this.state.error && (
                <details className="mt-6 text-left">
                  <summary className="text-gray-400 cursor-pointer hover:text-gray-300">
                    Fehlerdetails (nur in Entwicklung)
                  </summary>
                  <div className="mt-2 p-4 bg-gray-900 rounded text-xs text-red-400 overflow-auto">
                    <pre>{this.state.error.toString()}</pre>
                    {this.state.errorInfo && (
                      <pre className="mt-2">{this.state.errorInfo.componentStack}</pre>
                    )}
                  </div>
                </details>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 