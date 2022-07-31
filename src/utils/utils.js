export const valueShortener = (value) => {
    if (value < 1000) {
        return value;
    }
    else if (value > 1000 && value < 1000000) {
        return (value / 1000).toFixed(1) + 'K';
    } else {
        return (value / 1000000).toFixed(1) + 'M';
    }
}

export const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}