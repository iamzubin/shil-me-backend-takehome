const Express = require('express');
const { retrieveSocialEngagementBySlug, retrievePostsBySlug } = require('./controller/firebaseRead');
const { isValid, generateKey } = require('./middleware/middleware');
const app = Express();
const cors = require('cors');
// for localstorage to initiate with the service
let apiKeys = {};


app.use(cors()); // for cors
// api endpoint to generate new api key, this is not rate limited
app.get('/generateKey', (req, res) => {
  try
  {
    let user = req.get("user");
    let key = generateKey(user, apiKeys);
    res.json({ key: key });
  }
  catch(e)
  {
    console.error(e);
    res.json({ error: e.message });
  }
});




// middleware to rate throtte the api
function middleware(req, res, next) {
      try {
        let key = req.get("x-api-key");
        isValid(key, apiKeys);
        next();
      } catch (e) {
        res.json({ error: e.message }); 
      }
  }

// middleware to rate throtte the api
app.use("/api/*",middleware);

// routes are defined here (would move to another file for a bigger project)
app.get('/api/retrievePostsBySlug', retrievePostsBySlug);
app.get('/api/retrieveSocialEngagementBySlug', retrieveSocialEngagementBySlug);
app.get('/', (req, res) => {
    res.json({test: 'Hello World!'});
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');  
});
