import React, { useState } from 'react'
import Data from '../Shared/Constant/constantdata';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid'; // Grid version 1
// import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import './theme.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';



function ThemeChange() {


    const lightTheme = createTheme({
        palette: {
            mode: 'light',
        },
        background: {
            default: '#f0f0f0', // Light mode background color
        },
    });

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
        background: {
            default: '#121212', // Dark mode background color
        },
    });

    // Use state to toggle between light and dark themes
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Define a function to toggle the theme
    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    // Wrap your entire application with ThemeProvider
    // return (
    //     <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
    //         {/* Your application components */}
    //     </ThemeProvider>
    // );


    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <div className='adjust' style={{ backgroundColor: isDarkMode ? '#121212' : '#f0f0f0'}}>

                <div>
                    <h1 style={{ color: isDarkMode ? '#f0f0f0' : '#121212'}}>Sports</h1>

                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}  style={{ marginLeft: "20px" }} >
                        <Grid xs={3}>
                            <Card sx={{ maxWidth: 300 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="350"
                                        image={Data.img1}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Mahendra Singh Dhoni
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">

                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid xs={3}>
                            <Card sx={{ maxWidth: 300 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="350"
                                        image={Data.img2}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Virat Kohli
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">

                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid xs={3}>
                            <Card sx={{ maxWidth: 300 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="350"
                                        image={Data.img3}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Hardik Pandey
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">

                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid xs={3}>
                            <Card sx={{ maxWidth: 300 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="350"
                                        image={Data.img4}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Sachin Tendulkar
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">

                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                    <button className='button' type='button' > See More </button>

                </div>

               

                <div style={{ border: "4px solid green" }}>
                    <div className='label'>
                        <h1 >Collection Spotlight</h1>
                        <p>According to Economic Times, Virat Kohli and Rishabh Pant are in the spotlight in the 2024 IPL,
                            along with Australia's Pat Cummins, who will captain Sunrisers Hyderabad, and Mitchell Starc,
                            who returns to the IPL after an eight-year absence</p>

                    </div>

                    <Grid container rowSpacing={1} columnSpacing={{ xs: -2, sm: -3, md: -4 }} style={{ marginLeft: "50px" }} mt={3}>
                        <Grid xs={4}>
                            <Card sx={{ maxWidth: 300 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="400"
                                        image={Data.img1}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Mahendra Singh Dhoni
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">

                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid xs={4}>
                            <Card sx={{ maxWidth: 300 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="400"
                                        image={Data.img2}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Virat Kohli
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">

                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid xs={4}>
                            <Card sx={{ maxWidth: 300 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="400"
                                        image={Data.img3}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Hardik Pandey
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">

                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                    </Grid>




                </div>



                <button className='button' onClick={toggleTheme}>Change Mode </button>

            </div>
            
            
        </ThemeProvider>

    )
}

export default ThemeChange
