import React from "react";

interface LoadingSpinnerProps {
  size?: "xs" | "sm" | "md" | "lg";
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "neutral"
    | "info"
    | "success"
    | "warning"
    | "error";
  text?: string;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "md",
  color = "primary",
  text,
  className = "",
}) => {
  const sizeClasses = {
    xs: "loading-xs",
    sm: "loading-sm",
    md: "loading-md",
    lg: "loading-lg",
  };

  const colorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
    neutral: "text-neutral",
    info: "text-info",
    success: "text-success",
    warning: "text-warning",
    error: "text-error",
  };

  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 ${className}`}
    >
      <span
        className={`loading loading-spinner ${sizeClasses[size]} ${colorClasses[color]}`}
      ></span>
      {text && (
        <p className="text-sm text-base-content/70 animate-pulse">{text}</p>
      )}
    </div>
  );
};

// Alternative spinner variants
export const LoadingDots: React.FC<LoadingSpinnerProps> = ({
  size = "md",
  color = "primary",
  text,
  className = "",
}) => {
  const sizeClasses = {
    xs: "loading-xs",
    sm: "loading-sm",
    md: "loading-md",
    lg: "loading-lg",
  };

  const colorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
    neutral: "text-neutral",
    info: "text-info",
    success: "text-success",
    warning: "text-warning",
    error: "text-error",
  };

  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 ${className}`}
    >
      <span
        className={`loading loading-dots ${sizeClasses[size]} ${colorClasses[color]}`}
      ></span>
      {text && (
        <p className="text-sm text-base-content/70 animate-pulse">{text}</p>
      )}
    </div>
  );
};

export const LoadingBars: React.FC<LoadingSpinnerProps> = ({
  size = "md",
  color = "primary",
  text,
  className = "",
}) => {
  const sizeClasses = {
    xs: "loading-xs",
    sm: "loading-sm",
    md: "loading-md",
    lg: "loading-lg",
  };

  const colorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
    neutral: "text-neutral",
    info: "text-info",
    success: "text-success",
    warning: "text-warning",
    error: "text-error",
  };

  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 ${className}`}
    >
      <span
        className={`loading loading-bars ${sizeClasses[size]} ${colorClasses[color]}`}
      ></span>
      {text && (
        <p className="text-sm text-base-content/70 animate-pulse">{text}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;
