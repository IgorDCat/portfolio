import {FC, ReactNode} from 'react';
import {createPortal} from 'react-dom';

interface PortalProps {
    targetElem?: HTMLElement;
    children?: ReactNode
}

export const Portal: FC<PortalProps> = (props) => {
    const {children, targetElem = document.body} = props;

    return createPortal(children, targetElem)
}