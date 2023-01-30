import React from 'react';
import cls from './Arrow.module.css';

export const Arrow = () => {
    return (
        <div className={cls.Arrow}>
            <div className={cls.part1}/>
            <div className={cls.part2}/>
        </div>
    );
};