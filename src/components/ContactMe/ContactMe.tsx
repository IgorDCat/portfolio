import React from 'react';
import cls from './ContactMe.module.css';
import {Input} from '../../shared/Input/Input';
import {useState} from 'react';
import {Button} from '../../shared/Button/Button';
import emailjs from '@emailjs/browser';
import {Textarea} from '../../shared/Textarea/Textarea';

export const ContactMe = () => {
    const [nameInputValue, setNameInputValue] = useState('');
    const [messageInputValue, setMessageInputValue] = useState('');
    const [formWarning, setFormWarning] = useState(false);
    const [successSending, setSuccessSending] = useState(false);
    const [errorSending, setErrorSending] = useState(false);

    const onSendMessage = () => {
        if(nameInputValue !== '' && messageInputValue !== '') {
            emailjs.send('service_8kaluv1','template_gtqxmak', {
                from_name: nameInputValue,
                message: messageInputValue
            }, 'gdRyytQPiBVY2TyiG')
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setNameInputValue('');
                    setMessageInputValue('');
                    setSuccessSending(true);
                }, (err) => {
                    setErrorSending(true);
                });
        } else {
            setFormWarning(true);
        }
    }

    const resetStatus = () => {
        setFormWarning(false);
        setSuccessSending(false);
        setErrorSending(false);
    }

    return (
        <div>
            <p className='title' id='contacts'>Contact me</p>
            <div className={cls.contactForm}>
                <Input
                    value={nameInputValue}
                    onChange={setNameInputValue}
                    placeholder='Your name'
                    onFocus={resetStatus}
                />
                <Textarea
                    value={messageInputValue}
                    onChange={setMessageInputValue}
                    placeholder='Your message'
                    onFocus={resetStatus}
                />
                <div className={cls.btnWrapper}>
                    <Button onClick={onSendMessage}>
                        Send message
                    </Button>
                    {formWarning && <div className="error">
                        Please, fill in all the fields
                    </div>}
                    {successSending && <div className="success">
                        Success!
                    </div>}
                    {errorSending && <div className="error">
                        Some error has occurred
                    </div>}
                </div>
            </div>

        </div>
    );
};
