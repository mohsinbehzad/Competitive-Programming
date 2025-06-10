/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    const stack = [...arr.map(item => [item,n])];
    const result = [];

    while(stack.length > 0) {
        const [item, n] = stack.pop();

        if(Array.isArray(item) && n>0) {
            stack.push(...item.map(subItem => [subItem, n-1]));
        } else {
            result.push(item);
        }
    }
    return result.reverse();
};