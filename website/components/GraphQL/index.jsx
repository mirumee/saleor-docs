import React from "react";
import GraphiQL from "graphiql";
import fetch from "isomorphic-fetch";

import "./styles.css";

const fetcher = async params => {
  const data = await fetch("https://demo.saleor.io/graphql/", {
    method: "post",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(params)
  });
  return data.json();
};

const GraphQL = ({ height = 20, query }) => (
  <div className="graphql-example" style={{ height: `${height}rem` }}>
    <GraphiQL fetcher={fetcher} query={query}>
      <GraphiQL.Logo>
        GraphQL Example
      </GraphiQL.Logo>
      <GraphiQL.Toolbar />
    </GraphiQL>
  </div>
);

export default GraphQL;
