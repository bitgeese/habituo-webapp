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
  