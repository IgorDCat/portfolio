import React from 'react';
import ReduxLogo from '../../assets/redux.svg';
import clsA from '../AboutMe/AboutMe.module.css';
import cls from './Experience.module.css';

export const Experience = () => {
    return (
        <div className={cls.Experience} id='experience'>
            <img src={ReduxLogo} alt='Redux' className={clsA.animatedLogo}/>
            <div>
                <p className='title'>Experience</p>
                <p>
                    I have experience and understanding of complex front-end projects.
                    I understand how to independently solve problems using different technologies.
                    I write working code, I can configure projects, optimize code, make architectural decisions.
                    I have experience in webpack setup for production and dev mode, work on a size of a bundle,
                    work on app loading speed, writing tests (unit, e2e).
                </p><br/>
            </div>
        </div>
    );
};