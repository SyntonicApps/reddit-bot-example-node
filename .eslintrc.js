
module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "google",
    "rules": {
        "comma-dangle": "off",
        "indent": ["error", 4],
        "max-len": ["error", 100],
        "no-undef": "error",
        "no-use-before-define": "off",
        "object-curly-spacing": ["error", "always"],
        "one-var": "off"
    },
    "parserOptions": {
        "ecmaVersion": 8,
        "sourceType": "module",
    }
};
