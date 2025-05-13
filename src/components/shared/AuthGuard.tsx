import { useEffect } from 'react';
import { useAuthStore } from '../../store/authStore';

interface AuthGuardProps {
  children: React.ReactNode;
  requiredRole?: 'admin' | 'user';
}

export const AuthGuard = ({ children, requiredRole }: AuthGuardProps) => {
  const { user, isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (!isAuthenticated()) {
      window.location.href = '/login';
      return;
    }

    if (requiredRole && user?.role !== requiredRole) {
      window.location.href = `/${user?.role}/dashboard`;
    }
  }, [isAuthenticated, user, requiredRole]);

  return <>{children}</>;
};