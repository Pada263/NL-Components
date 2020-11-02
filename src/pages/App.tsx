import React from 'react';
import Button from '../components/Button'
import { PersonFill } from 'react-bootstrap-icons'
import {ChatDotsFill} from 'react-bootstrap-icons'
import LinkButton from '../components/LinkButton'
import {SpecialButton} from '../components/SpecialButton';
import Checkbox from '../components/Checkbox'
import IconButton from '../components/IconButton'
import {PencilFill} from 'react-bootstrap-icons'
import {TrashFill} from 'react-bootstrap-icons'
import RadioButton from '../components/RadioButton'
import BtnTheme from '../components/BtnTest/BtnTheme'
import ToggleSwitch from '../components/ToggleSwitch/ToggleSwitch'
import LinearProgress from '../components/ProgressBar/LinearProgress'
//import Dropdown from '../components/Dropdown/Dropdown';

function App() {
    console.log("test")
    return (
        <div>
           
            <main className="App-main">
                <h1>Test Arena</h1>
                <Button iconPlacement="start" theme="btn btn-danger" label="Accepteren" disabled={false} isYellow={false} action="submit"></Button>
                <Button iconPlacement="start" theme="btn btn-custom" label="Accepteren" disabled={false} icon={<PersonFill size={25} />}  isIcon={true} isYellow={false} action="submit"></Button>
                <Button iconPlacement="end" theme="btn btn-default" label="Accepteren" disabled={false} icon={<ChatDotsFill size={25}/>} isIcon={true} isYellow={true} action="submit"></Button>
                <Button theme="btn btn-success" label="Accepteren" disabled={true} isIcon={false}  isYellow={false} action="submit"></Button>
                
                <SpecialButton label="Me" icon={<PersonFill size={25}/>} isIcon={true}/>
                
                <LinkButton theme="" label="Already have an Acount? Sign in."></LinkButton>

                <Checkbox label="Test" />
        	    
            
                <IconButton color="danger" icon={<PencilFill/>}/>
                <IconButton color="warning"icon={<TrashFill/>}/>
                <RadioButton label="1" isChecked={true} name="test"/>
                <RadioButton label="2" name="test"/>

                {/*<Dropdown label="Wählen sie eine Farbe aus"/> */}
                 
            
               
               
                <LinearProgress/>

                <ToggleSwitch/>

            </main>    
        </div>  )
     }    
export default App
