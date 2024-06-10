import { fetchUserProfile } from '$lib/utils/api';

export async function load({ cookies }) {
  const token = cookies.get('token');
  let user = null;

  if (token) {
    user = await fetchUserProfile(token);
  }

  return { user };
}