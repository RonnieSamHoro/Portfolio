// src/components/TypewriterCode.jsx
import React, { useState, useEffect } from "react";

const codeSnippets = [
  "npm run dev",
  "git init",
  "git add .",
  "git commit -m 'Initial'",
  "git push origin main",
  "yarn install",
  "npm create vite@latest",
  "cd my-app",
  "code .",
  "npm run build",
];

const TypewriterCode = () => {
  const [text, setText] = useState("");
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = codeSnippets[snippetIndex % codeSnippets.length];
    let typingSpeed = isDeleting ? 50 : 100;

    const handleTyping = () => {
      setText((prev) => {
        if (isDeleting) {
          return prev.slice(0, -1);
        } else {
          return current.slice(0, prev.length + 1);
        }
      });

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setSnippetIndex((prev) => (prev + 1) % codeSnippets.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, snippetIndex]);

  return (
    <div className="mt-10 text-center text-sm md:text-base font-mono text-gray-800 dark:text-gray-300">
      <span className="opacity-70">~/lifern $</span> <span className="whitespace-nowrap">{text}<span className="animate-pulse">|</span></span>
    </div>
  );
};

export default TypewriterCode;
