import React from 'react';
import cls from './ContactMe.module.css';
import {Input} from '../../shared/Input/Input';
import {useState} from 'react';
import {Button} from '../../shared/Button/Button';
import emailjs from '@emailjs/browser';

export const ContactMe = () => {
    const [nameInputValue, setNameInputValue] = useState('');
    const [messageInputValue, setMessageInputValue] = useState('');

    const onSendMessage = () => {
        emailjs.send('service_8kaluv1','template_gtqxmak', {
            from_name: nameInputValue,
            message: messageInputValue
        }, 'gdRyytQPiBVY2TyiG')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setNameInputValue('');
                setMessageInputValue('');
            }, (err) => {
                console.log('FAILED...', err);
            });
    }

    return (
        <div>
            <p className='title'>Contact me</p>
            <div className={cls.contactForm}>
                <Input value={nameInputValue} onChange={setNameInputValue} placeholder='Your name'/>
                <Input value={messageInputValue} onChange={setMessageInputValue} placeholder='Your message'/>

                <Button onClick={onSendMessage}>
                    Send message
                </Button>
            </div>

        </div>
    );
};
