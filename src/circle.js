import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './circle.css';

const CircularProgressBar = ({ value }) => {
  const [progress, setProgress] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setProgress(prev => {
            if (prev < value) {
              return prev + 1;
            } else {
              clearInterval(interval);
              return prev;
            }
          });
        }, 20);
        
        return () => clearInterval(interval);
      }, 300); // Small delay before starting animation
      
      return () => clearTimeout(timer);
    }
  }, [inView, value]);

  // Calculate dash array and offset values
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (progress / 100) * circumference;

  return (
    <div className="circular-progress" ref={ref}>
      <svg width="120" height="120" viewBox="0 0 100 100">
        <circle
          className="progress-bg"
          cx="50"
          cy="50"
          r={radius}
          strokeWidth="8"
        />
        <circle
          className="progress-bar"
          cx="50"
          cy="50"
          r={radius}
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
        />
        <text x="50" y="50" className="progress-text">
          {progress}%
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;