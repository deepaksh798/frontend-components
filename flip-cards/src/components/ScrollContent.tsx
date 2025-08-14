"use client";
import React, { useEffect, useState } from "react";

interface ScrollContentProps {
  content: {
    title: string;
    description: string;
  };
}

const ScrollContent: React.FC<ScrollContentProps> = ({ content }) => {
  const [animatedContent, setAnimatedContent] = useState(content);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => {
      setAnimatedContent(content);
      setIsAnimating(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [content]);

  return (
    <div
      className={`flex flex-col w-[363px] gap-8 justify-center transition duration-300 ${
        isAnimating ? "translate-y-20 opacity-0" : " opacity-100"
      }`}
    >
      <h1 className="text-black text-[28px] font-semibold">
        {animatedContent.title}
      </h1>
      <p className="text-[#666666]">{animatedContent.description}</p>
    </div>
  );
};

export default ScrollContent;
