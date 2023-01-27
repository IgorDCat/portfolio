import React from 'react';
import {ReactNode} from 'react';
import cls from './Button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export const Button = (props: ButtonProps) => {
    const {children, ...otherProps} = props;

    return (
        <button className={cls.Button} {...otherProps}>
            {children}
        </button>
    );
};
