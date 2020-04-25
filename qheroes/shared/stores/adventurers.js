import { writable, get } from "svelte/store";

import ADVENTURERS from "qheroes/shared/data/adventurers.js"
import createAdventurer from "qheroes/shared/adventurer-creator.js";
import readonly from "qheroes/shared/readonly.js";
import timer from "qheroes/shared/timer.js";
import performJob from "qheroes/shared/perform-job.js";

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
    party.update(($party) => {
        $party.forEach((adventurer) => {
            const { UID, rate, interval } = adventurer;

            // refill on interval
            if ((i + UID) % interval) {
                return adventurer;
            }

            tick(rate);

            return $party.set(UID, performJob(adventurer));
        });

        return $party;
    });
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
