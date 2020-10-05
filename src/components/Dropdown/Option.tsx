import React from 'react'


const Option = (props: any) => {
    return (              
    <option onClick={props.click}>{props.answer}</option>
    )
} 

export default Option