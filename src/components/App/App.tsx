import React from 'react';
import cls from './App.module.css';
import {Header} from '../Header/Header';
import {MainMenu} from '../MainMenu/MainMenu';
import {AboutMe} from '../AboutMe/AboutMe';
import {Experience} from '../Experience/Experience';
import {Social} from '../Social/Social';
import {ContactMe} from '../ContactMe/ContactMe';

export const App = () => {

    return (
        <>
            <MainMenu/>
            <div className={cls.app} >
                <main className={cls.appWrapper}>
                    <Header/>
                    <Social/>
                    <AboutMe/>
                    <Experience/>
                    <ContactMe/>
                </main>
            </div>
        </>
    );
}
