import { fail, redirect } from '@sveltejs/kit';
import { fetchUserProfile, fetchWishlist, fetchInProgressHabits, fetchDailyRoutine } from '$lib/utils/api';
import { createHabit } from '$lib/utils/habitActions';

export async function load({ cookies }) {
  const token = cookies.get('token');
//   let user = null;
  let wishlist = [];

  if (token) {
    // user = await fetchUserProfile(token);
    wishlist = await fetchWishlist(token);
  }

  return { wishlist, token };
}

export const actions = {
  createHabit,
};