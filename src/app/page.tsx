import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#f7f9fe', color: '#000', padding: '0 2px', boxShadow: 'none', }}>
      <Toolbar>
        <Button
          sx={{
            boxShadow: '0 20px 16px -16px #ee193a80',
            fontSize: '16px',
            backgroundColor: '#d81735',
            color: '#fff',
            borderRadius: '50px',
            padding: '15px 24px',
            marginRight: 'auto',
            marginLeft: '150px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            '&:hover': {
              backgroundColor: 'darkred',
            },
          }}
        >
          ورود | ثبت‌نام
          <LoginOutlinedIcon />
        </Button>

        <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center', gap: 2, marginLeft: '150px', }}>
          <Button sx={{ color: 'inherit', fontSize: '16px' }}>تماس با ما</Button>
          <Button sx={{ color: 'inherit', fontSize: '16px' }}>آکادمی</Button>
          <Button sx={{ color: 'inherit', fontSize: '16px' }}>وبلاگ</Button>
          <Button sx={{ color: 'inherit', fontSize: '16px' }}>خدمات ما</Button>
        </Box>

        <Box component="img"
          sx={{
            height: 120,
            width: 120,
            marginRight: '150px',
          }}
          alt="لوگو"
          src="https://quera.org/media/CACHE/images/public/careers/logos/3e3090496f2e4c18972ddd1eeeff68bc/06a4d74c19979847dc769e19a2c9d77c.png"
        />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
