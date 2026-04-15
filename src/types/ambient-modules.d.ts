declare module 'react' {
  export function useState<S>(initialState: S | (() => S)): [S, (value: S | ((prevState: S) => S)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  export function useMemo<T>(factory: () => T, deps: any[]): T;
  export function useCallback<T extends (...args: any[]) => any>(callback: T, deps: any[]): T;
  export type ReactNode = any;
  export type PropsWithChildren<P> = P & { children?: ReactNode };
  export interface HTMLAttributes<T> {
    [key: string]: any;
  }
  export interface SVGAttributes<T> {
    [key: string]: any;
  }
  export namespace JSX {
    interface Element { }
    interface IntrinsicElements { [elemName: string]: any }
  }
  export default any;
}

declare module 'react-dom' {
  export function createRoot(element: any): any;
  export function hydrateRoot(element: any, children: any): any;
  export function render(element: any, container: any): any;
  export default any;
}

declare module 'react-router-dom' {
  export const Link: any;
  export const useLocation: any;
  export const Route: any;
  export const Routes: any;
  export const BrowserRouter: any;
  export const Navigate: any;
  export const useNavigate: any;
  export default any;
}

declare module 'lucide-react' {
  const icon: any;
  export const Phone: any;
  export const ChevronDown: any;
  export const Menu: any;
  export const X: any;
  export const MapPin: any;
  export const Clock: any;
  export const Mail: any;
  export const Linkedin: any;
  export const Facebook: any;
  export const Twitter: any;
  export const Instagram: any;
  export default icon;
}

declare module 'react/jsx-runtime' {
  export function jsx(type: any, props: any, key?: any): any;
  export function jsxs(type: any, props: any, key?: any): any;
  export function jsxDEV(type: any, props: any, key?: any): any;
}

declare module 'vitest/globals';

declare module 'vite/client' {
  interface ImportMetaEnv {
    readonly MODE: string;
    readonly DEV: boolean;
    readonly PROD: boolean;
    [key: string]: string | boolean | undefined;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.webp';
