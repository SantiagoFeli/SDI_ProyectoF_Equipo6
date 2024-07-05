import React from 'react';

const AuthButton = ({ onClick, logo, alt }) => (
    <a onClick={onClick}>
        <img src={logo} alt={alt} />
    </a>
);

export default AuthButton;