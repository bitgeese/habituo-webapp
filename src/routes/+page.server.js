import { redirect } from '@sveltejs/kit';
import { fetchUserProfile, fetchDailyRoutine } from '$lib/utils/api';
import { createHabit, workOn } from '$lib/utils/habitActions';

export async function load({ cookies }) {
  const token = cookies.get('token');
  let user = null;
  let dailyRoutine = [];

  if (token) {
    user = await fetchUserProfile(token);
    dailyRoutine = await fetchDailyRoutine(token);
  }

  return { user, dailyRoutine, token };
}

export const actions = {
  logout: async ({ cookies }) => {
    cookies.delete('token', { path: '/' });
    throw redirect(303, '/login');
  },
  createHabit,
  workOn,
};

export const ssr = true;
