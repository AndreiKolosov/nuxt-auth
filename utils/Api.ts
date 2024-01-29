import type { ILoginResponse } from '~/types';

export class Api {
  apiUrl: string;

  constructor(baseApiUrl: string) {
    this.apiUrl = baseApiUrl;
  }

  getContacts() {
    return $fetch(`${this.apiUrl}${API_ROUTES.CONTACTS}`);
  }

  getServices(token: string) {
    return $fetch(`${this.apiUrl}${API_ROUTES.SERVICES}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getServiceById({ id, token }: { id: string; token: string }) {
    return $fetch(`${this.apiUrl}${API_ROUTES.SERVICES}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getCases(token: string) {
    return $fetch(`${this.apiUrl}${API_ROUTES.CASES}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getCaseById({ id, token }: { id: string; token: string }) {
    return $fetch(`${this.apiUrl}${API_ROUTES.CASES}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getCaseBySlug({ slug, token }: { slug: string; token: string }) {
    return $fetch(`${this.apiUrl}${API_ROUTES.CASES_SLUG}/${slug}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getPartners() {
    return $fetch(`${this.apiUrl}${API_ROUTES.PARTNERS}`);
  }

  getPrinciples() {
    return $fetch(`${this.apiUrl}${API_ROUTES.POLICIES}`);
  }

  getPolicies() {
    return $fetch(`${this.apiUrl}${API_ROUTES.POLICIES}`);
  }

  login({ email, password }: { email: string; password: string }): Promise<ILoginResponse> {
    return $fetch(`${this.apiUrl}${API_ROUTES.LOGIN}`, {
      method: 'POST',
      body: {
        email,
        password,
      },
    });
  }
}
