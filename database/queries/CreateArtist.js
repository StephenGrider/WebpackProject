const _ = require('lodash');
const Artist = require('../seeds/artist');
const db = require('./db');

/**
 * Create a single artist in the artist collection.
 * @param {object} artistProps - Object containing a name, age, yearsActive, and genre
 * @return {promise} A promise that resolves with the Artist that was created
 */
module.exports = (artistProps) => {
  const artist = { _id: _.uniqueId(), ...artistProps };
  db.push(artist);

  return new Promise((resolve, reject) => {
    resolve(artist);
  });
};
