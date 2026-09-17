import { useEffect, useState } from "react";

function TypingText() {
  const words = [
    "Web Developer",
    "React Developer",
    "AI Specialist",
    "Digital Creator",
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    let speed = isDeleting ? 60 : 120;

    // Full word লেখা শেষ হলে একটু অপেক্ষা করবে
    if (!isDeleting && text === currentWord) {
      speed = 1500;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setText(currentWord.slice(0, text.length + 1));

        if (text === currentWord) {
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setText(currentWord.slice(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);

          setWordIndex(
            (prevIndex) => (prevIndex + 1) % words.length
          );
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <span className="text-[#D4AF37]">
      {text}
      <span className="text-[#00C37A] animate-pulse ml-1">
        |
      </span>
    </span>
  );
}

export default TypingText;