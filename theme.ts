import {createTheme, MantineThemeOverride} from "@mantine/core";

export const theme = createTheme({
    fontFamily: 'Open Sans, sans-serif',
    primaryColor: 'blue',
    white: '#f5f5f5',
    black: '#111111',
    colors: {
        'blue': ["#eaf7fe", "#dce9f2", "#b9d1e2", "#93b6d1", "#73a0c4", "#5e92bc", "#538db9", "#4279a4", "#366c93", "#255e84"], // [8]
        'light-blue': ["#e7f8ff", "#d6ecf6", "#b2d5e8", "#8abdd9", "#69a9cd", "#539dc6", "#4597c3", "#3482ad", "#26759b", "#06658b"], // [3]
        'dark-gray': ["#f2f5f8", "#e5e8e9", "#c6d0d5", "#a4b5c1", "#889fb0", "#7592a6", "#6b8ba1", "#59788d", "#4d6a7f", "#3c5c71"], // [9]
        'yellow': ["#fff6e0", "#ffedcc", "#fcda9d", "#f9c66a", "#f7b43e", "#f6aa21", "#f5a40f", "#db8f00", "#c27e00", "#a96c00"], // [5]
        'orange': ["#fff0e4", "#ffe0cf", "#fbc0a0", "#f79c6d", "#f37f41", "#f26d25", "#f26216", "#d8510a", "#c14705", "#a83b00"], // [6]
    },
} as MantineThemeOverride );
