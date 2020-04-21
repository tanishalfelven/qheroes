import { writable } from "svelte/store";
import { interpret } from "xstate";
import ComponentTree from "xstate-component-tree";

import readonly from "qheroes/shared/readonly.js";

import QheroesStatechart from "qheroes/statechart/qheroes.machine.js";

const service = interpret(QheroesStatechart);

const tree = writable([]);

new ComponentTree(service, tree.set);

service.start();

const readonlyTree = readonly(tree);
const send = service.send;

const matches = (path) => {
    const states = path.split(".");

    let current = service.state.value;

    return states.every((state) => {
        if (current === state) {
            return true;
        }

        if (!current[state]) {
            return false;
        }

        current = current[state];

        return true;
    });
};

const matching = writable(matches);
const readonlyMatching = readonly(matching);

service.onTransition(() => {
    matching.set(matches);
});

export {
    readonlyTree as tree,

    send,
    readonlyMatching as matches,
};
