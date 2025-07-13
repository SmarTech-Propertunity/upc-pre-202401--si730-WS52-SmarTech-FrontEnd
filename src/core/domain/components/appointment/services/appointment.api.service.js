const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

async function graphqlRequest(query, variables = {}) {
  const res = await fetch(`${API_URL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0].message);
  return json.data;
}

// Appointments
export async function getAllAppointments() {
  const query = `
    query {
      allAppointments {
        id agentId acquireId date propertyId place
      }
    }
  `;
  return (await graphqlRequest(query)).allAppointments;
}

export async function getAppointmentById(id) {
  const query = `
    query($id: Int) {
      appointmentById(id: $id) {
        id agentId acquireId date propertyId place
      }
    }
  `;
  return (await graphqlRequest(query, { id })).appointmentById;
}

export async function createAppointment(input) {
  const query = `
    mutation($agentId: Int!, $acquireId: Int!, $date: String!, $propertyId: Int!, $place: String!) {
      createAppointment(agentId: $agentId, acquireId: $acquireId, date: $date, propertyId: $propertyId, place: $place) {
        id agentId acquireId date propertyId place
      }
    }
  `;
  return (await graphqlRequest(query, input)).createAppointment;
}

export async function updateAppointment(id, input) {
  const query = `
    mutation($id: Int!, $agentId: Int, $acquireId: Int, $date: String, $propertyId: Int, $place: String) {
      updateAppointment(id: $id, agentId: $agentId, acquireId: $acquireId, date: $date, propertyId: $propertyId, place: $place) {
        id agentId acquireId date propertyId place
      }
    }
  `;
  return (await graphqlRequest(query, { id, ...input })).updateAppointment;
}

export async function deleteAppointment(id) {
  const query = `
    mutation($id: Int!) {
      deleteAppointment(id: $id)
    }
  `;
  return (await graphqlRequest(query, { id })).deleteAppointment;
}

