import { createGlobalStyle } from 'styled-components';

import robotoNormal from './Roboto-Black.ttf';
import robotoMedium from './Roboto-Medium.ttf';
import robotoBold from './Roboto-Bold.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Roboto Normal';
        src: url(${robotoNormal}) format('tff'),
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Roboto Medium';
        src: url(${robotoMedium}) format('tff'),
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Roboto Bold';
        src: url(${robotoBold}) format('tff'),
        font-weight: 500;
        font-style: normal;
    }
`;