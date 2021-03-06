import { DefaultTheme } from "styled-components";

export type Spacing = keyof DefaultTheme["spacing"];
export type Align = keyof DefaultTheme["align"];


const myTheme: DefaultTheme = {
    borderRadius: '0.6rem',
    spacing: {
        "xsmall": "0.6rem",
        "small": "1.2rem",
        "medium": "2.4rem",
        "large": "4.8rem",
        "xlarge": "9.6rem"
    },
    align: {
        start: 'start',
        end: 'end',
        center: 'center',
    },
    columnWidths: {
        fluid: "fluid",
        content: "content",
        "1/2": "50%",
        "1/3": "33%",
        "2/3": "66%",
        "1/4": "25%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
    },
    breakpoints: {
        xsmall: "375px",
        small: "768px",
        medium: "996px",
        large: "1200px",
        xlarge: "1400px",
    },
    colors: {
        primary1: {
            10: "#fffde6",
            20: "#fffacc",
            30: "#fff8b3",
            40: "#fff599",
            50: "#fff27f",
            60: "#fff066",
            70: "#ffee4d",
            80: "#ffeb33",
            90: "#ffe91a",
            100: "#ffe600",
            warmYellow: "#ffc300",
            gradient: "linear-gradient(90deg, #ffe600 31.25%, #ffc300 100%}",
            hover: "#FFF600",
            active: "#FFDA0"
        },
        valid: {
            10: "rgba(0, 153, 35, 0.1)",
            20: "rgba(0, 153, 35, 0.2)",
            30: "rgba(0, 153, 35, 0.3)",
            40: "rgba(0, 153, 35, 0.4)",
            50: "rgba(0, 153, 35, 0.5)",
            60: "rgba(0, 153, 35, 0.6)",
            70: "rgba(0, 153, 35, 0.7)",
            80: "rgba(0, 153, 35, 0.8)",
            90: "rgba(0, 153, 35, 0.9)",
            100: "#009923",

        },
        invalid: {
            10: "rgba(230,14,34,0.1)",
            20: "rgba(230,14,34,0.2)",
            30: "rgba(230,14,34,0.3)",
            40: "rgba(230,14,34,0.4)",
            50: "rgba(230,14,34,0.5)",
            60: "rgba(230,14,34,0.6)",
            70: "rgba(230,14,34,0.7)",
            80: "rgba(230,14,34,0.8)",
            90: "rgba(230,14,34,0.9)",
            100: "#e60e22",
        },
        interaction: {
            100: "#00349f",
            focus: "#0d59ff",
            hover: "#0d59ff",
            visited: "#441fcc",
            active: "#441fcc",
            underline: "#cccccc",
            boxShadow: "rgba(13, 89, 255, 0.2"
        },
        primary2: {
            10: "rgba(0, 0, 0, 0.1)",
            20: "#cccccc",
            30: "#b3b3b3",
            40: "#999999",
            50: "#7f7f7f",
            60: "#666666",
            70: "#4d4d4d",
            80: "#333333",
            90: "#1a1a1a",
            100: "#000000",
        },
        primary3: {
            100: "#ffffff",
        },
        secondary1: {
            10: "#e8e6f0",
            20: "rgba(19, 0, 100, 0.2)",
            30: "rgba(19, 0, 100, 0.3)",
            40: "rgba(19, 0, 100, 0.4)",
            50: "rgba(19, 0, 100, 0.5)",
            60: "rgba(19, 0, 100, 0.6)",
            70: "rgba(19, 0, 100, 0.7)",
            80: "rgba(19, 0, 100, 0.8)",
            90: "rgba(19, 0, 100, 0.9)",
            100: "#130064",
        },
        secondary2: {
            10: "#fdfdfb",
            20: "#faf9f6",
            30: "#f9f7f2",
            40: "#f6f3ed",
            50: "#f3f0e8",
            60: "#f1eee5",
            70: "#efebe1",
            80: "#ede8dc",
            90: "#ebe5d8",
            100: "#e8e2d3",
        },
        tertiary1: {
            10: "rgba(101, 186, 175, 0.1)",
            20: "rgba(101, 186, 175, 0.2)",
            30: "rgba(101, 186, 175, 0.3)",
            40: "rgba(101, 186, 175, 0.4)",
            50: "rgba(101, 186, 175, 0.5)",
            60: "rgba(101, 186, 175, 0.6)",
            70: "rgba(101, 186, 175, 0.7)",
            80: "rgba(101, 186, 175, 0.8)",
            90: "rgba(101, 186, 175, 0.9)",
            100: "#65baaf",
        },
        tertiary2: {
            10: "#f5f2fb",
            20: "#eae4f6",
            30: "#e0d7f2",
            40: "#d5c9ed",
            50: "#cabbe8",
            60: "#c0aee4",
            70: "#b6a1e0",
            80: "#ab93db",
            90: "#a186d7",
            100: "#9678d2",
        },
        tertiary3: {
            10: "rgba(234, 127, 160, 0.1)",
            20: "rgba(234, 127, 160, 0.2)",
            30: "rgba(234, 127, 160, 0.3)",
            40: "rgba(234, 127, 160, 0.4)",
            50: "rgba(234, 127, 160, 0.5)",
            60: "rgba(234, 127, 160, 0.6)",
            70: "rgba(234, 127, 160, 0.7)",
            80: "rgba(234, 127, 160, 0.8)",
            90: "rgba(234, 127, 160, 0.9)",
            100: "#ea7fa0",
        },
        tertiary4: {
            10: "#f1f7fb",
            20: "rgba(115, 175, 213, 0.2)",
            30: "rgba(115, 175, 213, 0.3)",
            40: "rgba(115, 175, 213, 0.4)",
            50: "rgba(115, 175, 213, 0.5)",
            60: "rgba(115, 175, 213, 0.6)",
            70: "rgba(115, 175, 213, 0.7)",
            80: "rgba(115, 175, 213, 0.8)",
            90: "rgba(115, 175, 213, 0.9)",
            100: "#73afd5",
        },
        tertiary5: {
            10: "#e6f1f0",
            20: "#cce2e0",
            30: "#b3d5d1",
            40: "#99c6c1",
            50: "#7fb7b1",
            60: "#66a9a2",
            70: "#4d9b93",
            80: "#338d83",
            90: "#1a7f74",
            100: "#007064",
        },
        tertiary6: {
            10: "rgba(83, 63, 140, 0.1)",
            20: "rgba(83, 63, 140, 0.2)",
            30: "rgba(83, 63, 140, 0.3)",
            40: "rgba(83, 63, 140, 0.4)",
            50: "rgba(83, 63, 140, 0.5)",
            60: "rgba(83, 63, 140, 0.6)",
            70: "rgba(83, 63, 140, 0.7)",
            80: "rgba(83, 63, 140, 0.8)",
            90: "rgba(83, 63, 140, 0.9)",
            100: "#533f8c",
        },
        tertiary7: {
            10: "rgba(159, 34, 65, 0.1)",
            20: "rgba(159, 34, 65, 0.2)",
            30: "rgba(159, 34, 65, 0.3)",
            40: "rgba(159, 34, 65, 0.4)",
            50: "rgba(159, 34, 65, 0.5)",
            60: "rgba(159, 34, 65, 0.6)",
            70: "rgba(159, 34, 65, 0.7)",
            80: "rgba(159, 34, 65, 0.8)",
            90: "rgba(159, 34, 65, 0.9)",
            100: "#9f2241"
        }
    }
}

export { myTheme };