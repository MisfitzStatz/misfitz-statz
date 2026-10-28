type AuthEventListener = () => void;

const listeners = new Set<AuthEventListener>();

export function onAuthInvalid(listener: AuthEventListener) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

export function notifyAuthInvalid() {
  for (const listener of listeners) {
    listener();
  }
}