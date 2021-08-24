import { createGlobalStyle } from 'styled-components';

export type ThemeType = typeof lightTheme;

const lightTheme = {
    dark: false,
    borderRadius: '5px',
    fontSize: '18px',
    fontFamily: `'Josefin Sans', sans-serif`,
    breakPoints: {
        mobile: '375px',
        desktop: '1440px',
    },
    boxShadow: `rgba(0,0,0,0.08) 0px 8px 20px -1px`,
    palette: {
        fontColor: {
            primary: 'hsl(235, 19%, 35%)',
            secondary: 'hsl(233, 11%, 84%)',
        },
        primary: {
            main: 'hsl(220, 98%, 61%)',
            gradient:
                'linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
        },
        background: {
            default: 'hsl(0, 0%, 98%)',
            paper: 'hsl(0, 0%, 100%)',
        },
        hover: 'hsl(236, 9%, 61%)',
        inactive: 'hsl(236, 33%, 92%)',
    },
};

const darkTheme: ThemeType = {
    ...lightTheme,
    dark: true,
    boxShadow: `rgba(0,0,0,0.5) 0px 20px 35px -5px,
                rgba(0,0,0,0.3) 0px 0px 10px 0px`,
    palette: {
        fontColor: {
            primary: 'hsl(234, 39%, 85%)',
            secondary: 'hsl(234, 11%, 52%)',
        },
        primary: lightTheme.palette.primary,
        background: {
            default: 'hsl(235, 21%, 11%)',
            paper: 'hsl(235, 24%, 19%)',
        },
        hover: 'hsl(236, 33%, 92%)',
        inactive: 'hsl(233, 14%, 35%)',
    },
};

const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: inherit;
        color: inherit;
        font-family: inherit;
    }

    body {
        min-height: 100vh;
        max-width: 100vw;
        overflow-x: hidden;
        font-size: ${(p) => p.theme.fontSize};
        color: ${(p) => p.theme.palette.fontColor.primary};
        font-family: ${(p) => p.theme.fontFamily};
        background-color: ${(p) => p.theme.palette.background.default};
    }

    input, button, textarea {
        background: transparent;
        outline: none;
        border: none;
        font-size: 1rem;
    }

    button {
        cursor: pointer;
    }
    
    li, a {
        text-decoration: none;
        list-style-type: none;
    }
`;

export { lightTheme, darkTheme, GlobalStyles };
