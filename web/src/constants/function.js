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

export const nullOrNot = (prop) => {
    if(prop !== null) return prop
    else return ""
}


export const findValue = (obj, prop) => {
    if(prop !== null){
        let result = obj.find(o => {
            return o.label === prop;
        })
        return result ? result.value : result
    }
}

export const findLabel = (obj, prop) => {
    if(prop !== null) {
        let result = obj.find(o => {
            return o.value === prop;
        })
        return result ? result.label : result
    }
}

export const isTruthy = (prop) => {
    return !(prop === false || prop === null || prop === undefined || isNaN(prop) || prop === 0);
}


export const getExtension = (filename) => {
    let parts = filename.split('.');
    let image = "image/"
    return image.concat(parts[parts.length - 1]);
  }
