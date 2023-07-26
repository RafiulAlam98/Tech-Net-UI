import { useAppSelector } from '@/redux/hooks/hooks';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface IProps {
  children: ReactNode;
}
export default function PrivateRoute({ children }: IProps) {
  const { user, isLoading } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!user.email && !isLoading) {
    navigate('/login');
  }
  return children;
}
