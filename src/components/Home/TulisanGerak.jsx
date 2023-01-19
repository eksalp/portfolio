import React from 'react';
import { useEffect, useState } from 'react';
import './tulisangerak.css';

const TulisanGerak = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const texts = ['College Student', 'Front End Engineer', 'Web Developer'];
    let i = 0;
    const interval = setInterval(() => {
      setText(texts[i]);
      i++;
      if (i >= texts.length) {
        i = 0;
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="containergede">
      <span className="text first-text">I'm a </span>
      <span className="text sec-text">{text}</span>
    </div>
  );
};

export default TulisanGerak;
