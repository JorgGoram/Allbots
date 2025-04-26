import { AnalyticsQuery, AnalyticsResult } from '@/types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

class APIError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'APIError';
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new APIError(response.status, error.message || 'An error occurred');
  }
  return response.json();
}

const api = {
  // Chatbots
  chatbots: {
    list: () => 
      fetch(`${API_BASE_URL}/chatbots`).then(handleResponse),
    get: (id: string) => 
      fetch(`${API_BASE_URL}/chatbots/${id}`).then(handleResponse),
    create: (data: Partial<Chatbot>) => 
      fetch(`${API_BASE_URL}/chatbots`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then(handleResponse),
    update: (id: string, data: Partial<Chatbot>) => 
      fetch(`${API_BASE_URL}/chatbots/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then(handleResponse),
    delete: (id: string) => 
      fetch(`${API_BASE_URL}/chatbots/${id}`, { method: 'DELETE' }).then(handleResponse),
  },

  // Clients
  clients: {
    list: () => 
      fetch(`${API_BASE_URL}/clients`).then(handleResponse),
    get: (id: string) => 
      fetch(`${API_BASE_URL}/clients/${id}`).then(handleResponse),
    create: (data: Partial<Client>) => 
      fetch(`${API_BASE_URL}/clients`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then(handleResponse),
    update: (id: string, data: Partial<Client>) => 
      fetch(`${API_BASE_URL}/clients/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then(handleResponse),
    delete: (id: string) => 
      fetch(`${API_BASE_URL}/clients/${id}`, { method: 'DELETE' }).then(handleResponse),
  },

  // Organizations
  organizations: {
    list: () => 
      fetch(`${API_BASE_URL}/organizations`).then(handleResponse),
    get: (id: string) => 
      fetch(`${API_BASE_URL}/organizations/${id}`).then(handleResponse),
    create: (data: Partial<Organization>) => 
      fetch(`${API_BASE_URL}/organizations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then(handleResponse),
    update: (id: string, data: Partial<Organization>) => 
      fetch(`${API_BASE_URL}/organizations/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then(handleResponse),
    delete: (id: string) => 
      fetch(`${API_BASE_URL}/organizations/${id}`, { method: 'DELETE' }).then(handleResponse),
    members: {
      list: (orgId: string) => 
        fetch(`${API_BASE_URL}/organizations/${orgId}/members`).then(handleResponse),
      add: (orgId: string, data: Partial<OrganizationMember>) => 
        fetch(`${API_BASE_URL}/organizations/${orgId}/members`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }).then(handleResponse),
      update: (orgId: string, memberId: string, data: Partial<OrganizationMember>) => 
        fetch(`${API_BASE_URL}/organizations/${orgId}/members/${memberId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }).then(handleResponse),
      remove: (orgId: string, memberId: string) => 
        fetch(`${API_BASE_URL}/organizations/${orgId}/members/${memberId}`, {
          method: 'DELETE',
        }).then(handleResponse),
    },
  },

  // Projects
  projects: {
    list: () => 
      fetch(`${API_BASE_URL}/projects`).then(handleResponse),
    listByClient: (clientId: string) => 
      fetch(`${API_BASE_URL}/clients/${clientId}/projects`).then(handleResponse),
    get: (id: string) => 
      fetch(`${API_BASE_URL}/projects/${id}`).then(handleResponse),
    create: (data: Partial<Project>) => 
      fetch(`${API_BASE_URL}/projects`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then(handleResponse),
    update: (id: string, data: Partial<Project>) => 
      fetch(`${API_BASE_URL}/projects/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then(handleResponse),
    delete: (id: string) => 
      fetch(`${API_BASE_URL}/projects/${id}`, { method: 'DELETE' }).then(handleResponse),
  },

  // Conversations
  conversations: {
    list: (projectId: string) => 
      fetch(`${API_BASE_URL}/projects/${projectId}/conversations`).then(handleResponse),
    create: (projectId: string, data: Partial<Conversation>) => 
      fetch(`${API_BASE_URL}/projects/${projectId}/conversations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then(handleResponse),
    update: (id: string, data: Partial<Conversation>) => 
      fetch(`${API_BASE_URL}/conversations/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then(handleResponse),
    delete: (id: string) => 
      fetch(`${API_BASE_URL}/conversations/${id}`, { method: 'DELETE' }).then(handleResponse),
  },

  // Messages
  messages: {
    list: (conversationId: string) => 
      fetch(`${API_BASE_URL}/conversations/${conversationId}/messages`).then(handleResponse),
    create: (conversationId: string, data: Partial<Message>) => 
      fetch(`${API_BASE_URL}/conversations/${conversationId}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then(handleResponse),
    update: (conversationId: string, data: Message[]) => 
      fetch(`${API_BASE_URL}/conversations/${conversationId}/messages`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then(handleResponse),
    delete: (conversationId: string) => 
      fetch(`${API_BASE_URL}/conversations/${conversationId}/messages`, {
        method: 'DELETE',
      }).then(handleResponse),
  },

  // Analytics
  analytics: {
    query: (data: AnalyticsQuery): Promise<AnalyticsResult> => 
      fetch(`${API_BASE_URL}/analytics/query`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then(handleResponse),
  },

  // Leads
  leads: {
    list: (projectId: string) => 
      fetch(`${API_BASE_URL}/projects/${projectId}/leads`).then(handleResponse),
    create: (projectId: string, data: Partial<Lead>) => 
      fetch(`${API_BASE_URL}/projects/${projectId}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then(handleResponse),
    update: (id: string, data: Partial<Lead>) => 
      fetch(`${API_BASE_URL}/leads/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then(handleResponse),
    delete: (id: string) => 
      fetch(`${API_BASE_URL}/leads/${id}`, { method: 'DELETE' }).then(handleResponse),
  },

  // Tags
  tags: {
    list: (projectId: string) => 
      fetch(`${API_BASE_URL}/projects/${projectId}/tags`).then(handleResponse),
    create: (projectId: string, data: Partial<Tag>) => 
      fetch(`${API_BASE_URL}/projects/${projectId}/tags`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then(handleResponse),
    update: (id: string, data: Partial<Tag>) => 
      fetch(`${API_BASE_URL}/tags/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then(handleResponse),
    delete: (id: string) => 
      fetch(`${API_BASE_URL}/tags/${id}`, { method: 'DELETE' }).then(handleResponse),
  },

  // AI Analysis
  aiAnalysis: {
    trigger: (data: { 
      project_id: string; 
      type: 'sentiment' | 'intent' | 'entity'; 
      content: string;
    }) => 
      fetch(`${API_BASE_URL}/ai/analyze`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then(handleResponse),
  },

  // Subscriptions
  subscriptions: {
    get: (organizationId: string) => 
      fetch(`${API_BASE_URL}/organizations/${organizationId}/subscription`).then(handleResponse),
  },
};

export default api;