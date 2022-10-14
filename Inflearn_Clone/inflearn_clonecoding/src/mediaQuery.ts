export const BREAKPOINT_PC_START = "pcStart";
export const BREAKPOINT_PC_END = "pcEnd";
export const BREAKPOINT_TABLET_START = "tabletStart";
export const BREAKPOINT_TABLET_END = "tabletEnd";
export const BREAKPOINT_PHONE_MEDIUM_START = "phoneMediumStart";
export const BREAKPOINT_PHONE_MEDIUM_END = "phoneMediumEnd";
export const BREAKPOINT_PHONE_SMALL_START = "phoneSmallStart";
export const BREAKPOINT_PHONE_SMALL_END = "phoneSmallEnd";

export const breakpoints = {
    pcStart: 1240,
    pcEnd: 1240,
    tabletStart : 1080,
    tabletEnd : 1079,
    phoneMediumStart : 1025,
    phoneMediumEnd : 1024,
    phoneSmallStart : 618,
    phoneSmallEnd : 617
};

export const minMediaQueries = (key: keyof typeof breakpoints) => {
    return `@media (min-width: ${breakpoints[key]}px)`;
};

export const maxMediaQueries = (key: keyof typeof breakpoints) => {
    return `@media (max-width: ${breakpoints[key]}px)`;
};

export const betweenMediaQueries = (key1: keyof typeof breakpoints, key2: keyof typeof breakpoints) => {
    return `@media  (min-width: ${breakpoints[key1]}px) and (max-width: ${breakpoints[key2]}px)`;
};