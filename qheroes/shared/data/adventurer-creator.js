const ADVENTURERS = {
    goblin_adventurer: { rate: 1 },
};

export default (id) => ({
    id,
    rate: ADVENTURERS[id].rate,
    level: 0,
});

export {
    ADVENTURERS,
};
