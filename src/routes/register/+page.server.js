import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
  const token = cookies.get('token');
  let user = null;

  if (token) {
    const response = await fetch('https://api.example.com/api/profile/', {
      headers: {
        'Authorization': `Token ${token}`,
      },
    });

    if (response.ok) {
      user = await response.json();
    }
  }

  return { user };
}

/** @type {import('./$types').Actions} */
export const actions = {
  register: async ({ request }) => {
    const data = await request.formData();
    const email = data.get('email');
    const username = data.get('username');
    const password = data.get('password');

    if (!email || !username || !password) {
      return fail(400, { email, username, password, missing: true });
    }

    const response = await fetch('https://api.example.com/api/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, username, password }),
    });

    if (!response.ok) {
      return fail(400, { email, username, registrationFailed: true });
    }

    // Redirect to login page after successful registration
    throw redirect(303, '/login');
  },
};

// Enable server-side rendering for this page
export const ssr = true;
