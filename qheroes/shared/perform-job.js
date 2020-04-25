const PERFORMANCE_XP_VALUE = 1;

export default (adventurer) => {
    adventurer.xp += PERFORMANCE_XP_VALUE;

    if (adventurer.xp >= adventurer.maxXp) {
        adventurer.xp = 0;
        adventurer.maxXp *= 2;

        adventurer.rate += 1;
        adventurer.level += 1;;
    }

    return adventurer;
};
