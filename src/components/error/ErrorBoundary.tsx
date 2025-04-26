
import React from 'react';
import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';
import styles from './ErrorBoundary.module.css';

export default function ErrorBoundary() {
  const error = useRouteError();
  
  if (isRouteErrorResponse(error)) {
    return (
      <div className={styles.errorContainer}>
        <div className={styles.errorContent}>
          <h1 className={styles.errorTitle}>
            {error.status} {error.statusText}
          </h1>
          <p className={styles.errorMessage}>
            {error.data?.message || "Something went wrong"}
          </p>
          <Link to="/" className={styles.homeLink}>
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <h1 className={styles.errorTitle}>Oops! Something went wrong</h1>
        <p className={styles.errorMessage}>
          {error instanceof Error ? error.message : "An unexpected error occurred"}
        </p>
        <Link to="/" className={styles.homeLink}>
          Return to Home
        </Link>
      </div>
    </div>
  );
}
