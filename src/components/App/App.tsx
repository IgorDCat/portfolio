import React from 'react';
import cls from './App.module.css';
import {Header} from '../Header/Header';
import {MainMenu} from '../MainMenu/MainMenu';
import {AboutMe} from '../AboutMe/AboutMe';

export const App = () => {

    return (
        <>
            <MainMenu/>
            <div className={cls.app} >
                <main className={cls.appWrapper}>
                    <Header/>
                    <AboutMe/>
                </main>
            </div>
        </>
    );
}
