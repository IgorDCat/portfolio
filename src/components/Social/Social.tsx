import React from 'react';
import LinkedInIcon from '../../assets/linkedin-icon.svg';
import WhatsAppIcon from '../../assets/whats-app-icon.svg';
import TelegramAppIcon from '../../assets/telegram-icon.svg';
import GoogleIcon from '../../assets/google-icon.svg';
import cls from './Social.module.css';
import {Modal} from '../../shared/Modal/Modal';
import {useState} from 'react';

const icons = [
    {id: 1, icon: GoogleIcon, link: 'mailto:https://davydof.dev@gmail.com'},
    {id: 2, icon: LinkedInIcon, link: 'https://linkedin.com/in/igor-davydov'},
    {id: 3, icon: WhatsAppIcon, link: ''},
    {id: 4, icon: TelegramAppIcon, link: ''},
]

export const Social = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className={cls.Social}>
            {icons.map(i => {
                if(i.link !== '') {
                    return (
                        <a href={i.link} key={i.id} target="_blank" rel="noreferrer">
                            <img src={i.icon} alt={i.link} className={cls.item}/>
                        </a>
                    )
                }
                return (
                    <div key={i.id} onClick={() => setIsModalOpen(true)}>
                        <img src={i.icon} alt={i.link} className={cls.item}/>
                    </div>
                )
            })}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className='title'>Contacts</div>
                <div>Phone (WhatsApp): +995 571069227 </div>
                <div>Telegram: @igor_d_dev</div>
            </Modal>
        </div>
    );
};