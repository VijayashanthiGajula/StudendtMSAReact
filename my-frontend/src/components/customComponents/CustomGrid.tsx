import React from "react";
import {
  Button,
  CircularProgress,
  Container,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
  Grid,
} from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import CustomBackButton from "./CustomBackButton";

interface CustomGridProps {
  columns: GridColDef[];
  rows: any[];
  onAddClick: () => void;
  onEditClick: (params: GridRenderCellParams) => void;
  onDeleteClick: (id: number) => void;
  status: "loading" | "failed" | "succeeded" | "idle";
  error: string | null;
  listName: string | null;
}

const CustomGrid: React.FC<CustomGridProps> = ({
  columns,
  rows,
  onAddClick,
  onEditClick,
  onDeleteClick,
  status,
  error,
  listName,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (

    // <Container maxWidth="xl" sx={{ py: 3 }}>
    //   <Grid container spacing={3} direction="column">
    //     <Grid item>
    //       <Typography
    //         variant="h4"
    //         sx={{
    //           fontSize: { xs: '1.5rem', sm: '2rem' },
    //           fontWeight: 'bold',
    //           textAlign: { xs: 'center', sm: 'left' }
    //         }}
    //       >
    //         {listName} List
    //       </Typography>
    //     </Grid>

    //     <Grid item>
    //       <Button

    //         variant="contained"
    //         color="primary"
    //         sx={{ mt: 1 }}
    //         onClick={onAddClick}
    //         fullWidth={isMobile}
    //       >
    //         Add {listName}
    //       </Button>
    //     </Grid>

    //     <Grid item>
    //       <Box sx={{
    //         width: "100%",
    //         overflowX: "auto",
    //         margin: '0 auto',
    //         maxWidth: "lg",
    //         mx: 'auto',
    //         '& .MuiDataGrid-root': {
    //           minWidth: 500,
    //         }
    //       }}>
    //         <DataGrid
    //           columns={columns}
    //           rows={rows}

    //           sx={{
    //             "& .MuiDataGrid-columnHeaderTitle": {
    //               fontWeight: "bold",
    //             },
    //             fontSize: { xs: '0.75rem', sm: '0.875rem' },
    //           }}
    //         />
    //       </Box>
    //     </Grid>

    //     <Grid item>
    //       <CustomBackButton />
    //     </Grid>

    //     <Grid item>
    //       {status === "loading" && (
    //         <Box sx={{ textAlign: "center", mt: 2 }}>
    //           <CircularProgress />
    //         </Box>
    //       )}
    //       {status === "failed" && (
    //         <Typography color="error">Error: {error}</Typography>
    //       )}
    //     </Grid>
    //   </Grid>
    // </Container>

    <Grid container spacing={3} direction="column">
      <Grid item>
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: '1.5rem', sm: '2rem' },
            fontWeight: 'bold',
            textAlign: { xs: 'center', sm: 'left' }
          }}
        >
          {listName} List
        </Typography>
      </Grid>

      <Grid item>
        <Button

          variant="contained"
          color="primary"
          sx={{ mt: 1 }}
          onClick={onAddClick}
          fullWidth={isMobile}
        >
          Add {listName}
        </Button>
      </Grid>

      <Grid item>

        <Box sx={{ width: '100%', maxWidth: 'xl', margin: '0 auto' }}>
          <DataGrid
            columns={columns}
            rows={rows}
           
          />
        </Box>
      </Grid>

      <Grid item>
        <CustomBackButton />
      </Grid>

      <Grid item>
        {status === "loading" && (
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <CircularProgress />
          </Box>
        )}
        {status === "failed" && (
          <Typography color="error">Error: {error}</Typography>
        )}
      </Grid>
    </Grid>

  );
};

export default CustomGrid;
