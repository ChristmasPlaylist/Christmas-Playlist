import React from 'react';
import { AppLayout } from './components/layout/AppLayout';
import { AppRoutes } from './components/routing/AppRoutes';
import { AudioProvider } from './contexts/AudioContext';

export default function App() {
  return (
    <AudioProvider>
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </AudioProvider>
  );
}