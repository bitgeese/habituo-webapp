export async function fetchUserProfile(token) {
    const response = await fetch('http://localhost:8000/api/users/me/', {
      headers: { 'Authorization': `Token ${token}` }
    });
    return response.ok ? await response.json() : null;
  }
  
  export async function fetchWishlist(token) {
    const response = await fetch('http://localhost:8000/api/habits/wishlist/', {
      headers: { 'Authorization': `Token ${token}` }
    });
    return response.ok ? await response.json() : [];
  }
  
  export async function fetchInProgressHabits(token) {
    const response = await fetch('http://localhost:8000/api/habits/in_progress/', {
      headers: { 'Authorization': `Token ${token}` }
    });
    return response.ok ? await response.json() : [];
  }
  
  export async function fetchDailyRoutine(token) {
    const response = await fetch('http://localhost:8000/api/habits/daily_routine/', {
      headers: { 'Authorization': `Token ${token}` }
    });
    return response.ok ? await response.json() : [];
  }
  
  export async function reorderHabits(fromId, toId, token) {
    const response = await fetch('http://localhost:8000/api/habits/reorder/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`,
      },
      body: JSON.stringify({ from_id: fromId, to_id: toId })
    });
  
    if (!response.ok) {
      throw new Error('Failed to reorder habits');
    }
  }
  