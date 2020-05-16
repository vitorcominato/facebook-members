module.exports = {
    "extends": "airbnb",
    "rules": {
      "react/prop-types": "off",
      "linebreak-style": "off",
      "react/no-did-update-set-state": "off",
      "jsx-a11y/label-has-associated-control": "off",
      "jsx-a11y/label-has-for": "off",
    },
    "globals": {
      "window": true,
      "navigator": true,
      "fetch": true,
      "localStorage": true,
      "document": true,
      "isNaN": true,
      "FormData": true,
      "FileReader": true,
      "atob": true,
      "Blob": true,
    }
  };