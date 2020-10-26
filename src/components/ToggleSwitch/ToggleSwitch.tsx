import clsx from 'clsx';
import styles from './ToggleSwitch.module.scss';
import React,{ useState } from 'react';
interface ToggleSwitchProps{

}

const ToggleSwitch: React.FC<ToggleSwitchProps> = (props) => {
  
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);

    let toggle = null;
    
    if (isToggled) {
       toggle =(
            <span
            onClick={toggleTrueFalse}
       className={clsx(styles.on)}>On{console.log("on")}</span>
        );
    }if (!isToggled) {
        toggle=(
            <span
            onClick={toggleTrueFalse}
            className={clsx(styles.off)}>Off{console.log("off")}</span>);
    }

    return (
        <label className={clsx(styles.switch)}>
            <input type="checkbox" id="togBtn" />
            <div className={clsx(styles.slider)}>
               {toggle}
            </div>
        </label>
    )
}

export default ToggleSwitch
