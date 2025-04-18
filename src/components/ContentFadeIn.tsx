import React, { useEffect, useState } from "react";

interface ContentFadeInProps {
  children: React.ReactNode;
  delay?: number;
}

const ContentFadeIn: React.FC<ContentFadeInProps> = ({
  children,
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-200 transform ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default ContentFadeIn;
