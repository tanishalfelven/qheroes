
const randomInt = (min = 0, max = 1) => Math.floor(Math.random() * (max - min)) + min;

const randomFromArray = (arr) => arr[randomInt(0, arr.length)];

const randomBool = () => Boolean(randomInt());

export default randomInt;

export {
    randomFromArray,
    randomBool,
};
