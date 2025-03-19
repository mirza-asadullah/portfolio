import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './about.css';

export default function Clintcounter() {
  const [client, setClient] = useState(0);
  const [years, setYears] = useState(0);
  const [ingree, setIngree] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      let clientCount = 0;
      let yearsCount = 0;
      let ingreeCount = 0;

      const timer = setInterval(() => {
        setIngree((prev) => prev + 1);
        ingreeCount++;
        if (ingreeCount === 2) clearInterval(timer);
      }, 500);

      const timer1 = setInterval(() => {
        setClient((prev) => prev + 1);
        clientCount++;
        if (clientCount === 30) clearInterval(timer1);
      }, 30);

      const timer2 = setInterval(() => {
        setYears((prev) => prev + 1);
        yearsCount++;
        if (yearsCount === 3) clearInterval(timer2);
      }, 1000);
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <div className='bg-fixed1'>
        <div className='bg-colors'>
          <div className='bg-contant1'>
            <div className='bg-row row client' style={{ padding: '10px', color: 'white' }}>
              <div className='row-cont1 col-md-4' style={{ textAlign: 'center' }}>
                <div className='cdiv'>
                  <div className='rtinn-counter'>
                    <span className='counter'>{ingree}</span>
                  </div>
                  <div style={{ color: 'rgb(34 211 238)' }}>+</div>
                </div>
                <h3 className='rtinn-title'>Years experience</h3>
              </div>

              <div className='row-cont1 col-md-4' style={{ textAlign: 'center' }}>
                <div className='cdiv'>
                  <div className='rtinn-counter'>
                    <span className='counter'>{client}</span>
                  </div>
                  <div style={{ color: 'rgb(34 211 238)' }}>+</div>
                </div>
                <h3 className='rtinn-title'>Completed Projects</h3>
              </div>

              <div className='row-cont1 col-md-4' style={{ textAlign: 'center' }}>
                <div className='cdiv'>
                  <div className='rtinn-counter'>
                    <span className='counter'>{years}</span>
                  </div>
                  <div style={{ color: 'rgb(34 211 238)' }}>+</div>
                </div>
                <h3 className='rtinn-title'>Companies Work</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
