export const APP_ROUTES = {
  ROOT: '/',
  SERVICES: '/services',
  CASES: '/cases',
  CONTACTS: '/contacts',
  LOGIN: '/login',
} as const;

export const API_ROUTES = {
  SERVICES: '/v1/services',
  CASES: '/v1/cases',
  CASES_SLUG: '/v1/cases/slug',
  PARTNERS: '/v1/partners',
  PRINCIPLES: '/v1/principles',
  POLICIES: '/v1/policies',
  CONTACTS: '/v1/contacts',
  FEEDBACK: '/v1/feedback',
  LOGIN: '/login',
} as const;
