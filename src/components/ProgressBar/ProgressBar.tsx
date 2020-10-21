import clsx from 'clsx'
import React , {useState} from 'react'
import styles from './ProgressBar.module.scss';

interface ProgressBarProps{
    progress: any
    progressBgTheme: string;
    progressBarColor: string;
}


const ProgressBar: React.FC<ProgressBarProps> = (props) => {
    
    const [style, setStyle] = useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${props.progress}%`
		}
		
		setStyle(newStyle);
	}, 300);
	
	return (
		<div className={clsx([props.progressBgTheme],styles.progress)}>
			<div className={clsx([props.progressBarColor],styles.progressdone)} style={style}>
				{props.progress}%
			</div>
		</div>
	)
}

export default ProgressBar
