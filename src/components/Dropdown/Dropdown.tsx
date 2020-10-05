import React, { useState } from 'react'
import Option from './Option'
import clsx from 'clsx';
import styles from './Dropdown.module.scss'

interface DropdownProps{
    label: string;
}

const Dropdown: React.FC<DropdownProps> = (props) => {
    
    const [answersState, setAnswersState] = useState({
        answers: [
            {answer: 'Black'},
            {answer: 'Red'},
            {answer: 'Green'},
            {answer: 'Blue'},
        ]
    });

    const handleChange = (event:any) =>{
        console.log(event)
    }
    
    let answers = null;
    
    answers = (
        <form >
            <label>
                <div className={clsx(styles.styledSelect)}>
                    <select onChange={handleChange}>
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


