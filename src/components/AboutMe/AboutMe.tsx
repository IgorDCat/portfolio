import React from 'react';
import cls from './AboutMe.module.css';
import ReactLogo from '../../assets/react-logo.png'
import ReduxLogo from '../../assets/redux.svg'

export const AboutMe = () => {
    return (
        <>
            <section className={cls.AboutMe}>
                <div id={'aboutMe'}>
                    <p className='title'>About me</p>
                    <p>I’m frontend developer with more than 2 years of work experience.
                        I mainly develop with React and Redux.
                    </p><br/>
                    <p>
                        I have experience and understanding of complex front-end projects.
                        I understand how to independently solve problems using different technologies.
                        I write working code, I can configure projects, optimize code, make architectural decisions.
                        I have experience in webpack setup for production and dev mode, work on a size of a bundle,
                        work on app loading speed, writing tests (unit, e2e).

                    </p><br/>
                    <p>
                        I like working in a team, discussing new ideas and solutions,
                        work with interesting and complex projects. I am constantly learning something new.
                    </p>
                </div>
                <div>
                    <img src={ReactLogo} alt='React' className={cls.animatedLogo}/>
                    <img src={ReduxLogo} alt='Redux' className={cls.animatedLogo}/>
                </div>

            </section>
        </>
    );
};
