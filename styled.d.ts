// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string;
        spacing: {
            xsmall: string;
            small: string;
            medium: string;
            large: string;
            xlarge: string;
        };
        align: {
            start: string,
            end: string,
            center: string,
        };
        breakpoints: {
            xsmall: string,
            small: string,
            medium: string,
            large: string,
            xlarge: string,
        },
        columnWidths: {
            fluid: string;
            content: string;
            "1/2": string;
            "1/3": string;
            "2/3": string;
            "1/4": string;
            "3/4": string;
            "1/5": string;
            "2/5": string;
            "3/5": string;
            "4/5": string;
        },
        colors: {
            primary1: {
                10: string,
                20: string,
                30: string,
                40: string,
                50: string,
                60: string,
                70: string,
                80: string,
                90: string,
                100: string,
                warmYellow: string,
                gradient: string,
                hover: string,
                active: string

            },
            valid: {
                10: string,
                20: string,
                30: string,
                40: string,
                50: string,
                60: string,
                70: string,
                80: string,
                90: string,
                100: string,

            },
            invalid: {
                10: string,
                20: string,
                30: string,
                40: string,
                50: string,
                60: string,
                70: string,
                80: string,
                90: string,
                100: string,
            },
            interaction: {
                100: string,
                focus: string,
                hover: string,
                visited: string,
                active: string,
                underline: string,
                boxShadow: string
            },
            primary2: {
                10: string,
                20: string,
                30: string,
                40: string,
                50: string,
                60: string,
                70: string,
                80: string,
                90: string,
                100: string,
            },
            primary3: {
                100: string,
            },
            secondary1: {
                10: string,
                20: string,
                30: string,
                40: string,
                50: string,
                60: string,
                70: string,
                80: string,
                90: string,
                100: string,
            },
            secondary2: {
                10: string,
                20: string,
                30: string,
                40: string,
                50: string,
                60: string,
                70: string,
                80: string,
                90: string,
                100: string,
            },
            tertiary1: {
                10: string,
                20: string,
                30: string,
                40: string,
                50: string,
                60: string,
                70: string,
                80: string,
                90: string,
                100: string,
            },
            tertiary2: {
                10: string,
                20: string,
                30: string,
                40: string,
                50: string,
                60: string,
                70: string,
                80: string,
                90: string,
                100: string,
            },
            tertiary3: {
                10: string,
                20: string,
                30: string,
                40: string,
                50: string,
                60: string,
                70: string,
                80: string,
                90: string,
                100: string,
            },
            tertiary4: {
                10: string,
                20: string,
                30: string,
                40: string,
                50: string,
                60: string,
                70: string,
                80: string,
                90: string,
                100: string,
            },
            tertiary5: {
                10: string,
                20: string,
                30: string,
                40: string,
                50: string,
                60: string,
                70: string,
                80: string,
                90: string,
                100: string,
            },
            tertiary6: {
                10: string,
                20: string,
                30: string,
                40: string,
                50: string,
                60: string,
                70: string,
                80: string,
                90: string,
                100: string,
            },
            tertiary7: {
                10: string,
                20: string,
                30: string,
                40: string,
                50: string,
                60: string,
                70: string,
                80: string,
                90: string,
                100: string,
            }
        }
    }
}