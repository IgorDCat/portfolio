import React from 'react';
import cls from './Textarea.module.css';
import {classNames} from '../../helpers/classNames';

type HTMLTextareaProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange' | 'placeholder'>

interface TextareaProps extends HTMLTextareaProps {
    value?: string;
    placeholder?: string;
    onChange: (value: string) => void;
}

export const Textarea = (props: TextareaProps) => {
    const {value = '', onChange, ...otherProps} = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.currentTarget.value);
    }

    return (
        <textarea
            value={value}
            onChange={onChangeHandler}
            className={classNames(cls.Input)}
            {...otherProps}
        />
    );
};