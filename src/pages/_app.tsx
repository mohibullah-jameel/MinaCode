import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { store } from '../Store/store';
import { Provider } from 'react-redux';
import { QueryClient } from 'react-query';
import { QueryClientProvider } from 'react-query';
// import { QueryClientProvider } from 'react-query/types/react';

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  );
}
