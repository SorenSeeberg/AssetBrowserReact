import tinycolor from 'tinycolor2';

export const tint = (color, amount) => tinycolor.mix(color, 'white', amount);
export const darken = (color, amount) => tinycolor(color).darken(amount);
export const alpha = (color, amount) => tinycolor(color).setAlpha(amount);
