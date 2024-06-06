import { fail, redirect } from '@sveltejs/kit';

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
  createHabit: async ({ cookies, request, url }) => {
    const data = await request.formData();
    const name = data.get('name');

    if (!name) {
      return fail(400, { name, missing: true });
    }

    const response = await fetch(`http://localhost:8000/api/habits/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${cookies.get('token', { path: '/' })}`,
      },
      body: JSON.stringify({name})
    });

    if (!response.ok) {
      return fail(400, { name, incorrect: true });
    }

    // const result = await response.json();

    throw redirect(303, '/');
  },
  
};

// Enable server-side rendering for this page
export const ssr = true;
