function _generateZero(start: number, end: number): Array<number> {
    const zeroes = [];
    for (let i = start; i < end; i++) {
        zeroes.push(0);
    }
    return zeroes;
}

/**
 * Generates an array of random length between start and end (inclusive) with all elements as 0
 * @param start The minimum length of the array
 * @param end The maximum length of the array
 * @returns An array of zeroes of random length between start and end
 */
function generateZero(start:number = 0, end:number = 10): Array<number> {
    return _generateZero(start, Math.random()*end);
}

export default generateZero;
export { generateZero };
