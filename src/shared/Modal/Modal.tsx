import React, {ReactNode} from 'react';
import cls from './Modal.module.css';
import {classNames} from '../../helpers/classNames';
import {Mods} from '../../helpers/classNames';
import {Overlay} from '../Overlay/Overlay';
import {useModal} from '../../hooks/useModal';
import {Portal} from '../Portal/Portal';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Modal = (props: ModalProps) => {
    const {children, className, isOpen, onClose} = props;
    const {isClosing, closeModal} = useModal({isOpen, onClose, animationDelay: 300});

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <Overlay onClick={closeModal}/>
                <div className={cls.content}>
                    <div className={cls.closeBtn} onClick={onClose}>x</div>
                    {children}
                </div>
            </div>
        </Portal>
    );
}