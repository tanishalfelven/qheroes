import { writable, get } from "svelte/store";

import ADVENTURERS from "qheroes/shared/data/adventurers.js"
import createAdventurer from "qheroes/shared/adventurer-creator.js";
import readonly from "qheroes/shared/readonly.js";
import timer from "qheroes/shared/timer.js";

import { tick } from "./gold.js";

const PARTY_MAX = 8;

const party = writable(new Map());
const tavern = writable(new Map());

const owned = writable(
    Object.keys(ADVENTURERS)
        .reduce((acc, adventurer) => {
            acc[adventurer] = 0;

            return acc;
        }, {})
);

const addAdventurer = (id) => {
    // everything after 8 goes straight to the tavern
    (get(party).size === PARTY_MAX ? tavern : party)
        .update(($adventurers) => {
            const newAdventurer = createAdventurer(id);

            $adventurers.set(newAdventurer.UID, newAdventurer);

            return $adventurers;
        });

    owned.update(($owned) => {
        $owned[id]++;

        return $owned;
    })
};

timer(1000, (i) => {
    let gainedGold = 0;

    get(party).forEach(({ UID, rate, interval }) => {
        // refill on interval
        if ((i + UID) % interval) {
            return;
        }


        gainedGold += rate;
    });

    if (gainedGold) {
        tick(gainedGold);
    }
});

const readonlyOwned = readonly(owned);
const readonlyTavern = readonly(tavern);

export default readonly(party);

export {
    PARTY_MAX,

    readonlyOwned as owned,
    readonlyTavern as tavern,

    addAdventurer,
};
