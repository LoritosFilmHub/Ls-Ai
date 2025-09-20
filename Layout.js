import React from 'react';

export default function Layout({ children }) {
  return (
    <>
      <style>{`
        :root {
          --background: 0 0% 0%;
          --foreground: 0 0% 100%;
          --card: 0 0% 6.7%;
          --card-foreground: 0 0% 100%;
          --popover: 0 0% 6.7%;
          --popover-foreground: 0 0% 100%;
          --primary: 165 100% 41%;
          --primary-foreground: 0 0% 0%;
          --secondary: 0 0% 13%;
          --secondary-foreground: 0 0% 100%;
          --muted: 0 0% 13%;
          --muted-foreground: 0 0% 63.9%;
          --accent: 0 0% 13%;
          --accent-foreground: 0 0% 100%;
        }
      `}</style>
      {children}
    </>
  );
}
