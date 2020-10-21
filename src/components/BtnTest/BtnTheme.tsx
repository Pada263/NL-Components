import React from 'react'
import styles from './BtnTheme.module.scss';
import clsx from 'clsx';

interface BtnThemeProps{
    
}

const BtnTheme: React.FC<BtnThemeProps> = (props) => {
    return (
        <div className={clsx(styles.btnTheme)}>
            <p>Hier Teste ich scss</p>
        </div>
    )
}

export default BtnTheme
