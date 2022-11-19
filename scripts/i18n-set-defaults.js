#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

/**
 * Loop on all translation files for the default local,
 * and set the default translation value to be the key.
 */

const fs = require('fs');
const path = require('path');

const defaultLocal = 'en';
const defaultLocalDir = path.resolve(__dirname + '/../locales' + '/' + defaultLocal);

// defatulValue returns a default valuse if the translation value is not set
function defatulValue(key, value) {
  return value === '' ? key : value;
}

// loop on all translation files in default local directory
fs.readdir(defaultLocalDir, function (err, files) {
  if (err) {
    console.error('Could not list the translation files.', err);
    process.exit(1);
  }

  files.forEach(function (file) {
    const fileName = path.resolve(defaultLocalDir, file);

    // read translation file
    fs.readFile(fileName, 'utf8', function (err, data) {
      if (err) {
        console.error('Could not parse the translation file.', err);
        process.exit(1);
      }

      // loop on all translation key and values
      // and set the defautl where value is missing
      const dataObject = JSON.parse(data);
      Object.keys(dataObject).forEach(function (key) {
        dataObject[key] = defatulValue(key, dataObject[key]);
      });

      // write translation file
      const dataString = JSON.stringify(dataObject, null, 2);
      fs.writeFile(fileName, dataString, (err) => {
        if (err) {
          console.error('Could write the translation file.', err);
          process.exit(1);
        }
      });
    });
  });
});
