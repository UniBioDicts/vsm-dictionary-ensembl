/**
 * File used to quick test the `getEntryMatchesForString` function of
 * `DictionaryEnsembl.js`
 */

const DictionaryEnsembl = require('../src/DictionaryEnsembl');

const dict = new DictionaryEnsembl({log: true});

dict.getEntryMatchesForString('tp53', { page: 1, perPage: 20 },
  (err, res) => {
    if (err) console.log(JSON.stringify(err, null, 4));
    else {
      console.log(JSON.stringify(res, null, 4));
      console.log('\n#Results: ' + res.items.length);
    }
  }
);
