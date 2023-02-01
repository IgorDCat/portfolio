import React from 'react';
import cls from './AboutMe.module.css';
import ReactLogo from '../../assets/react-logo.png'

export const AboutMe = () => {
    return (
        <section className={cls.AboutMe} id={'aboutMe'}>
            <div >
                <p className='title'>About me</p>
                <p>I’m frontend developer with more than 3 years of work experience.
                    I mainly develop with React and Redux.
                </p><br/>
                <p>
                    I like working in a team, discussing new ideas and solutions,
                    work with interesting and complex projects. I am constantly learning something new.
                </p>
            </div>
            <div>
                <img src={ReactLogo} alt='React' className={cls.animatedLogo}/>
            </div>
        </section>
    );
};
