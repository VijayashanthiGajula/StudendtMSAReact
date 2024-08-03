// import React from 'react';
// import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

// interface CustomDialogProps {
//   open: boolean;
//   onClose: () => void;
//   title: string;
//   formData: { [key: string]: string };
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   onSave: () => void;
//   fields: { label: string; name: string }[];
   
// }

// const CustomDialog: React.FC<CustomDialogProps> = ({
//   open,
//   onClose,
//   title,
//   formData,
//   onChange,
//   onSave,
//   fields,
// }) => {
//   return (
//     <Dialog open={open} onClose={onClose}>
//       <DialogTitle>{title}</DialogTitle>
//       <DialogContent>
//         {fields.map((field) => (
//           <TextField
//             key={field.name}
//             autoFocus
//             margin="dense"
//             label={field.label}
//             fullWidth
//             name={field.name}
//             value={formData[field.name]}
//             onChange={onChange}
//           />
//         ))}
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={onClose}>Cancel</Button>
//         <Button onClick={onSave}>Save</Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default CustomDialog;



import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Autocomplete } from '@mui/material';

interface CustomDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  formData: { [key: string]: any };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
  fields: { label: string; name: string; type: string; component?: React.ReactNode }[];
  ComboBoxList?: any[]; // List of items for Autocomplete fields
  SelectedItem?: any; // Currently selected item for Autocomplete fields
  setSelectedItem?: (item: any) => void; // Function to set the selected item for Autocomplete fields
}

const CustomDialog: React.FC<CustomDialogProps> = ({
  open,
  onClose,
  title,
  formData,
  onChange,
  onSave,
  fields,
  ComboBoxList,
  SelectedItem,
  setSelectedItem,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {fields.map((field) => (
          <div key={field.name}>
            {field.component ? (
              field.component
            ) : (
              (() => {
                switch (field.type) {
                  case 'text':
                    return (
                      <TextField
                        margin="dense"
                        label={field.label}
                        fullWidth
                        name={field.name}
                        value={formData[field.name]}
                        onChange={onChange}
                      />
                    );
                  case 'number':
                    return (
                      <TextField
                        margin="dense"
                        label={field.label}
                        fullWidth
                        type="number"
                        name={field.name}
                        value={formData[field.name]}
                        onChange={onChange}
                      />
                    );
                  case 'autocomplete':
                    return (
                      <Autocomplete
                        options={ComboBoxList || []}
                        getOptionLabel={(option) => option.name}
                        value={SelectedItem || null}
                        onChange={(event, newValue) => setSelectedItem && setSelectedItem(newValue)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label={field.label}
                            margin="dense"
                            fullWidth
                            name={field.name}
                          />
                        )}
                      />
                    );
                  default:
                    return null;
                }
              })()
            )}
          </div>
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
