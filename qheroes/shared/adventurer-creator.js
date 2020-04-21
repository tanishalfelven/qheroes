import ADVENTURERS from "qheroes/shared/data/adventurers.js";

let UID = 0;

export default (id) => ({
    ...ADVENTURERS[id],

    id,
    name: `TODO NAME ${UID}`,
    UID: UID++,
    level: 0,
});
