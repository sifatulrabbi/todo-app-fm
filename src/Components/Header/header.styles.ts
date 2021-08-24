import styled from 'styled-components';
import { sunIcon, moonIcon } from '../../Images';

export const Container = styled.section`
    width: 100%;
    padding: 3rem 1.2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;

    .header__logo {
        font-size: 2rem;
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 5px;
        font-weight: 700;
    }

    .header__iconBtn {
        width: 35px;
        height: 35px;
        justify-self: flex-end;
        background: url(${(p) => (p.theme.dark ? sunIcon : moonIcon)});
        background-repeat: no-repeat;
        background-position: center;
        background-color: 100%;
    }
`;
