import { fetchUserProfile, fetchInProgressHabits } from '$lib/utils/api';
import { createHabit, workOn } from '$lib/utils/habitActions';

export async function load({ cookies }) {
  const token = cookies.get('token');
//   let user = null;
  let wipList = [];

  if (token) {
    // user = await fetchUserProfile(token);
    wipList = await fetchInProgressHabits(token);
  }

  return { wipList, token };
}

export const actions = {
  createHabit,
  workOn
};