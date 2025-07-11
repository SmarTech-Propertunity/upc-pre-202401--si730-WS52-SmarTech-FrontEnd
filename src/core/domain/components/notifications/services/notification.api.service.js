const API_URL = import.meta.env.VITE_API_URL;

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

export async function getAllNotifications() {
  const query = `query { allNotifications { id userId type message link isRead } }`;
  const data = await graphqlRequest(query);
  return data.allNotifications;
}

export async function getNotificationById(id) {
  const query = `query($id: Int) { notificationById(id: $id) { id userId type message link isRead } }`;
  const data = await graphqlRequest(query, { id });
  return data.notificationById;
}

export async function createNotification(notification) {
  const mutation = `mutation($userId: Int!, $type: String!, $message: String!, $link: String, $isRead: Boolean) {
    createNotification(userId: $userId, type: $type, message: $message, link: $link, isRead: $isRead) {
      id userId type message link isRead
    }
  }`;
  const data = await graphqlRequest(mutation, notification);
  return data.createNotification;
}

export async function updateNotification(notification) {
  const mutation = `mutation($id: Int!, $type: String, $message: String, $link: String, $isRead: Boolean) {
    updateNotification(id: $id, type: $type, message: $message, link: $link, isRead: $isRead) {
      id userId type message link isRead
    }
  }`;
  const data = await graphqlRequest(mutation, notification);
  return data.updateNotification;
}

export async function deleteNotification(id) {
  const mutation = `mutation($id: Int!) { deleteNotification(id: $id) }`;
  const data = await graphqlRequest(mutation, { id });
  return data.deleteNotification;
}
