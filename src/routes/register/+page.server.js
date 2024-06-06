import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
  register: async ({ request }) => {
    const data = await request.formData();
    const email = data.get('email');
    const password = data.get('password');
    const password2 = data.get('password2');

    if (!email || !password || !password2) {
      return fail(400, { email, password, password2, missing: true });
    }

    if (password !== password2) {
      return fail(400, { password, password2, match: false });
    }

    const response = await fetch('http://localhost:8000/api/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const result = await response.json();
      return fail(400, { error: result.message || 'Registration failed' });
    }

    throw redirect(303, '/login'); // Redirect to login page on success
  },
};

// Enable server-side rendering for this page
export const ssr = true;
