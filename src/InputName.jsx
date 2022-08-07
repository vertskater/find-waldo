import {
  Dialog,
  TextField,
  DialogActions,
  Button,
  DialogTitle,
  DialogContentText,
  DialogContent,
} from "@mui/material";
import { useState, useEffect } from "react";

export default function InputName({
  open,
  handleClose,
  handleChange,
  handleSubscribe,
}) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContentText sx={{ pr: 3, pl: 3 }}>
        Tell us your Name to present your hight score to other players
      </DialogContentText>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          variant="standard"
          required
          onChange={(e) => handleChange(e)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubscribe}>Subscribe</Button>
      </DialogActions>
    </Dialog>
  );
}
