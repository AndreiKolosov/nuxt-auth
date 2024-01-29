export default defineNuxtPlugin(() => {
  const {
    public: { apiUrl },
  } = useRuntimeConfig();

  const api = new Api(apiUrl)

  return {
    provide: { api },
  };
});
