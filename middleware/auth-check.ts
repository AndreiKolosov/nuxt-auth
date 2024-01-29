export default defineNuxtRouteMiddleware(() => {
 const user = useUser();

 if(!user.value) {
  return navigateTo(APP_ROUTES.LOGIN)
 }
});