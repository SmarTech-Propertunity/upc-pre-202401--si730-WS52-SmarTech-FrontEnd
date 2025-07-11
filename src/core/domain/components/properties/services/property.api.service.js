const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

async function graphqlRequest(query, variables = {}) {
  const res = await fetch(`${API_URL}`, {
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

export async function getAllProperties() {
  const query = `query {
    allProperties {
      id
      title
      description
      price
      location
      dimensions
      rooms
      features
      images
      agentId
      metrics { 
      views
      clicks
      contactRequests
    }
      createdAt
      isActive
    }
  }`;
  const data = await graphqlRequest(query);
  // Fix: features e images siempre array
  return data.allProperties.map(p => ({
    ...p,
    features: Array.isArray(p?.features) ? p.features : [],
    images: Array.isArray(p?.images) ? p.images : []
  }));
}

export async function getPropertyById(id) {
  const query = `query($id: Int) { propertyById(id: $id) { id title description price location dimensions rooms features images agentId metrics { views clicks contactRequests } isActive } }`;
  const data = await graphqlRequest(query, { id });
  return data.propertyById;
}

export async function createProperty(property) {
  const mutation = `mutation($title: String!, $description: String!, $price: Float!, $location: String!, $dimensions: String, $rooms: Int, $features: [String], $images: [String], $agentId: Int!, $metrics: String, $isActive: Boolean) {
    createProperty(title: $title, description: $description, price: $price, location: $location, dimensions: $dimensions, rooms: $rooms, features: $features, images: $images, agentId: $agentId, metrics: $metrics, isActive: $isActive) {
      id title description price location dimensions rooms features images agentId metrics isActive
    }
  }`;
  const data = await graphqlRequest(mutation, property);
  return data.createProperty;
}

export async function updateProperty(property) {
  const mutation = `mutation($id: Int!, $title: String, $description: String, $price: Float, $location: String, $dimensions: String, $rooms: Int, $features: [String], $images: [String], $agentId: Int, $metrics: String, $isActive: Boolean) {
    updateProperty(id: $id, title: $title, description: $description, price: $price, location: $location, dimensions: $dimensions, rooms: $rooms, features: $features, images: $images, agentId: $agentId, metrics: $metrics, isActive: $isActive) {
      id title description price location dimensions rooms features images agentId metrics isActive
    }
  }`;
  const data = await graphqlRequest(mutation, property);
  return data.updateProperty;
}

export async function deleteProperty(id) {
  const mutation = `mutation($id: Int!) { deleteProperty(id: $id) }`;
  const data = await graphqlRequest(mutation, { id });
  return data.deleteProperty;
}
