import { Machine } from "xstate";
import c from "qheroes/shared/component.js";
import Home from "qheroes/home/home.svelte";
import Store from "qheroes/store/store.svelte";
import Party from "qheroes/party/party.svelte";
import Adventurer from "qheroes/adventurer/adventurer.svelte";

export default Machine({
    id: "qheroes",
    initial: "home",

    states: {
        home: c(Home, {
            initial: "none",

            on: {
                STORE: ".store",
                PARTY: ".party",
                VIEWADVENTURER: ".adventurer",
                NONE: ".none",
            },

            // modals are just child states
            states: {
                none: {},
                // have events work as toggles by default
                store: c(Store, { on: { STORE: "none" } }),
                party: c(Party, { on: { PARTY: "none" } }),
                adventurer: c({
                    load: (ctx, { UID }) => [Adventurer, { UID }],
                }),
            }
        }),
    },
});
