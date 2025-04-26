export interface User {
  id: number;
  name: string;
  email: string;
  image: string | null;
}

export interface Chatbot {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'inactive' | 'training';
  created_at: string;
  updated_at: string;
  organization_id: string;
  project_id: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  company: string;
  status: 'active' | 'inactive';
  created_at: string;
}

export interface Organization {
  id: string;
  name: string;
  plan: 'free' | 'pro' | 'enterprise';
  status: 'active' | 'inactive';
  created_at: string;
  members: OrganizationMember[];
}

export interface OrganizationMember {
  id: string;
  user_id: string;
  organization_id: string;
  role: 'admin' | 'member' | 'viewer';
  joined_at: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  organization_id: string;
  client_id: string;
  status: 'active' | 'archived';
  created_at: string;
}

export interface Conversation {
  id: string;
  project_id: string;
  chatbot_id: string;
  status: 'active' | 'completed' | 'failed';
  started_at: string;
  ended_at: string | null;
  metrics: {
    duration: number;
    messages_count: number;
    sentiment_score: number;
  };
}

export interface Message {
  id: string;
  conversation_id: string;
  content: string;
  role: 'user' | 'assistant';
  created_at: string;
}

export interface Lead {
  id: string;
  project_id: string;
  name: string;
  email: string;
  phone?: string;
  status: 'new' | 'contacted' | 'qualified' | 'converted';
  source: string;
  tags: string[];
  created_at: string;
}

export interface Tag {
  id: string;
  name: string;
  color: string;
  project_id: string;
}

export interface AnalyticsQuery {
  project_id: string;
  start_date: string;
  end_date: string;
  metrics: string[];
  dimensions: string[];
  filters?: Record<string, any>;
}

export interface AnalyticsResult {
  data: Record<string, any>[];
  metadata: {
    total_count: number;
    time_range: {
      start: string;
      end: string;
    };
  };
}

export interface Subscription {
  id: string;
  organization_id: string;
  plan: 'free' | 'pro' | 'enterprise';
  status: 'active' | 'canceled' | 'past_due';
  current_period_end: string;
  cancel_at_period_end: boolean;
}