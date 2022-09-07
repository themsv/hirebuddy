import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Logout, VideoCall } from "@mui/icons-material";
import { CONDUCT_INTERVIEW, HOME } from "../../constants/routes";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../../store/user/userSlice";
import styled from "styled-components";

const LogoLink = styled(Link)`
  &:hover {
    cursor: pointer;
  }
`;

const pages = [
  {
    title: "Conduct an Interview",
    link: CONDUCT_INTERVIEW,
  },
];
const settings = [{ title: "Logout", link: "" }];

const Header = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavigateUserMenu = (link) => {
    if (!link) {
      dispatch(removeUser());
    }
    setAnchorElUser(null);
  };

  const getName = () => {
    return user.value.firstName + " " + user.value.lastName;
  };

  return (
    <>
      <AppBar position="static" color="transparent" data-testid="page-header">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {user.value.email ? (
              <LogoLink to="/landing">
                <img
                  src="/assets/images/logo.png"
                  alt="Hire buddy logo"
                  style={{ display: "flex" }}
                  height={35}
                />
              </LogoLink>
            ) : (
              <LogoLink to={HOME}>
                <img
                  src="/assets/images/logo.png"
                  alt="Hire buddy logo"
                  style={{ display: "flex" }}
                  height={35}
                />
              </LogoLink>
            )}

            {user?.value?.email ? (
              <>
                <Box
                  sx={{
                    flexGrow: 1,
                    flexDirection: "row-reverse",
                    display: { md: "flex" },
                  }}
                >
                  <nav>
                    <ul className="nav-list align-right">
                      {pages.map((page) => (
                        <li key={page}>
                          <Button
                            key={page.title}
                            LinkComponent={Link}
                            onClick={() => navigate(page.link)}
                            size="small"
                            sx={{
                              my: 2,
                              mr: 1,
                              color: "primary",
                              alignItems: "center",
                              display: "flex",
                            }}
                          >
                            <VideoCall />
                            <span>{page?.title}</span>
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton
                      size="small"
                      data-testid="menu-appbar"
                      onClick={handleOpenUserMenu}
                      sx={{ p: 0 }}
                    >
                      <Avatar
                        alt={getName()}
                        src="/static/images/avatar/2.jpg"
                        sx={{ width: "30px", height: "30px", fontSize: "15px" }}
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem
                        key={setting}
                        onClick={() => handleNavigateUserMenu(setting.link)}
                      >
                        <Logout sx={{ height: "15px" }} />
                        <Typography textAlign="center">
                          {setting?.title}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </>
            ) : (
              <>
                <Box
                  sx={{
                    flexGrow: 1,
                    flexDirection: "row-reverse",
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to="/"
                  >
                    <Button color="primary">Login</Button>
                  </Link>
                </Box>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};
export default Header;
