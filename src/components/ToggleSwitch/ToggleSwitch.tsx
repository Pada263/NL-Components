import clsx from 'clsx';
import styles from './ToggleSwitch.module.scss';
import React,{ useState } from 'react';
interface ToggleSwitchProps{

}

const ToggleSwitch: React.FC<ToggleSwitchProps> = (props) => {
  
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(prewiev=>!prewiev);

    let toggle = null;
    
   
    {console.log(isToggled)}
    return (
        <label className={clsx(styles.switch)}>
            <input type="checkbox" id="togBtn" />
            <div className={clsx(styles.slider)}>
               {isToggled? <span
            onClick={toggleTrueFalse}
            className={clsx(styles.on)}>On </span> : <span
            onClick={toggleTrueFalse}
            className={clsx(styles.off)}>Off</span>}
            </div>
        </label>
    )
}

export default ToggleSwitch
