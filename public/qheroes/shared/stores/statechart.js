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

export {
    readonlyTree as tree,

    send,
};
