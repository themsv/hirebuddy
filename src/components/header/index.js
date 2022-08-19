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
import { useNavigate } from "react-router-dom";
import { Logout, VideoCall } from "@mui/icons-material";
import { CONDUCT_INTERVIEW, HOME } from "../../constants/routes";

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

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavigateUserMenu = (link) => {
    if (!link) {
      //logout
    }
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src="/assets/images/logo.png"
            alt="Hire buddy logo"
            height={35}
            onClick={() => navigate(HOME)}
          />
          <Box
            sx={{
              flexGrow: 1,
              flexDirection: "row-reverse",
              display: { xs: "none", md: "flex" },
            }}
          >
            <nav>
              <ul className="nav-list align-right">
                {pages.map((page) => (
                  <li>
                    <Button
                      key={page}
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
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
              >
                <Avatar
                  alt="Mahejabeen Naib"
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
                  <Typography textAlign="center">{setting?.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
