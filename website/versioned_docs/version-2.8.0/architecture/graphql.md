---
id: graphql
title: GraphQL API (Beta)
---

:::note
The GraphQL API is in the early version. It is not yet fully optimized against database queries and some mutations or queries may be missing.
:::

Saleor provides a GraphQL API which allows to query and modify the shop’s data in an efficient and flexible manner. You can [preview it here](https://demo.saleor.io/graphql/).

Learn more about GraphQL language and its concepts on the [official website](https://graphql.org/).

## Endpoint

API is available under `/graphql` endpoint. Requests must be sent using HTTP `POST` method and `application/json` content type.

With the `DEBUG=True` setting enabled, Saleor exposes an interactive GraphQL editor under `/graphql`, that allows accessing the API from the browser.

## Example Query

Querying for data in GraphQL can be very easy with tool GraphiQL, which can be used from a web browser.

Here is an example query that fetches three products:

```graphql
query {
  products(first: 3) {
    edges {
      node {
        name
        price {
          amount
        }
      }
    }
  }
}
```

Server will return following JSON:

```json
{
  "data": {
    "products": {
      "edges": [
        {
          "node": {
            "name": "Ford Inc",
            "price": {
              "amount": 64.98
            }
          }
        },
        {
          "node": {
            "name": "Rodriguez Ltd",
            "price": {
              "amount": 18.4
            }
          }
        },
        {
          "node": {
            "name": "Smith Inc",
            "price": {
              "amount": 48.66
            }
          }
        }
      ]
    }
  }
}
```

## Authorization

By default, you can query for public data such as published products or pages. To fetch protected data like orders or users, you need to authorize your access. Saleor API uses a [JWT token](https://jwt.io/) authentication mechanism. Once you create a token, you have to include it as a header with each GraphQL request.

The authorization header has the following format:

```
Authorization: JWT token
```

Create a new JWT token with the tokenCreate mutation:

```graphql
mutation {
  tokenCreate(email: "admin@example.com", password: "admin") {
    token
  }
}
```

Verification and refreshing the token is straightforward:

```graphql
mutation tokenVerify($token: String!) {
  verifyToken(token: $token) {
    payload
  }
}
```

```graphql
mutation tokenRefresh($token: String!) {
  tokenRefresh(token: $token) {
    token
    payload
  }
}
```
