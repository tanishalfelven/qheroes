import { addAdventurer } from "qheroes/shared/stores/adventurers.js";
import { pay } from "qheroes/shared/stores/gold.js";

const PURCHASE = {
    adventurer: addAdventurer,
};

export default ({ cost, type, id }) => pay(cost, () => PURCHASE[type](id));
