import React, { createContext, useContext, useState, useEffect } from 'react';

const FlagsContext = createContext();

export const FlagsProvider = ({ children }) => {
  const [flags, setFlags] = useState({
    ai_features_enabled: true,
    engineering_tab_enabled: true,
    product_design_only: false
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFlags = async () => {
      try {
        const response = await fetch('/api/flags');
        const data = await response.json();
        setFlags(prev => ({ ...prev, ...data }));
      } catch (error) {
        console.error('Error fetching feature flags:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFlags();
  }, []);

  return (
    <FlagsContext.Provider value={{ flags, loading }}>
      {children}
    </FlagsContext.Provider>
  );
};

export const useFlags = () => {
  const context = useContext(FlagsContext);
  if (context === undefined) {
    throw new Error('useFlags must be used within a FlagsProvider');
  }
  return context;
};
