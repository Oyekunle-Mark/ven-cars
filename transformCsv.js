/* eslint-disable no-console */
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('./csv/car_ownsers_data.csv'),
  crlfDelay: Infinity,
});

/**
 * Converts and cleans the csv file to a JSON one and writes the output to a file
 */
async function readAndWriteLines() {
  const carOwnersRecord = [];
  let position = 0;

  // eslint-disable-next-line no-restricted-syntax
  for await (const line of rl) {
    // writes 9000 rows only!
    if (position === 9000) {
      break;
    }

    if (position !== 0) {
      const lineArr = line.split(',');

      carOwnersRecord.push({
        first_name: lineArr[1],
        last_name: lineArr[2],
        email: lineArr[3],
        country: lineArr[4],
        car_model: lineArr[5],
        car_model_year: lineArr[6],
        car_color: lineArr[7],
        gender: lineArr[8],
        job_title: lineArr[9],
        bio: lineArr
          .slice(10)
          .join(',')
          .replace(/"/g, ''),
      });
    }

    position += 1;
  }

  fs.writeFile(
    './database/seedStore/carOwners.js',
    JSON.stringify(carOwnersRecord, null, 2),
    'utf-8',
    // eslint-disable-next-line consistent-return
    err => {
      if (err) {
        return console.log(err);
      }

      console.log('The file is saved and ready for action!');
    },
  );
}

readAndWriteLines();
