import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
  const token = cookies.get('token');
  let user = null;
  let habits = [];

  if (token) {


    // Get User Profile
    const profileResponse = await fetch('http://localhost:8000/api/users/me/', {
      headers: {
        'Authorization': `Token ${token}`,
      },
    });

    if (profileResponse.ok) {
      user = await profileResponse.json();
    } else {
      user = profileResponse;
    }
    

    // Get User Habits
    const habitsResponse = await fetch('http://localhost:8000/api/habits/', {
      headers: {
        'Authorization': `Token ${token}`,
      },
    });

    if (habitsResponse.ok) {
      habits = await habitsResponse.json();
    }  
  }

  return { user, habits, token };
}

/** @type {import('./$types').Actions} */
export const actions = {
  logout: async ({ cookies }) => {
    cookies.delete('token', { path: '/' });
    throw redirect(303, '/login');
  },
};

// Enable server-side rendering for this page
export const ssr = true;
