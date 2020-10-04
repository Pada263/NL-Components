import clsx from 'clsx';
import React from 'react';
import styles from './../styles/IconButton.module.scss';


interface IconButtonProps{
icon : any;
color: String;
}


const IconButton: React.FC<IconButtonProps> = (props) => {
    
    return(
        <button
            className={clsx([styles.iconButton])}
        >
            {props.icon?props.icon: null}
        </button>
    )
};


export default IconButton;