export default defineNuxtRouteMiddleware((to) => {
  if (to.matched.length === 0) {
    return navigateTo({ path: APP_ROUTES.ROOT, replace: true });
  }
});
