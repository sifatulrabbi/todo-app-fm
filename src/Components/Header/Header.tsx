import React from 'react';
import { Container } from './header.styles';

interface Props {
    toggler?: () => void;
}

const Header: React.FC<Props> = ({ toggler }) => {
    return (
        <Container>
            <div className="header__logo">Todo</div>
            <button className="header__iconBtn" onClick={toggler} />
        </Container>
    );
};

export default Header;
