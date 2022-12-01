const firebaseApp = require("../config/database.config");
const { getFirestore, collection, getDocs } = require("firebase/firestore");
// Retrieve all Notes from the database.
exports.findAll = (req, res) => {};
// Find a single Note with an id

exports.retrieveSocialEngagementBySlug = (req, res) => {
  const { slug, platform, limit, dateStart, dateEnd, offset } = req.query;
  if (!slug || !platform || !limit || !dateStart || !dateEnd || !offset) {
    console.log({
      slug : slug,
      platform : platform,
      limit : limit,
      dateStart : dateStart,
      dateEnd : dateEnd,
      offset : offset 
    })
    res.json({ error: "Missing parameters" });
  } else {
    firebaseApp
      .DBretrieveSocialEngagementBySlug({
        slug: slug,
        platform: platform,
        limit: parseInt(limit),
        dateStart: new Date(dateStart),
        dateEnd: new Date(dateEnd),
        offset: parseInt(offset),
      })
      .then((snapshot) => {
        res.json(snapshot);
      });
  }
};


exports.retrievePostsBySlug = (req, res) => {
  const { slug, platform, limit, dateStart, dateEnd, offset } = req.query;
  if (!slug || !platform || !limit || !dateStart || !dateEnd || !offset) {
    console.log({
      slug : slug,
      platform : platform,
      limit : limit,
      dateStart : dateStart,
      dateEnd : dateEnd,
      offset : offset 
    })
    res.json({ error: "Missing parameters" });
  } else {
    firebaseApp
      .DBretrievePostsBySlug({
        slug: slug,
        platform: platform,
        limit: parseInt(limit),
        dateStart: new Date(dateStart),
        dateEnd: new Date(dateEnd),
        offset: parseInt(offset),
      })
      .then((snapshot) => {
        res.json(snapshot);
      });
  }
};

