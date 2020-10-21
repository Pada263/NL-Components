import clsx from 'clsx'
import React from 'react'
import styles from './LinearProgress.module.scss';

interface LinearProgressProps{
 
}

const LinearProgress: React.FC<LinearProgressProps> = (props) => {

    

    return (
        <div className={clsx(styles.linebg)}>
          <div className={clsx(styles.linePreloader)}/>
        </div>
    )
}

export default LinearProgress
