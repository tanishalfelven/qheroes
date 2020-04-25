import ADVENTURERS from "./data/adventurers.js";
import generateName from "./name-generator.js";
import random from "./random.js";

let UID = 0;

export default (id) => ({
    ...ADVENTURERS[id],

    id,
    name: generateName(),
    UID: UID++,
    color: random(0, 360),

    level: 0,
    xp: 0,
    maxXp: 10,
});
