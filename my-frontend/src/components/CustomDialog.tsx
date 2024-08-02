import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

interface CustomDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  formData: { [key: string]: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
  fields: { label: string; name: string }[];
}

const CustomDialog: React.FC<CustomDialogProps> = ({
  open,
  onClose,
  title,
  formData,
  onChange,
  onSave,
  fields,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {fields.map((field) => (
          <TextField
            key={field.name}
            autoFocus
            margin="dense"
            label={field.label}
            fullWidth
            name={field.name}
            value={formData[field.name]}
            onChange={onChange}
          />
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
