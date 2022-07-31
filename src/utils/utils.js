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

const doubleDigit = (value) => {
    if (value < 10) {
        return `0${value}`
    } else {
        return value;
    }
}
export const getFormattedDate = () => {
    let date = new Date();
    let year = doubleDigit(date.getFullYear());
    let month = doubleDigit(date.getMonth());
    let day = doubleDigit(date.getDate());
    let hr = doubleDigit(date.getHours());
    let mn = doubleDigit(date.getMinutes());
    return `${day}-${month}-${year} at ${hr}:${mn} AM`
}