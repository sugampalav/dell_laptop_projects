import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "50vw",
    backgroundColor: "transparent",
  },
  inline: {
    display: "inline",
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Clear, confident communication"
          secondary={
            <React.Fragment>
              {"Take the guesswork out of great writing."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Comprehensive real-time feedback"
          secondary={
            <React.Fragment>
              {"Effective writing takes more than good grammar."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Support you can rely on."
          secondary={
            <React.Fragment>
              {"Write with a second pair of eyes that never gets tired."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Strike the right tone."
          secondary={
            <React.Fragment>
              {"Make the best impression, every time"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider />
    </List>
  );
}
