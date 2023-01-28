import React from 'react';
import LinkedInIcon from '../../assets/linkedin-icon.svg';
import WhatsAppIcon from '../../assets/whats-app-icon.svg';
import TelegramAppIcon from '../../assets/telegram-icon.svg';
import GoogleIcon from '../../assets/google-icon.svg';
import cls from './Social.module.css';

const icons = [
    {icon: GoogleIcon, link: 'mailto:https://davydof.dev@gmail.com'},
    {icon: LinkedInIcon, link: 'https://linkedin.com/in/igor-davydov'},
    {icon: WhatsAppIcon, link: '2'},
    {icon: TelegramAppIcon, link: '3'},
]

export const Social = () => {
    return (
        <div className={cls.Social}>
            {icons.map(i => (
                <a href={i.link} key={i.link} target='_blank' rel="noreferrer">
                    <img src={i.icon} alt={i.link} className={cls.item}/>
                </a>
            ))}
        </div>
    );
};