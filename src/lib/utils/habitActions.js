import { fail, redirect } from '@sveltejs/kit';

export async function deleteHabit(habitId, token) { 
  const response = await fetch(`http://localhost:8000/api/habits/${habitId}/`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Token ${token}`,
      },
    });
  
    if (!response.ok) {
      throw new Error('Failed to delete the habit');
    }
  }
  
  export async function patchHabit(habitId, payload, token) {
    const response = await fetch(`http://localhost:8000/api/habits/${habitId}/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`,
      },
      body: JSON.stringify(payload)
    });
  
    if (!response.ok) {
      throw new Error('Failed to patch the habit');
    }
  
    return await response.json();
  }
  
  export async function createHabit({ cookies, request }) {
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
        'Authorization': `Token ${cookies.get('token')}`,
      },
      body: JSON.stringify({ name, status })
    });
  
    if (!response.ok) {
      return fail(400, { name, status, incorrect: true });
    }
  
    return await response.json();
  }

  export async function trackHabit(habitId, date, completed, token) {
    const response = await fetch(`http://localhost:8000/api/habits/${habitId}/track/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`,
        },
        body: JSON.stringify({ date, completed })
    });

    if (!response.ok) {
        throw new Error('Failed to track habit');
    }

    return await response.json();
}