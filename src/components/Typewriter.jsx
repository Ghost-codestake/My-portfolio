import React, { useState, useEffect } from "react";

const Typewriter = ({ texts, speed = 100, delay = 1500 }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0); // position in current word
  const [deleting, setDeleting] = useState(false);
  const [loop, setLoop] = useState(0); // which word we're on

  useEffect(() => {
    let timer;
    const currentText = texts[loop % texts.length]; // cycle through words

    if (!deleting && index < currentText.length) {
      // Typing characters
      timer = setTimeout(() => {
        setDisplayText((prev) => prev + currentText[index]);
        setIndex(index + 1);
      }, speed);
    } else if (deleting && index > 0) {
      // Deleting characters
      timer = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      }, speed / 2);
    } else if (index === currentText.length && !deleting) {
      // Finished typing, wait before deleting
      timer = setTimeout(() => setDeleting(true), delay);
    } else if (index === 0 && deleting) {
      // Move to next word
      setDeleting(false);
      setLoop(loop + 1);
    }

    return () => clearTimeout(timer);
  }, [index, deleting, loop, texts, speed, delay]);

  return (
    <span>
      {displayText}
      <span className="cursor">|</span>
    </span>
  );
};

export default Typewriter;
