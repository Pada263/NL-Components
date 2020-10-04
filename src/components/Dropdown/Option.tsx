import React from 'react'


const Option = (props: any) => {
    return (              
    <option onClick={props.click}>{props.children}{props.answer}</option>
    )
} 

export default Option