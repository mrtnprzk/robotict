import React, { Fragment } from "react";
import "./Inventory.css";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import Button from "@mui/material/Button";

const Inventory = (props) => {
  const icon = <ImageIcon />;
  return (
    <Fragment>
      {props.items.map((item, index) => (
        <List
          key={index}
          sx={{
            marginTop: "1rem",
          }}
          className="card"
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar className="icon">{item.icon}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.name} secondary={item.text} />
            <Button
              variant="contained"
              type="button"
              color="error"
              onClick={() => props.delete(index)}
            >
              Delete
            </Button>
          </ListItem>
        </List>
      ))}
    </Fragment>
  );
};

export default Inventory;
