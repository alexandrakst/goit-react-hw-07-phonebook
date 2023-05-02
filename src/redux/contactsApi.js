import axios from 'axios';

axios.defaults.baseURL = 'https://644f0ae64e86e9a4d80547e0.mockapi.io/contacts';

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function addContact({ name, phone }) {
  const { data } = await axios.post(`/contacts`, { name, phone });
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
