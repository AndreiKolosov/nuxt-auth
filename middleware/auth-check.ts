import { APP_ROUTES } from '~/utils/constants';

export default defineNuxtRouteMiddleware(() => {
 const isAuth = true;

 if(!isAuth) {
  return navigateTo(APP_ROUTES.ROOT)
 }
});