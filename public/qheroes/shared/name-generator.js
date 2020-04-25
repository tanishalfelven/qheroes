import random, { randomFromArray } from "./random.js";

const chars = {
    c: ["ch", "th", "gh", "sh", "b", "c", "d", "f", "fl", "g", "h", "j", "k", "l", "ll", "m", "mm", "n", "nn", "p", "pp", "qu", "r", "s", "t", "st", "v"],
    v: ["a", "ae", "e", "ee", "i", "o", "io", "ou", "au", "u", "ei", "y"],
};

const fonts = ["vc", "cv", "vcv", "cvc", "cvc"];

const fill = (font) => [...font].map((type) => randomFromArray(chars[type])).join("");

const generateName = (len = random(1, 4)) => {
    const name = [];

    for (let i = 0; i < len; i++) {
        const newSyllable = fill(randomFromArray(fonts));

        // naive but good enough for now, just keep looping until we get a new syllable
        if (name[name.length - 1] === newSyllable) {
            --i;
            continue;
        }

        name.push(newSyllable);
    }

    const [first, ...rest] = name.join("");

    return first.toUpperCase() + rest.join("");
};

export default generateName;
