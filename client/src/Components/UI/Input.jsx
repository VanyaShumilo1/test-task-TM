import React from 'react';
import styles from '../../styles/Input.module.scss'

const Input = (props) => {
    return (

        <div>
            <input {...props} className={[styles.input, props.styles].join(' ')}/>
        </div>

    );
};

export default Input;