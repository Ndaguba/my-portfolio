import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { apiFetch } from '../lib/api';

const FlagsContext = createContext();

export const FlagsProvider = ({ children }) => {
  const [flags, setFlags] = useState({
    ai_features_enabled: true,
    engineering_tab_enabled: false,
    product_design_only: true
  });
  const [loading, setLoading] = useState(true);

  const fetchFlags = async () => {
    try {
      const response = await apiFetch('/api/flags');
      const data = await response.json();
      console.log('Fetched Flags:', data);
      setFlags(prev => ({ ...prev, ...data }));
    } catch (error) {
      console.error('Error fetching feature flags:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlags();

    // Skip realtime when Supabase isn't configured (e.g. local dev without .env).
    if (!supabase) return;

    // Set up Realtime subscription
    const channel = supabase
      .channel('public:feature_flags')
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'feature_flags' },
        (payload) => {
          console.log('Flag Update Received:', payload);
          const { key, value } = payload.new;
          setFlags(prev => ({
            ...prev,
            [key]: value
          }));
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
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
