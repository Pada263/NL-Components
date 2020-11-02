import React from 'react'
import styles from './BtnTheme.module.scss';
import clsx from 'clsx';

interface BtnThemeProps{
    
}

const BtnTheme: React.FC<BtnThemeProps> = (props) => {
    return (
        <div className={clsx(styles.btnTheme)}>
           <h1>Ich bin ein Text<span>*</span></h1>
        </div>
    )
}

export default BtnTheme
