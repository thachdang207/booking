export const formatPrice = (price) => {
    price = Math.floor(price);
    let priceString = ""
    while (price > 999) {
        let num = price % 1000;
        if (num < 10) {
            num = '00' + num
        } else if (num < 100) {
            num = '0' + num;
        }
        priceString = '.' + num + priceString;
        price = Math.floor(price/ 1000);
        if (price <= 999) {
            priceString = price + '' + priceString;
            break;
        }
    }
    return priceString;
}


export const formatDate = (isoDate) => {
    return new Date(isoDate).toLocaleString();
}

export const formatStrDate = (strDate) => {
    return new Date(strDate).toISOString();
}

export const countDiffDate = (date1, date2) => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(formatDate(date1));
    const secondDate = new Date(formatDate(date2));

    return Math.round(Math.abs((firstDate - secondDate) / oneDay));
}

