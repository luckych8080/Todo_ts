import { Container, AppBar, Typography, Toolbar } from "@mui/material";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "center" }}>
          <Typography
            variant="h3"
            noWrap
            component="div"
            sx={{ mr: 2, textAlign: "center" }}
          >
            Todo List
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
