/**
 * File used to quick test the `getEntries` function of
 * `DictionaryEnsembl.js`
 */

const DictionaryEnsembl = require('../src/DictionaryEnsembl');

const dict = new DictionaryEnsembl({log: true});

dict.getEntries({
  filter: { id: [
    'https://www.ensembl.org/ENSG00000142208',
    'https://www.ensembl.org/ENSG00000185686',
    'https://www.ensembl.org/ENSG00000141510'
  ]},
  sort: 'id',
  page: 1,
  perPage: 3
}, (err, res) => {
  if (err) console.log(JSON.stringify(err, null, 4));
  else {
    console.log(JSON.stringify(res, null, 4));
    console.log('\n#Results: ' + res.items.length);
  }
});
