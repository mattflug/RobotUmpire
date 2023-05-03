import * as React from "react";
import "./Board.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container disableGutters maxWidth={false}>
        <Box className="container" sx={{ bgcolor: "#008080", height: "100vh" }}>
          <Box
            className="border"
            sx={{
              width: 1200,
              height: 600,
              backgroundColor: "#008080",
            }}
          >
            <div className="main">
              <div className="home">
                <Box
                  sx={{
                    display: "inline",
                    flexWrap: "wrap",
                    "& > :not(style)": {
                      m: 1,
                      width: 50,
                      height: 50,
                    },
                  }}
                >
                  <Paper elevation={3} />
                  <Paper elevation={3} />
                  <Paper elevation={3} />
                  <Paper elevation={3} />
                  <Paper elevation={3} />
                  <Paper elevation={3} />
                  <Paper elevation={3} />
                  <Paper elevation={3} />
                </Box>
              </div>
              <div className="away">
                <Box
                  sx={{
                    display: "block",
                    flexWrap: "wrap",
                    flexDirection: "row",
                    "& > :not(style)": {
                      m: 1,
                      width: 50,
                      height: 50,
                    },
                  }}
                >
                  <Paper elevation={3} />
                  <Paper elevation={3} />
                  <Paper elevation={3} />
                  <Paper elevation={3} />
                  <Paper elevation={3} />
                  <Paper elevation={3} />
                  <Paper elevation={3} />
                  <Paper elevation={3} />
                </Box>
              </div>
            </div>
            <div className="sidebar">
              <Box
                sx={{
                  display: "inline",
                  flexWrap: "wrap",
                  alignItems: "row",
                  "& > :not(style)": {
                    m: 1,
                    width: 128,
                    height: 128,
                  },
                }}
              >
                <Paper elevation={3} />
                <Paper elevation={3} />
                <Paper elevation={3} />
              </Box>
            </div>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
