const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

async function graphqlRequest(query, variables = {}) {
  const res = await fetch(`${API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0].message);
  return json.data;
}

export async function getAllAcquirers() {
  const query = `query { allAcquirers { id userId preferences creditEvaluation contactHistory } }`;
  const data = await graphqlRequest(query);
  return data.allAcquirers;
}

export async function getAcquirerById(id) {
  const query = `query($id: Int) { acquirerById(id: $id) { id userId preferences creditEvaluation contactHistory } }`;
  const data = await graphqlRequest(query, { id });
  return data.acquirerById;
}

export async function createAcquirer(acquirer) {
  const mutation = `mutation($userId: Int!, $preferences: String, $creditEvaluation: String, $contactHistory: [Int]) {
    createAcquirer(userId: $userId, preferences: $preferences, creditEvaluation: $creditEvaluation, contactHistory: $contactHistory) {
      id userId preferences creditEvaluation contactHistory
    }
  }`;
  const data = await graphqlRequest(mutation, acquirer);
  return data.createAcquirer;
}

export async function updateAcquirer(acquirer) {
  const mutation = `mutation($id: Int!, $preferences: String, $creditEvaluation: String, $contactHistory: [Int]) {
    updateAcquirer(id: $id, preferences: $preferences, creditEvaluation: $creditEvaluation, contactHistory: $contactHistory) {
      id userId preferences creditEvaluation contactHistory
    }
  }`;
  const data = await graphqlRequest(mutation, acquirer);
  return data.updateAcquirer;
}

export async function deleteAcquirer(id) {
  const mutation = `mutation($id: Int!) { deleteAcquirer(id: $id) }`;
  const data = await graphqlRequest(mutation, { id });
  return data.deleteAcquirer;
}
