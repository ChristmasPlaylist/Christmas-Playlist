import React from 'react';

interface ErrorToastProps {
  message: string;
}

export function ErrorToast({ message }: ErrorToastProps) {
  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-christmas-red text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in">
      {message}
    </div>
  );
}