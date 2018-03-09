// DO WHATEVER YOU WANT HERE
const createEnumerableProperty = (x) => {
    return x;
};
const createNotEnumerableProperty = (x) => {
    Object.defineProperty(Object.prototype, x, {
        enumerable: false,
        configurable: false,
        writable: false,
        value: 'value'
    });
    return x;
};
const createProtoMagicObject = () => {
};
const incrementor = () => {
};
const asyncIncrementor = () => {
};
const createIncrementer = () => {
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (x) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x)
        }, 1000);
    })
};
const getDeepPropertiesCount = () => {
};
const createSerializedObject = () => {
    return Object(JSON.stringify(this))
};
const toBuffer = () => {
};
const sortByProto = (x) => {
    return x.sort()
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;