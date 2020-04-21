const DEV_LOCAL = "localhost:10001";

const { location } = window;

const flags = new URLSearchParams(location.search);

export default {
    DEV: DEV_LOCAL === location.host,
    has: (s) => flags.has(s),
    get: (s) => flags.get(s),
};
