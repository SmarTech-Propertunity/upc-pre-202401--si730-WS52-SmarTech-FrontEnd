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

export async function getAllAgents() {
  const query = `query { allAgents { id userId phone whatsapp address schedule rating reviews salesHistory responseSpeed } }`;
  const data = await graphqlRequest(query);
  return data.allAgents;
}

export async function getAgentById(id) {
  const query = `query($id: Int) { agentById(id: $id) { id userId phone whatsapp address schedule rating reviews salesHistory responseSpeed } }`;
  const data = await graphqlRequest(query, { id });
  return data.agentById;
}

export async function createAgent(agent) {
  const mutation = `mutation($userId: Int!, $phone: String, $whatsapp: String, $address: String, $schedule: String, $rating: Float, $reviews: [String], $salesHistory: [Int], $responseSpeed: Float) {
    createAgent(userId: $userId, phone: $phone, whatsapp: $whatsapp, address: $address, schedule: $schedule, rating: $rating, reviews: $reviews, salesHistory: $salesHistory, responseSpeed: $responseSpeed) {
      id userId phone whatsapp address schedule rating reviews salesHistory responseSpeed
    }
  }`;
  const data = await graphqlRequest(mutation, agent);
  return data.createAgent;
}

export async function updateAgent(agent) {
  const mutation = `mutation($id: Int!, $phone: String, $whatsapp: String, $address: String, $schedule: String, $rating: Float, $reviews: [String], $salesHistory: [Int], $responseSpeed: Float) {
    updateAgent(id: $id, phone: $phone, whatsapp: $whatsapp, address: $address, schedule: $schedule, rating: $rating, reviews: $reviews, salesHistory: $salesHistory, responseSpeed: $responseSpeed) {
      id userId phone whatsapp address schedule rating reviews salesHistory responseSpeed
    }
  }`;
  const data = await graphqlRequest(mutation, agent);
  return data.updateAgent;
}

export async function deleteAgent(id) {
  const mutation = `mutation($id: Int!) { deleteAgent(id: $id) }`;
  const data = await graphqlRequest(mutation, { id });
  return data.deleteAgent;
}
