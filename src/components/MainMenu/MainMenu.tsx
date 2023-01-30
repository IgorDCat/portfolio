import React from 'react';
import cls from './MainMenu.module.css';
import {Button} from '../../shared/Button/Button';
import {useState} from 'react';
import {useThrottle} from '../../hooks/useThrottle';
import {useEffect} from 'react';

const menuItems = [
    {title: 'About me', link: '#aboutMe'},
    {title: 'Experience', link: '#experience'},
    {title: 'Contacts', link: '#contacts'},
]

export const MainMenu = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [isMenuVisible, setIsMenuVisible] = useState(true);

    const onScroll = useThrottle( (e: any) => {
        const scroll = e?.target?.scrollingElement?.scrollTop
        if(scroll < scrollPosition){
            setIsMenuVisible(true);
        } else {
            setIsMenuVisible(false);
        }
        setScrollPosition(e.target.scrollingElement.scrollTop)
    }, 100);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [onScroll]);

    return (
        <nav className={isMenuVisible? cls.MainMenu : cls.hidden}>
            <a href='/CV_frontend_dev_Igor_Davydov.pdf' target='_blank' rel="noopener">
                <Button>Resume</Button>
            </a>
            {menuItems.map(i => (
                <a className={cls.menuItem} key={i.title} href={i.link}>
                    {i.title}
                </a>
            ))}
        </nav>
    );
};