import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import Title from "../components/Title/Title";
import theme from "../styles/theme";
import Layout from "../styles/Layout";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Layout>
          <Title />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}
