import React, {useState} from 'react';
import clsx from 'clsx';
import styles from './../styles/Checkbox.module.scss'

interface CheckboxProps{
    label: String;
    
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
     const [isChecked, setIsChecked] = useState(false);
     
    return (
        <label className={clsx([styles.checkbox_container])}>
            <input  type="checkbox" checked={isChecked} onChange={(e)=>{setIsChecked(e.target.checked)}}/>
            {props.label}
        </label>
    )
  };
  

export default Checkbox;
