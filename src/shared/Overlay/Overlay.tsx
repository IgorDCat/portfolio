import React, {memo} from 'react';
import cls from './Overlay.module.css';
import {classNames} from '../../helpers/classNames';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}

export const Overlay = memo((props: OverlayProps) => {
    const {className, onClick} = props;

    return (
        <div
            className={classNames(cls.Overlay, {}, [className])}
            onClick={onClick}
        />
    );
})