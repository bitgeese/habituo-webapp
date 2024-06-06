import { fail, redirect } from '@sveltejs/kit';
import { token as tokenStore } from '$lib/stores';

/** @type {import('./$types').Actions} */
export const actions = {
  login: async ({ cookies, request, url }) => {
    const data = await request.formData();
    const email = data.get('email');
    const password = data.get('password');

    if (!email || !password) {
      return fail(400, { email, password, missing: true });
    }

    const response = await fetch('http://localhost:8000/api/auth-token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: email, password }), // Ensure correct key is used
    });

    if (!response.ok) {
      return fail(400, { email, incorrect: true });
    }

    const result = await response.json();
    cookies.set('token', result.token, { path: '/' });
    tokenStore.set(result.token); // Update the store

    if (url.searchParams.has('redirectTo')) {
      throw redirect(303, url.searchParams.get('redirectTo'));
    }

    // Redirect to home page on successful login
    throw redirect(303, '/');
  },
};

// Enable server-side rendering for this page
export const ssr = true;
