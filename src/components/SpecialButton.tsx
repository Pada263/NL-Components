import React from 'react'
import styles from './../styles/SpecialButton.module.scss';
import clsx from 'clsx';

import {ArrowRightShort} from 'react-bootstrap-icons';

interface SpecialButtonProps{
    label: String;
    icon: any;
    isIcon: boolean;
    }

export const SpecialButton: React.FC<SpecialButtonProps> = (props) => {
    return (
        <button
            className={clsx("btn btn-lighter", 
            { [styles.btn] : true , [styles.icon] : props.isIcon })}
        >
            {props.icon}
            {props.label}
            <ArrowRightShort size={25}/>
        </button>
    )
}


//<SpecialButton label="Me" icon={<PersonFill size={25}/>} isIcon={true}/>