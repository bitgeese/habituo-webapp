/** @type {import('./$types').LayoutServerLoad} */
export async function load({ fetch }) {
    const token = getLocalStorageItem('token', '');
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
  
    return {
      user,
    };
  }
  
  // Helper function to get local storage item in a safe way
  function getLocalStorageItem(key, defaultValue) {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(key) || defaultValue;
    }
    return defaultValue;
  }
  