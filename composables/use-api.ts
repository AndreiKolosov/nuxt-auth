import type { ILoginResponse } from '~/types';

export const useApi = () => {
  const token = useCookie('token');
  const {
    public: { apiUrl },
  } = useRuntimeConfig();

  const getContacts = () => $fetch(`${apiUrl}${API_ROUTES.CONTACTS}`);

  const getServices = () =>
    $fetch(`${apiUrl}${API_ROUTES.SERVICES}`, {
      headers: {
        Authorization: `Bearer ${token.value}` || '',
      },
    });

  const getServiceById = (id: string) =>
    $fetch(`${apiUrl}${API_ROUTES.SERVICES}/${id}`, {
      headers: {
        Authorization: `Bearer ${token.value}` || '',
      },
    });

  const getCases = () =>
    $fetch(`${apiUrl}${API_ROUTES.CASES}`, {
      headers: {
        Authorization: `Bearer ${token.value}` || '',
      },
    });

  const getCaseById = (id: string) =>
    $fetch(`${apiUrl}${API_ROUTES.CASES}/${id}`, {
      headers: {
        Authorization: `Bearer ${token.value}` || '',
      },
    });

  const getCaseBySlug = (slug: string) =>
    $fetch(`${apiUrl}${API_ROUTES.CASES_SLUG}/${slug}`, {
      headers: {
        Authorization: `Bearer ${token.value}` || '',
      },
    });

  const getPartners = () => $fetch(`${apiUrl}${API_ROUTES.PARTNERS}`);

  const getPrinciples = () => $fetch(`${apiUrl}${API_ROUTES.POLICIES}`);

  const getPolicies = () => $fetch(`${apiUrl}${API_ROUTES.POLICIES}`);

  const login = ({ email, password }: { email: string; password: string }): Promise<ILoginResponse> =>
    $fetch(`${apiUrl}${API_ROUTES.LOGIN}`, {
      method: 'POST',
      body: {
        email,
        password,
      },
    });

  return {
    getContacts,
    getCases,
    getCaseById,
    getCaseBySlug,
    getServices,
    getServiceById,
    getPartners,
    getPolicies,
    getPrinciples,
    login,
  };
};
