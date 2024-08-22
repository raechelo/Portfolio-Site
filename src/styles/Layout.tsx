import { Box, Grid } from "@mui/material";
import Nav from "../components/Nav/Nav";

interface LayoutProps {
  includeCarousel?: boolean;
  LeftColumnContents?;
  RightColumnContents?;
  children;
}

const Layout = ({
  includeCarousel,
  LeftColumnContents,
  RightColumnContents,
  children,
}: LayoutProps): JSX.Element => {
  return (
    <Box>
      <Nav />
      <Grid container py={8} px={6}>
        {includeCarousel && <Grid>carousel</Grid>}
        {(LeftColumnContents || RightColumnContents) && (
          <>
            <Grid item sm={6}>
              <LeftColumnContents />
            </Grid>
            <Grid item sm={6}>
              <RightColumnContents />
            </Grid>
          </>
        )}
        {children}
      </Grid>
    </Box>
  );
};

export default Layout;
