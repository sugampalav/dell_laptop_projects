import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  card: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

function PremiumPage() {
  const classes = useStyles();

  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Grammarly Premium
            </Typography>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Sign Up</Button>
          </Toolbar>
        </AppBar>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h1>Improve Your Writing</h1>
              <p>
                With Grammarly Premium, you'll get advanced grammar and spelling
                checks, plagiarism detection, and more.
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Advanced Grammar and Spelling Checks
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Get real-time feedback on your writing to help improve your
                  grammar and spelling.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Plagiarism Detection
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Check your writing for plagiarism to ensure that your work is
                  original and avoid accidental plagiarism.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Vocabulary Enhancements
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Enhance your writing with vocabulary suggestions and synonym
                  suggestions to improve the clarity and precision of your
                  writing.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Genre-Specific Writing Style Checks
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Get tailored writing style checks for different genres, such
                  as academic, technical, or creative writing.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default PremiumPage;
