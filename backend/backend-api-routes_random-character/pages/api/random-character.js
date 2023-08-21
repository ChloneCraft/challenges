import Chance from "chance";

export default function handler(req, res) {
  const chance = new Chance();
  const twitter = chance.twitter();
  const geohash = chance.geohash();

  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    twitter: twitter,
    geohash: geohash,
  };
  res.status(200).json(character);
}
