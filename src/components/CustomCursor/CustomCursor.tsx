// CustomCursor.tsx

import React, { useState, useEffect } from 'react';
import styles from './customCursor.module.scss';

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div className={styles['custom-cursor']} style={{ top: cursorPosition.y, left: cursorPosition.x }}></div>
  );
};

export default CustomCursor;
