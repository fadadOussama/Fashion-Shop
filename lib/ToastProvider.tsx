"use client";

import { Toaster } from "sonner";

interface ToastProviderProps {
  children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      {children}
      <Toaster
        position="bottom-center"
        closeButton
        toastOptions={{
          style: {
            color: "#2D2D2D",
          },
        }}
      />
    </>
  );
}
