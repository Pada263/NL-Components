import React from 'react'


const Option = (props: any) => {
    return (              
    <option value={props.anwser} key={props.value} onClick={props.click}>{props.answer}</option>
    )
} 

export default Option