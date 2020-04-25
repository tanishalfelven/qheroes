import ADVENTURERS from "./data/adventurers.js";
import generateName from "./name-generator.js";
import random from "./random.js";

let UID = 0;

export default (id) => ({
    ...ADVENTURERS[id],

    id,
    name: generateName(),
    UID: UID++,
    level: 0,
    color: random(0, 360),
});
