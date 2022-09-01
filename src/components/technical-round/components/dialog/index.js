import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextareaAutosize } from "@mui/material";
import BaseButton from "../../../button";
const FormDialog = ({ isOpen, activeItem, onClose, onSubmit }) => {
  const [open, setOpen] = React.useState(false);
  const [feedback, setFeedback] = React.useState("");

  React.useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  React.useEffect(() => {
    if (activeItem && activeItem.feedback) {
      setFeedback(activeItem.feedback);
    } else {
      setFeedback("");
    }
  }, [activeItem, isOpen]);
  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const handleSave = () => {
    onSubmit(feedback);
    setFeedback("");
    onClose();
  };

  return (
    <div data-testid="topic-dialog">
      <Dialog open={open} onClose={handleClose} data-testid="dialog">
        <DialogTitle>Feedback</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>

          <TextareaAutosize
            autoFocus
            required
            minRows={3}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            aria-label="maximum height"
            placeholder="Enter the feedback"
            style={{ width: "100%", minWidth: "500px" }}
          />
        </DialogContent>
        <DialogActions>
          <BaseButton onClick={handleClose}>Cancel</BaseButton>
          <BaseButton variant="contained" onClick={handleSave}>
            Add
          </BaseButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormDialog;
