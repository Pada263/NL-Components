import React from 'react'
import styles from './../styles/RadioButton.module.scss'
import clsx from 'clsx';

interface RadioButtonProps{
    label: String;
    isChecked?: boolean;
    name : String;
}


const RadioButton: React.FC<RadioButtonProps> = (props) => {
    const handleChange = () => {
        
    }
    
    return (
        <label className={clsx([styles.RadioButtonContainer])}>
            <input type="radio"onChange={handleChange} checked={props.isChecked} name="{props.name}" className={clsx([styles.RadioButton])}/>
            {props.label}
        </label>
    )
}
export default RadioButton

