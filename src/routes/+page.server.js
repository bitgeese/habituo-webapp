import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
  const token = cookies.get('token');
  let user = null;
  let wishlist = [];
  let inProgressList = [];
  let dailyRoutine = [];

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
    

    // Get User Wishlist
    const wishlistResponse = await fetch('http://localhost:8000/api/habits/wishlist/', {
      headers: {
        'Authorization': `Token ${token}`,
      },
    });

    if (wishlistResponse.ok) {
      wishlist = await wishlistResponse.json();
    }  
    // Get in progress habits
    const habitWipResponse = await fetch('http://localhost:8000/api/habits/in_progress/', {
      headers: {
        'Authorization': `Token ${token}`,
      },
    });

    if (habitWipResponse.ok) {
      inProgressList = await habitWipResponse.json();
    }
    // Get in progress habits
    const routineResponse = await fetch('http://localhost:8000/api/habits/daily_routine/', {
      headers: {
        'Authorization': `Token ${token}`,
      },
    });

    if (routineResponse.ok) {
      dailyRoutine = await routineResponse.json();
    }  
  }

  return { user, wishlist, inProgressList,dailyRoutine, token };
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
      body: JSON.stringify({name, status})
    });

    if (!response.ok) {
      return fail(400, { name, status, incorrect: true });
    }

    // const result = await response.json();

    throw redirect(303, '/');
  },
  
};

// Enable server-side rendering for this page
export const ssr = true;
