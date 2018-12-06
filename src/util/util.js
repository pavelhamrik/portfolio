export function getPrevArrayIndex( index, array ) {
    if (array.length === 0) return undefined;
    return index > 0 ? index - 1 : 0;
}

export function getNextArrayIndex( index, array ) {
    if (array.length === 0) return undefined;
    return array.length - 1 > index ? index + 1 : array.length - 1
}