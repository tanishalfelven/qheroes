import { derived } from "svelte/store";

import UNLOCKS from "qheroes/shared/data/unlock.js";
import readonly from "qheroes/shared/readonly.js";

import { totalGold } from "./gold.js";

const unlocks = derived(totalGold, ($totalGold) =>
    Object.entries(UNLOCKS)
        .reduce((acc, [id, threshold]) => {
            acc[id] = $totalGold >= threshold;

            return acc;
        }, {})
);

export default readonly(unlocks);
