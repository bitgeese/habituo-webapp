import { fail, redirect } from '@sveltejs/kit';
import { fetchUserProfile, fetchWishlist, fetchInProgressHabits, fetchDailyRoutine } from '$lib/utils/api';
import { createHabit, workOn } from '$lib/utils/habitActions';

export async function load({ cookies }) {
  const token = cookies.get('token');
//   let user = null;
  let wishlist = [];
  let dailyRoutine = [{'name': 'test'}]

  if (token) {
    // user = await fetchUserProfile(token);
    wishlist = await fetchWishlist(token);
    dailyRoutine = await fetchDailyRoutine(token);
  }

  return { wishlist, token, dailyRoutine };
}

export const actions = {
  createHabit,
  workOn,
};