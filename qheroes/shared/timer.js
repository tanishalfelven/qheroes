export default (time, c) => {
    let i = 0;

    const id = setInterval(() => c(i++), time);

    return () => clearInterval(id);
};
