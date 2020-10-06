import React, { useState } from 'react'
import Option from './Option'
import clsx from 'clsx';
import styles from './Dropdown.module.scss'

interface DropdownProps{
    label: string;
}

const Dropdown: React.FC<DropdownProps> = (props) => {
    
    const [answersState] = useState({
        answers: [
            {answer: 'Black' , value: "Black"},
            {answer: 'Red', value: "Red"},
            {answer: 'Green', value: "Green"},
            {answer: 'Blue', value: "Blue"},
        ],
       
       
    });

    const handleChange = (event:any) =>{
      
    }
    
    let answers = null;
    
    answers = (
        <form >
            <label>
                <div className={clsx(styles.styledSelect)}>
                    <select /*value={answersState.answers}*/ onChange={handleChange}>
                          <option selected disabled hidden>{props.label}</option>
                          {answersState.answers.map((answer) => {
                                return <Option 
                                    answer = {answer.answer}
                                >
                                </Option>
                    })}  
                    </select>
                </div>
            </label>
        </form>
    )

    return (
       <div>
           {answers}
       </div>
    )
}

export default Dropdown