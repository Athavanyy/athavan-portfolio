// API utility functions for backend communication
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

// Get auth token from localStorage
const getToken = () => {
  return localStorage.getItem('token');
};

// Get auth headers
const getAuthHeaders = () => {
  const token = getToken();
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` })
  };
};

// Generic API request function
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const config = {
    ...options,
    headers: {
      ...getAuthHeaders(),
      ...options.headers
    }
  };

  try {
    const response = await fetch(url, config);
    
    // Check if response is ok before trying to parse JSON
    if (!response.ok) {
      let errorMessage = 'API request failed';
      try {
        const data = await response.json();
        errorMessage = data.message || errorMessage;
      } catch {
        errorMessage = `Server error: ${response.status} ${response.statusText}`;
      }
      throw new Error(errorMessage);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle network errors (backend not running, CORS, etc.)
    if (error.message === 'Failed to fetch' || error.name === 'TypeError') {
      throw new Error('Cannot connect to server. Please make sure the backend server is running on port 3000.');
    }
    throw error;
  }
};

// Auth API
export const authAPI = {
  signUp: async (userData) => {
    return apiRequest('/users', {
      method: 'POST',
      body: JSON.stringify(userData)
    });
  },
  
  signIn: async (email, password) => {
    return apiRequest('/auth/signin', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
  },
  
  signOut: async () => {
    return apiRequest('/auth/signout', {
      method: 'GET'
    });
  },
  
  verifyToken: async () => {
    return apiRequest('/auth/verify', {
      method: 'GET'
    });
  }
};

// Contacts API
export const contactsAPI = {
  getAll: () => apiRequest('/contacts'),
  getById: (id) => apiRequest(`/contacts/${id}`),
  create: (data) => apiRequest('/contacts', {
    method: 'POST',
    body: JSON.stringify(data)
  }),
  update: (id, data) => apiRequest(`/contacts/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  }),
  delete: (id) => apiRequest(`/contacts/${id}`, {
    method: 'DELETE'
  }),
  deleteAll: () => apiRequest('/contacts', {
    method: 'DELETE'
  })
};

// Projects API
export const projectsAPI = {
  getAll: () => apiRequest('/projects'),
  getById: (id) => apiRequest(`/projects/${id}`),
  create: (data) => apiRequest('/projects', {
    method: 'POST',
    body: JSON.stringify(data)
  }),
  update: (id, data) => apiRequest(`/projects/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  }),
  delete: (id) => apiRequest(`/projects/${id}`, {
    method: 'DELETE'
  }),
  deleteAll: () => apiRequest('/projects', {
    method: 'DELETE'
  })
};

// Qualifications/Educations API
export const qualificationsAPI = {
  getAll: () => apiRequest('/qualifications'),
  getById: (id) => apiRequest(`/qualifications/${id}`),
  create: (data) => apiRequest('/qualifications', {
    method: 'POST',
    body: JSON.stringify(data)
  }),
  update: (id, data) => apiRequest(`/qualifications/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  }),
  delete: (id) => apiRequest(`/qualifications/${id}`, {
    method: 'DELETE'
  }),
  deleteAll: () => apiRequest('/qualifications', {
    method: 'DELETE'
  })
};

// Users API
export const usersAPI = {
  getAll: () => apiRequest('/users'),
  getById: (id) => apiRequest(`/users/${id}`),
  create: (data) => apiRequest('/users', {
    method: 'POST',
    body: JSON.stringify(data)
  }),
  update: (id, data) => apiRequest(`/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  }),
  delete: (id) => apiRequest(`/users/${id}`, {
    method: 'DELETE'
  })
};

