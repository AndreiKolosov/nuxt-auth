export const useApi = () => {
  const {
    public: { apiUrl },
  } = useRuntimeConfig();

  const getContacts = () => $fetch(`${apiUrl}/contacts`)

  return {
    getContacts
  }
};
