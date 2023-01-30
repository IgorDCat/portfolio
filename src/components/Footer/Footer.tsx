import React from 'react';
import cls from './Footer.module.css';

export const Footer = () => {
    return (
        <div className={cls.footer}>
            <div className={cls.content}>
                Igor Davydov, 2023
            </div>
        </div>
    );
};