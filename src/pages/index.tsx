import React, { useState } from "react"

import "./styles.css"
import { Container } from "@mui/system"
import { ProfileInfo } from "../components/ProfileInfo"
import { Theme, ThemeProvider, createTheme } from "@mui/material/styles"
import { ThemeSwicher } from "../components/ThemeSwicher"
import { AppBar, Toolbar, Box } from "@mui/material"

const defaultTheme = createTheme({
  palette: { mode: "light" },
})

const createNewTheme = (mode: "dark" | "light") =>
  createTheme({ ...defaultTheme, ...{ palette: { mode } } })

export default function Home() {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const handleChange = () => {
    setTheme(t =>
      t.palette.mode === "dark"
        ? createNewTheme("light")
        : createNewTheme("dark")
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" color="transparent">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1 }}></Box>
            <Box>
              <ThemeSwicher
                onChange={handleChange}
                checked={theme.palette.mode === "dark"}
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container
        maxWidth="xl"
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <ProfileInfo />
      </Container>
    </ThemeProvider>
  )
}
