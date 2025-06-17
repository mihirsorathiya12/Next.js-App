// pages/_app.tsx
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { AuthProvider } from "./AuthContext";
import PrivateRoute from "./PrivateRoute";
import { publicRoutes } from "./publicRoutes";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const theme = createTheme();

export default function App({ Component, pageProps, router }: AppProps) {
  const isPublic = publicRoutes.includes(router.pathname);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthProvider>
          {isPublic ? (
            <Component {...pageProps} />
          ) : (
            <PrivateRoute>
              <Component {...pageProps} />
            </PrivateRoute>
          )}
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
}
