import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "compact" | "side" | "glass";
  hover?: boolean;
  onClick?: () => void;
  shadow?: "sm" | "md" | "lg" | "xl";
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  variant = "default",
  hover = false,
  onClick,
  shadow = "md",
}) => {
  const variantClasses = {
    default: "card-normal",
    compact: "card-compact",
    side: "card-side",
    glass: "glass",
  };

  const shadowClasses = {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
  };

  const classes = `card bg-base-100
    ${variantClasses[variant]}
    ${shadowClasses[shadow]}
    ${hover ? "hover:shadow-xl hover:-translate-y-1" : ""}
    ${onClick ? "cursor-pointer transition-all duration-300 hover:scale-[1.02]" : ""}
    ${className}`;

  return (
    <div
      className={classes}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      {children}
    </div>
  );
};

export default Card;
