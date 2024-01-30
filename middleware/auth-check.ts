export default defineNuxtRouteMiddleware((to, from) => {
  const user = useUser();

  if (to.fullPath === APP_ROUTES.LOGIN && user.value) {
    return navigateTo(from.fullPath);
  } 

  if (to.fullPath !== APP_ROUTES.LOGIN && !user.value) {
    return navigateTo(APP_ROUTES.LOGIN);
  }
});
