require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000


githubData={
  "login": "GurjotKaur",
  "id": 23338703,
  "node_id": "MDQ6VXNlcjIzMzM4NzAz",
  "avatar_url": "https://avatars.githubusercontent.com/u/23338703?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/GurjotKaur",
  "html_url": "https://github.com/GurjotKaur",
  "followers_url": "https://api.github.com/users/GurjotKaur/followers",
  "following_url": "https://api.github.com/users/GurjotKaur/following{/other_user}",
  "gists_url": "https://api.github.com/users/GurjotKaur/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/GurjotKaur/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/GurjotKaur/subscriptions",
  "organizations_url": "https://api.github.com/users/GurjotKaur/orgs",
  "repos_url": "https://api.github.com/users/GurjotKaur/repos",
  "events_url": "https://api.github.com/users/GurjotKaur/events{/privacy}",
  "received_events_url": "https://api.github.com/users/GurjotKaur/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 0,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2016-11-08T14:00:33Z",
  "updated_at": "2022-12-20T18:41:46Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Gurjotdotcom');
})

app.get('/github', (req, res) => {
    res.json(githubData);
})

app.get('/youtube',(req,res)=>{
    res.send('<h1>Please login<h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
