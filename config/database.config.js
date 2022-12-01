const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

var serviceAccount = require("../key.json");
const databaseName = "posts";

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

const DBretrieveSocialEngagementBySlug = async (requestData) => {
  const { slug, platform, limit, dateStart, dateEnd, offset } = requestData;
  var returnData = [];
  const docRef = await db
    .collection(databaseName)
    .where("postDate", ">=", dateStart)
    .where("postDate", "<=", dateEnd)
    .limit(limit)
    .offset(offset)
    .get();
  
  docRef.forEach((doc) => {
    returnData.push({
      id: doc.id,
      data: doc.data(),
    });
  });
  return returnData;
};

const DBretrievePostsBySlug = async (requestData) => {
  const { slug, platform, limit, dateStart, dateEnd, offset } = requestData;
  var returnData = [];
  const docRef = await db
    .collection(databaseName)
    .where("postDate", ">=", dateStart)
    .where("postDate", "<=", dateEnd)
    .limit(limit)
    .offset(offset)
    .get();
  
  docRef.forEach((doc) => {
    returnData.push({
      id: doc.id,
      data: doc.data(),
    });
  });
  return returnData;
};


exports.DBretrieveSocialEngagementBySlug = DBretrieveSocialEngagementBySlug;
exports.DBretrievePostsBySlug = DBretrievePostsBySlug;