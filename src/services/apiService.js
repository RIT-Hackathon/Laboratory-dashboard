const API_BASE_URL = 'https://api.example.com'; // Replace with actual base URL

const apiService = async (endpoint, method = 'GET', data = null, token = null) => {
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const config = {
    method,
    headers,
    ...(data && { body: JSON.stringify(data) }),
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (err) {
    console.error('API Service Error:', err);
    throw err;
  }
};

export default apiService;
