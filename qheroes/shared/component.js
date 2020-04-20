export default (component, node = {}) => {
    node.meta = { component };

    return node;
};
