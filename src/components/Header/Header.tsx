import React from 'react';
import cls from './Header.module.css';
import {Button} from '../../shared/Button/Button';

export const Header = () => {

    return (
        <header className={cls.appHeader}>
            <div className={cls.smallHeading} >
                Hi, my name is
            </div>
            <div className={cls.bigHeading}>
                Igor Davydov.
            </div>
            <div className={cls.secondHeading}>
                I'm frontend developer.
            </div>
            <div className={cls.subtitle}>
                I’m a software engineer specializing in building (and
            </div>
            <div className={cls.subtitle}>
                occasionally designing) exceptional digital experiences.
            </div>
            <div className={cls.btnWrapper}>
                <Button>Get contacts</Button>
            </div>
        </header>
    );
};