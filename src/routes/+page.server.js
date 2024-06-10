import { fail, redirect } from '@sveltejs/kit';
import { fetchUserProfile, fetchWishlist, fetchInProgressHabits, fetchDailyRoutine } from '$lib/utils/api';

export async function load({ cookies }) {
  const token = cookies.get('token');
  let user = null;
  let wishlist = [];
  let wipList = [];
  let dailyRoutine = [];

  if (token) {
    user = await fetchUserProfile(token);
    wishlist = await fetchWishlist(token);
    wipList = await fetchInProgressHabits(token);
    dailyRoutine = await fetchDailyRoutine(token);
  }

  return { user, wishlist, wipList, dailyRoutine, token };
}

export const actions = {
  logout: async ({ cookies }) => {
    cookies.delete('token', { path: '/' });
    throw redirect(303, '/login');
  },
  createHabit: async ({ cookies, request }) => {
    const data = await request.formData();
    const name = data.get('name');
    const status = data.get('status');

    if (!name || !status) {
      return fail(400, { name, status, missing: true });
    }

    const response = await fetch(`http://localhost:8000/api/habits/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${cookies.get('token', { path: '/' })}`,
      },
      body: JSON.stringify({ name, status })
    });

    if (!response.ok) {
      return fail(400, { name, status, incorrect: true });
    }

    throw redirect(303, '/');
  },
};

export const ssr = true;
