// take the full 'countries.geojson' and split it up into individual countries

const fs = require('fs');
const allCountries = JSON.parse(fs.readFileSync('countries.geojson'));

console.log(allCountries);

for(const feature of allCountries.features){
  const name = feature.properties.ADMIN;
  
  fs.writeFileSync(`${name}.json`,JSON.stringify({ type: 'FeatureCollection', features: [feature] }))
}