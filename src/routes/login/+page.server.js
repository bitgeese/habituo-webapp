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
  login: async ({ cookies, request, url }) => {
    const data = await request.formData();
    const email = data.get('email');
    const password = data.get('password');

    if (!email || !password) {
      return fail(400, { email, password, missing: true });
    }

    const response = await fetch('https://api.example.com/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      return fail(400, { email, incorrect: true });
    }

    const result = await response.json();
    cookies.set('token', result.token, { path: '/' });

    if (url.searchParams.has('redirectTo')) {
      throw redirect(303, url.searchParams.get('redirectTo'));
    }

    return { success: true };
  },
};

// Enable server-side rendering for this page
export const ssr = true;
