export default (component, node = {}) => {
    // load key is a shorthand
    if (component.load) {
        node.meta = { load: component.load };

        return node;
    }

    node.meta = { component };

    return node;
};
