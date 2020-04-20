import { writable, get } from "svelte/store";
import readonly from "qheroes/shared/readonly.js";
import throttle from "qheroes/shared/throttle.js";

const CLICK_THROTTLE_WINDOW = 90;
const TICK_THROTTLE_WINDOW = 1000;
const multiplier = 1;

const gold = writable(0);
const totalGold = writable(0);

let previousGold = 0;
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

const tick = throttle(TICK_THROTTLE_WINDOW, (amount) => gain(amount));
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
