import { writable, get } from "svelte/store";
import readonly from "qheroes/shared/readonly.js";
import throttle from "qheroes/shared/throttle.js";
import flags from "qheroes/shared/flags.js";

const CLICK_THROTTLE_WINDOW = 90;
const TICK_THROTTLE_WINDOW = 1000;
const multiplier = 1;

const START_GOLD = flags.DEV && flags.has("gold") ?
    Number.parseInt(flags.get("gold"), 10) :
    0;

const gold = writable(START_GOLD);
const totalGold = writable(START_GOLD);

let previousGold = START_GOLD;
gold.subscribe(($gold) => {
    const diff = $gold - previousGold;

    if (diff > 0) {
        totalGold.update(($totalGold) => $totalGold + diff);
    }

    previousGold = $gold;
});

const gain = (amount) => {
    gold.update(($gold) => $gold + amount);
};

const tick = (amount) => gain(amount);
const mine = throttle(CLICK_THROTTLE_WINDOW, () => gain(multiplier));

const pay = (amount, c) => {
    if (get(gold) >= amount) {
        gold.update(($gold) => $gold - amount);

        c();
    }
};

const readonlyTotalGold = readonly(totalGold);

export default readonly(gold);

export {
    mine,
    pay,
    tick,

    readonlyTotalGold as totalGold,
};
