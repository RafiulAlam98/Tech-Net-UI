/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { onAuthStateChanged } from 'firebase/auth';
import { Toaster } from './components/ui/Toaster';
import MainLayout from './layouts/MainLayout';
import { useEffect } from 'react';
import { useAppDispatch } from './redux/hooks/hooks';
import { setLoading, setUser } from './redux/features/user/userSlice';
import { auth } from './lib/firebase';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading());

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email!));
        dispatch(setLoading());
      } else {
        dispatch(setLoading());
      }
    });
  }, [dispatch]);
  return (
    <div>
      <Toaster />
      <MainLayout />
    </div>
  );
}

export default App;
