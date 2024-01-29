import type { IUser } from '~/types';

export const useUser = () => useState<IUser | null>('user', () => null);
