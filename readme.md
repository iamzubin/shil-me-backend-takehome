## Title


``` command 
curl --location --request GET 'http://localhost:3001/api/retrievePostsBySlug?slug=post-1&platform=twitter&limit=0&dateStart=2000-01-01&dateEnd=2023-01-01&offset=1' \
--header 'x-api-key: <APIKEYHERE>'


curl --location --request GET 'http://localhost:3001/api/retrieveSocialEngagementBySlug?slug=post-1&platform=discord&limit=0&dateStart=2000-01-01&dateEnd=2023-01-01&offset=1' \
--header 'x-api-key: <APIKEYHERE>'

```