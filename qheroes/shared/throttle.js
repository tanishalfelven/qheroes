export default (time, func) => {
    let throttling;

    return (...args) => {
        if (throttling) {
            return;
        }

        func(...args);

        throttling = true;
        setTimeout(() => throttling = false, time);
    };
};
