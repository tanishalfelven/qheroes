import { Machine } from "xstate";
import c from "qheroes/shared/component.js";
import Home from "qheroes/home/home.svelte";
import Store from "qheroes/store/store.svelte";

export default Machine({
    initial: "home",

    states: {
        home: c(Home, {
            initial: "none",

            on: {
                STORE: ".store",
                NONE: ".none",
            },

            // modals are just child states
            states: {
                none: {},
                store: c(Store),
            }
        }),
    },
});
