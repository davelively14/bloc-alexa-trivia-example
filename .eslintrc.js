module.exports = {
    "env": {
        "node": true,
        "es6": true
    },
    "extends": [
      "eslint:recommended"
    ],
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console":0,
        "no-unused-vars": ["error", {"argsIgnorePattern": "^_"}]
    }
};
