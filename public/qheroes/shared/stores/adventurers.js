import { writable, get } from "svelte/store";

import createAdventurer, { ADVENTURERS } from "qheroes/shared/data/adventurer-creator.js";
import readonly from "qheroes/shared/readonly.js";
import timer from "qheroes/shared/timer.js";

import { tick } from "./gold.js";

const adventurers = writable([]);

const owned = writable(
    Object.keys(ADVENTURERS)
        .reduce((acc, adventurer) => {
            acc[adventurer] = 0;

            return acc;
        }, {})
);

const addAdventurer = (id) => {
    adventurers.update(($adventurers) => {
        $adventurers.push(createAdventurer(id));

        return $adventurers;
    });

    owned.update(($owned) => {
        $owned[id]++;

        return $owned;
    })
};

timer(1000, () => {
    let gainedGold = 0;

    get(adventurers).forEach(({ rate }) => {
        gainedGold += rate;
    });

    tick(gainedGold);
});

const readonlyOwned = readonly(owned);

export default readonly(adventurers);

export {
    readonlyOwned as owned,

    addAdventurer,
};
