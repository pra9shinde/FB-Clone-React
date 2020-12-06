import React from 'react';
import classes from './Backdrop.css';

const backdrop = (props) =>
    props.show ? (
        <div className='backdrop' onClick={props.clicked}>
            {props.children}
        </div>
    ) : null;

export default backdrop;
