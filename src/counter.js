import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './counter.css';

export default function Clintcounter() {
  const [client, setClient] = useState(0);
  const [years, setYears] = useState(0);
  const [ingree, setIngree] = useState(0);
  const { ref, inView } = useInView({ 
    triggerOnce: true,
    threshold: 0.3 
  });

  useEffect(() => {
    if (inView) {
      let clientCount = 0;
      let yearsCount = 0;
      let ingreeCount = 0;
      
      // Years of experience counter
      const timer = setInterval(() => {
        setIngree((prev) => {
          ingreeCount = prev + 1;
          return ingreeCount;
        });
        if (ingreeCount === 2) clearInterval(timer);
      }, 300);

      // Completed projects counter
      const timer1 = setInterval(() => {
        setClient((prev) => {
          clientCount = prev + 1;
          return clientCount;
        });
        if (clientCount === 30) clearInterval(timer1);
      }, 30);

      // Companies worked counter
      const timer2 = setInterval(() => {
        setYears((prev) => {
          yearsCount = prev + 1;
          return yearsCount;
        });
        if (yearsCount === 2) clearInterval(timer2);
      }, 1000);

      // Cleanup function
      return () => {
        clearInterval(timer);
        clearInterval(timer1);
        clearInterval(timer2);
      };
    }
  }, [inView]);

  return (
    <div ref={ref} className="counter-section">
      <div className="counter-container">
        <div className="counter-row">
          <div className="counter-item">
            <div className="counter-value">
              <span className="counter-number">{ingree}</span>
              <span className="counter-plus">+</span>
            </div>
            <h3 className="counter-title">Years experience</h3>
          </div>

          <div className="counter-item">
            <div className="counter-value">
              <span className="counter-number">{client}</span>
              <span className="counter-plus">+</span>
            </div>
            <h3 className="counter-title">Completed Projects</h3>
          </div>

          <div className="counter-item">
            <div className="counter-value">
              <span className="counter-number">{years}</span>
              <span className="counter-plus">+</span>
            </div>
            <h3 className="counter-title">Companies Work</h3>
          </div>
        </div>
      </div>
    </div>
  );
}