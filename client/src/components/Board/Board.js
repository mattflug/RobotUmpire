import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container disableGutters maxWidth={false}>
        <Box>
          <Box
            sx={{
              bgcolor: "#008080",
              height: {
                xs: "100vh",
                sm: "130vh",
                md: "140vh",
                lg: "105vh",
                xl: "150vh",
              },
              flexDirection: {
                xs: "column",
                sm: "row",
                md: "row",
                lg: "row",
                xl: "row",
              },
              alignItems: { xs: "center" },
            }}
          ></Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
