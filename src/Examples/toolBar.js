import React from 'react';
import ThemedButton from './ThemedButton';
    
    export default function Toolbar({theme}){
            return (
                <div>
                    <ThemedButton theme ={theme}  />
                </div>
        );
}