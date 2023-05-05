import * as React from "react";
import "./Board.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  display: "flex",
  flexwrap: "wrap",
  height: 100,
  width: 100,
  color: theme.palette.text.secondary,
}));

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
                <Stack direction="row" spacing={2}>
                  <Item>Item 1</Item>
                  <Item>Item 2</Item>
                  <Item>Item 3</Item>
                  <Item>Item 4</Item>
                  <Item>Item 5</Item>
                  <Item>Item 6</Item>
                  <Item>Item 7</Item>
                  <Item>Item 8</Item>
                </Stack>
              </div>
              <div className="away">
                <Stack direction="row" spacing={2}>
                  <Item>Item 1</Item>
                  <Item>Item 2</Item>
                  <Item>Item 3</Item>
                  <Item>Item 4</Item>
                  <Item>Item 5</Item>
                  <Item>Item 6</Item>
                  <Item>Item 7</Item>
                  <Item>Item 8</Item>
                </Stack>
              </div>
            </div>
            <div className="sidebar">
              <Stack direction="column" spacing={2}>
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
              </Stack>
            </div>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
