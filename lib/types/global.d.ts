export {};

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
    gtag: (...args: [string, string, Record<string, unknown>?]) => void;
  }
}
