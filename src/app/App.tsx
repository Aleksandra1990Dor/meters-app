import { ThemeProvider } from '@mui/material';
import { QueryClientProvider } from '@tanstack/react-query';

import { MainPage } from '@/pages';
import { queryClient, store, StoreContext, theme } from '@/shared';

function App() {
  return (
    <StoreContext.Provider value={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <MainPage />
        </ThemeProvider>
      </QueryClientProvider>
    </StoreContext.Provider>
  );
}

export default App;
