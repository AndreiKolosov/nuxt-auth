export const useApi = () => {
  const {
    public: { apiUrl },
  } = useRuntimeConfig();

  const getContacts = () => $fetch(`${apiUrl}${API_ROUTES.CONTACTS}`);

  const getServices = () => $fetch(`${apiUrl}${API_ROUTES.SERVICES}`);
  const getServiceById = (id: number) => $fetch(`${apiUrl}${API_ROUTES.SERVICES}/${id}`);

  const getCases = () => $fetch(`${apiUrl}${API_ROUTES.CASES}`);
  const getCaseById = (id: number) => $fetch(`${apiUrl}${API_ROUTES.CASES}/${id}`);
  const getCaseBySlug = (slug: string) => $fetch(`${apiUrl}${API_ROUTES.CASES_SLUG}/${slug}`);

  const getPartners = () => $fetch(`${apiUrl}${API_ROUTES.PARTNERS}`);

  const getPrinciples = () => $fetch(`${apiUrl}${API_ROUTES.POLICIES}`);

  const getPolicies = () => $fetch(`${apiUrl}${API_ROUTES.POLICIES}`);

  const login = ({ email, password }: { email: string; password: string }) =>
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
