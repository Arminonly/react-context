import React, {Component} from 'react';
import Btn from './button';

    
    export default class ThemedButton extends Component {
        render () {
            return (
                <div>
                    <Btn theme ={this.props.theme} />
                </div>
        );
    }
}