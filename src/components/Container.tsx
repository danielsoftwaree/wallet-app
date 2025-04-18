import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Компонент Container для обертывания контента с фиксированной шириной и центрированием
 */
const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={`max-w-md mx-auto w-full ${className}`}>{children}</div>
  );
};

export default Container;
