import { AppBar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Typography, Button, Tooltip, Avatar } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import Style from "./menu.module.css";

function MenuCatalogo() {

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <AppBar position="static">
        <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >𝕲𝖗𝖊𝖙𝖆 𝕲𝖊𝖗𝖜𝖎𝖌</Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                
            </IconButton>
            <Menu 
             id="menu-appbar"
             anchorEl={anchorElNav}
             anchorOrigin={{
               vertical: 'bottom',
               horizontal: 'left',
             }}
             keepMounted
             transformOrigin={{
               vertical: 'top',
               horizontal: 'left',
             }}
             open={Boolean(anchorElNav)}
             
             sx={{
               display: { xs: 'block', md: 'none' },
             }}
            >
         <MenuItem key="Minha Conta" onClick={handleCloseUserMenu}>
              <Typography textAlign="center"><a href='#' >Minha Conta</a></Typography>
            </MenuItem>
            <MenuItem key="Entrar" onClick={handleCloseUserMenu}>
              <Typography textAlign="center"><a href='/login'>Entrar</a></Typography>
            </MenuItem>
            <MenuItem key="Cadastrar" onClick={handleCloseUserMenu}>
              <Typography textAlign="center"><a href='/cadastro'>Cadastrar</a></Typography>
            </MenuItem>
            <MenuItem key="Sair" onClick={handleCloseUserMenu}>
              <Typography textAlign="center"><a href='#'>Sair</a></Typography>
            </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>      
                    <Button className={Style.button}
                    href='http://localhost:3000/'
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, ml: 25, color: 'white', display: 'block' }}>
                        FILMES
                    </Button>
                    <Button className={Style.button}
                      href='http://localhost:3000/sobre'
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, ml: 25, color: 'white', display: 'block' }}>
                        SOBRE
                    </Button>
                    <Button
                    className={Style.button}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, ml: 25, color: 'white', display: 'block' }}>
                        PRÊMIOS
                    </Button>    
                </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Renara" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
<MenuItem key="Minha Conta" onClick={handleCloseUserMenu}>
              <Typography textAlign="center"><a href='#' >Minha Conta</a></Typography>
            </MenuItem>
            <MenuItem key="Entrar" onClick={handleCloseUserMenu}>
              <Typography textAlign="center"><a href='/login'>Entrar</a></Typography>
            </MenuItem>
            <MenuItem key="Cadastrar" onClick={handleCloseUserMenu}>
              <Typography textAlign="center"><a href='/cadastro'>Cadastrar</a></Typography>
            </MenuItem>
            <MenuItem key="Sair" onClick={handleCloseUserMenu}>
              <Typography textAlign="center"><a href='#'>Sair</a></Typography>
            </MenuItem>
            </Menu>
            </Box>
        </Toolbar>
        </Container>

    </AppBar>
  )
}

export default MenuCatalogo