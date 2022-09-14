import React from 'react';

function ToggleButtonLeft(props) {
    return (
        <span className='toggle-button-left'>
            <i className='icon'>
                <svg xmlns='http://www.w3.org/2000/svg' width={16} height={16} viewBox="0 0 16 16" fill='none'>
                    <path d='M8 10.4a1.8 1.8 0 0 1 1.7 1.209l.03-.005.07-.004h3.6a.6.6 0 0 1 .07 1.196l-.07.004H9.8a.606.606 0 0 1-.1-.008 1.8 1.8 0 0 1-3.4-.001l-.03.005-.07.004H2.6a.6.6 0 0 1-.07-1.196l.07-.004h3.6c.034 0 .067.003.1.008A1.8 1.8 0 0 1 8 10.4zm0 1.2a.6.6 0 1 0 0 1.2.6.6 0 0 0 0-1.2zM3.8 6.2a1.8 1.8 0 0 1 1.7 1.209l.03-.005.07-.004h7.8a.6.6 0 0 1 .07 1.196l-.07.004H5.6a.605.605 0 0 1-.1-.008A1.8 1.8 0 1 1 3.8 6.2zm0 1.2a.6.6 0 1 0 0 1.2.6.6 0 0 0 0-1.2zM10.4 2a1.8 1.8 0 0 1 1.7 1.209l.03-.005.07-.004h1.2a.6.6 0 0 1 .07 1.196l-.07.004h-1.2a.605.605 0 0 1-.1-.008 1.8 1.8 0 0 1-3.4-.001l-.03.005-.07.004h-6a.6.6 0 0 1-.07-1.196L2.6 3.2h6c.034 0 .067.003.1.008A1.8 1.8 0 0 1 10.4 2zm0 1.2a.6.6 0 1 0 0 1.2.6.6 0 0 0 0-1.2z' fill='#3E4042'></path>
                </svg>
            </i>
            <span className='toggle-button__text'>필터</span>
        </span>
    );
}

export default ToggleButtonLeft;