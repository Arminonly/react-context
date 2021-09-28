import React, {useContext} from 'react';
import {Button} from 'reactstrap'
import MyContext from '../../useContext/context';

import SecondComponent from './secondComponent';
    
    export default function FirstComponent(){
        const {firstComponent, color} = useContext(MyContext)
            return (
                <div>
                <p>FirstComponent Page</p>
                    
                    <Button onClick={firstComponent} color = {color.first} >FirstComponent Page</Button>
                    <SecondComponent/>
                </div>
        );
}