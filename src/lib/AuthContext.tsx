"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { getCurrentAccount, type Account } from "@/lib/auth";
import { onAuthInvalid } from "@/lib/authEvents";

type AuthContextValue = {
  loggedIn: boolean;
  account: Account | null;
  loading: boolean;
  setAuth: (account: Account | null) => void;
  clearAuth: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [account, setAccount] = useState<Account | null>(null);
  const [loading, setLoading] = useState(true);

  const clearAuth = useCallback(() => {
    setAccount(null);
  }, []);

  const setAuth = useCallback((nextAccount: Account | null) => {
    setAccount(nextAccount);
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function initializeAuth() {
      try {
        const currentAccount = await getCurrentAccount();

        if (!cancelled) {
          setAccount(currentAccount);
        }
      } catch (error) {
        console.error("AUTH INITIALIZATION ERROR:", error);

        if (!cancelled) {
          setAccount(null);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    initializeAuth();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    return onAuthInvalid(() => {
      setAccount(null);
    });
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      loggedIn: account !== null,
      account,
      loading,
      setAuth,
      clearAuth,
    }),
    [account, loading, setAuth, clearAuth]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider.");
  }

  return context;
}