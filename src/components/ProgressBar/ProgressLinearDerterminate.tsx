import React ,{useEffect, useState} from 'react'
import clsx from 'clsx'
import styles from './ProgressBar.module.scss';

interface ProgressLinearDerterminateProps{
    progressBgTheme: string;
    progressBarColor: string;
}


const ProgressLinearDerterminate: React.FC<ProgressLinearDerterminateProps>= (props) => {
    

    
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
          setProgress((oldProgress) => {
            if (oldProgress === 100) {
              return 0;
            }
            const diff = Math.random() * 10;
            return Math.min(oldProgress + diff, 100);
          });
        }, 500);
    
        return () => {
          clearInterval(timer);
        };
      }, []);
    

    return (
        <div className={clsx([props.progressBgTheme],styles.progress)}>
           <div 
             className={clsx([props.progressBarColor],styles.progressdone)} 
             //value={progress}
             >     
			</div>
        </div>
    )
}

export default ProgressLinearDerterminate
