import React from 'react';
import cls from './Input.module.css';

type HTMLInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'placeholder'>

interface InputProps extends HTMLInputProps {
    value?: string;
    placeholder?: string;
    onChange: (value: string) => void;
}

export const Input = (props: InputProps) => {
    const {value = '', onChange, ...otherProps} = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.value);
    }

    return (
        <input value={value} onChange={onChangeHandler} {...otherProps} className={cls.Input}/>
    );
};