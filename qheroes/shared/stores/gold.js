import { writable, get } from "svelte/store";
import readonly from "qheroes/shared/readonly.js";
import flags from "qheroes/shared/flags.js";

const multiplier = 1;
const GAIN_TTL = 5000;
const START_GOLD = flags.DEV && flags.has("gold") ?
    Number.parseInt(flags.get("gold"), 10) :
    0;
let GAIN_ID = 0;

const gold = writable(START_GOLD);
const totalGold = writable(START_GOLD);
const gains = writable([]);

let previousGold = START_GOLD;
gold.subscribe(($gold) => {
    const diff = $gold - previousGold;

    if (diff > 0) {
        totalGold.update(($totalGold) => $totalGold + diff);
    }

    previousGold = $gold;
});

const gain = (amount, source) => {
    gold.update(($gold) => $gold + amount);

    const now = Date.now();

    gains.update(($gains) => {
        $gains.push({
            amount,
            source,
            from: Date.now(),
            id: GAIN_ID++,
        });

        return $gains.filter(({ from }) => (now - from) < GAIN_TTL);
    });
};

const tick = (amount) => gain(amount, "adventurer");
const mine = () => gain(multiplier, "user");

const pay = (amount, c) => {
    if (get(gold) >= amount) {
        gold.update(($gold) => $gold - amount);

        c();
    }
};

const readonlyTotalGold = readonly(totalGold);
const readonlyGains = readonly(gains);

export default readonly(gold);

export {
    mine,
    pay,
    tick,

    readonlyGains as gains,
    readonlyTotalGold as totalGold,
};
