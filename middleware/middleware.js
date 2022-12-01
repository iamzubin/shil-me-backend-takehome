// middleware to rate throtte the api

// constants for rate limiting
const oneUnitTime = 1000 * 30;
const maxRequests = 10;

// function to make a random hash
function makeRandomHash() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

//function to generate new API keys
function generateKey(user, apiKeys) {
  let key = makeRandomHash();
  console.log("generated key : ", key);

  //share object so it can be reached by either key or user
  //terrible idea, but I didn't want to make a database for this.
  //ideally we'd use a local database to store the keys so the read is fast

  apiKeys[key] = {
    checked: Date.now(),
    uses: 0,
  };
  return key;
}

function isValid(key, apiKeys) {
  if (!apiKeys[key]) throw Error("invalid key");

  if (Date.now() - apiKeys[key].checked >= oneUnitTime) {
    apiKeys[key].uses = 0;
    apiKeys[key].checked = Date.now();
  }

  if (apiKeys[key].uses >= maxRequests) throw Error("Rate limit exceeded");

  apiKeys[key].uses++;
}

module.exports = { generateKey, isValid };
