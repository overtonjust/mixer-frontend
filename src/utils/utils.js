const capitalize = (str) => {
    const firstChar = str.charAt(0).toUpperCase();
    const remainingChar = str.substring(1).toLowerCase();

    return `${firstChar}${remainingChar}`
};

const convertSecondsToTimeStr = (seconds) => {
    
    const minutes = `${(seconds / 60).toFixed(2)}`;
    return minutes.replace('.',':')
};

export { capitalize, convertSecondsToTimeStr }


