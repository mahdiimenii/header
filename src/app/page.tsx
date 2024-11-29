import { FC } from 'react';
import React from 'react';
import { AppBar, Toolbar, Button, Box, Grid } from '@mui/material';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import { Movies } from '@/datebase/movies.data';

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
            width: 150,
            marginRight: '150px',
          }}
          alt="لوگو"
          src="https://tesmino.com/_nuxt/labled-logo.1bfc2b1b.svg"
        />
      </Toolbar>
    </AppBar>
  );
}

type MovieType = {
  title: string;
  description: string;
}

type OwnProps = {
  data: MovieType
}

const MovieCard: FC<OwnProps> = (data) => {
  const movies1 = Movies[0];
  return(
    <Card 
      sx={{
        maxWidth: 390,
        minHeight: 260,
        padding: "24px",
        textAlign: "right",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: "16px",
        overflow: "hidden",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.2)",
          border: "none",
        },
        boxSizing: "border-box",
      }}
    >
      <CardActionArea>

        <CardMedia 
          component="img"
          image="/image/chart.cc14b970.svg"
          alt={data.data.title}
          sx={{
            width: 60,
            height: 60,
            margin: "0 auto",
            marginBottom: "16px"
          }}
        />
        <CardContent 
          sx={{ textAlign: "right"}}>
          {/* Title below the image */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: "bold",
              marginBottom: "8px",
              color: "#333",
            }}
          >
            {data.data.title}
          </Typography>
          {/* Description */}
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontSize: "14px",
              lineHeight: "1.6",
            }}
          >
            {data.data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

const App = () => {
  return (
    <div>
      <Header />
      <Box sx={{ padding: "100px" }}>
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: "center",
            maxWidth: "90%",
            margin: "0 auto"
          }}
        >
          {Movies.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <MovieCard data={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default App;
