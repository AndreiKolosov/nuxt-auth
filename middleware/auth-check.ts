export default defineNuxtRouteMiddleware(() => {
 const isAuth = true;

 if(!isAuth) {
  return navigateTo(APP_ROUTES.ROOT)
 }
});