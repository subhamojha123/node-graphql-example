# GraphQL with Node.js
A sample application to demonstrate GraphQL integration with Node.js

## How to start

### install dependencies

```
npm install
```
### start server
```
node server.js
```
Your graphql server run on: [localhost:4000/graphiql](http://localhost:4000/graphiql)

**Example GraphQL query:**
```
query {
  allUser {
    id
    name    
  }
}
```

**Example response:**
```json
{
  "data": {
    "allUser": [
      {
        "id": "1",
        "name": "john"
      }
    ]
  }
}
```
## Used technologies

* GraphQL
* Node.js
* Express