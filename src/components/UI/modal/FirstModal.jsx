import React from 'react';
import cl from './FirstModal.module.css';
const FirstModal = ({children, visible, setVisible}) => {

    const rootClasses = [cl.firstModal]
    if(visible) {
        rootClasses.push(cl.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.firstModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default FirstModal;