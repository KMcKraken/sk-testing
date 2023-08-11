import axios from 'axios';

const API_URL = 'http://localhost:1337/graphql';

export async function fetchGraphQL(query, variables = {}) {
  const response = await axios.post(API_URL, {
    query,
    variables,
  });

  if (response.status !== 200) {
    throw new Error(`GraphQL request failed with status ${response.status}`);
  }

  return response.data;
}