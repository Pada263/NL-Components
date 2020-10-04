import React from 'react';
import styles from './../styles/Button.module.scss';
import clsx from 'clsx';

interface ButtonProps {
  label: String;
  disabled: boolean;
  icon?: any;
  isIcon?: boolean;
  isYellow: boolean;
  action: any;
  theme: String;
  
  // TODO: additional properties, eg. disabled, variant (style), icon to use, etc.
  iconPlacement?: "start" | "end"; // should default to start
}

const Button: React.FC<ButtonProps> = (props) => {
  
  return (
    <button 
      disabled={props.disabled}
      type={props.action}
      className={clsx( [props.theme],
         {  [styles.btn ]: true , [styles.btnYellow] : props.isYellow, [styles.icon] : props.isIcon, [styles.iconPlacement]: props.iconPlacement} ) 
      } 
    > 
      {props.iconPlacement==="start"? props.icon : null}
        {props.label}
      {props.iconPlacement==="end"?  props.icon : null }
    </button>
  );
};

export default Button;


// <Button theme="btn btn-danger" label="Accepteren" disabled={false} icon={<PersonFill size={25} />}  isIcon={true} isYellow={false} action="submit"></Button>