import { DefaultTheme } from 'styled-components';

export type Color = 
    'indigo' | 'prussianBlue' | 'oxfordBlue' | 'cadetGrey' | 'mintCream' | 
    'black' | 'white' | 'success' | 'error' | 'grey' | 'darkGrey' | 'greyedOut';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            indigo: string,
            prussianBlue: string,
            oxfordBlue: string,
            cadetGrey: string,
            mintCream: string,
            black: string,
            white: string,
            success: string,
            error: string,
            grey: string,
            darkGrey: string,
            greyedOut: string
        }
    }
}

export const theme: DefaultTheme = {
    colors: {
        indigo: '#134074',
        prussianBlue: '#13315C',
        oxfordBlue: '#0B2545',
        cadetGrey: '#8DA9C4',
        mintCream: '#EEF4ED',
        black: '#000',
        white: '#000',
        success: '#20BF55',
        error: 'red',
        grey: '#c4c4c4',
        darkGrey: '#b7b7b7',
        greyedOut: '#808080'
    }
}