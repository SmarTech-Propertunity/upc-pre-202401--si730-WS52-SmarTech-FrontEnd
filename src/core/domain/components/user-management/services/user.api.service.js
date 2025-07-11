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

export async function getAllUsers() {
  const query = `query { allUsers { id name email civilStatus profilePhoto role isActive } }`;
  const data = await graphqlRequest(query);
  return data.allUsers;
}

export async function getUserById(id) {
  const query = `query($id: Int) { userById(id: $id) { id name email civilStatus profilePhoto role isActive } }`;
  const data = await graphqlRequest(query, { id });
  return data.userById;
}

export async function createUser(user) {
  const mutation = `mutation($name: String!, $email: String!, $password: String!, $civilStatus: String, $profilePhoto: String, $role: String, $isActive: Boolean) {
    createUser(name: $name, email: $email, password: $password, civilStatus: $civilStatus, profilePhoto: $profilePhoto, role: $role, isActive: $isActive) {
      id name email civilStatus profilePhoto role isActive
    }
  }`;
  const data = await graphqlRequest(mutation, user);
  return data.createUser;
}

export async function updateUser(user) {
  const mutation = `mutation($id: Int!, $name: String, $email: String, $password: String, $civilStatus: String, $profilePhoto: String, $role: String, $isActive: Boolean) {
    updateUser(id: $id, name: $name, email: $email, password: $password, civilStatus: $civilStatus, profilePhoto: $profilePhoto, role: $role, isActive: $isActive) {
      id name email civilStatus profilePhoto role isActive
    }
  }`;
  const data = await graphqlRequest(mutation, user);
  return data.updateUser;
}

export async function deleteUser(id) {
  const mutation = `mutation($id: Int!) { deleteUser(id: $id) }`;
  const data = await graphqlRequest(mutation, { id });
  return data.deleteUser;
}
export async function loginUser({ email, password }) {
  const mutation = `
    mutation($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        id
        name
        email
        civilStatus
        profilePhoto
        role
        isActive
      }
    }
  `;
  const data = await graphqlRequest(mutation, { email, password });
  return data.login;
}