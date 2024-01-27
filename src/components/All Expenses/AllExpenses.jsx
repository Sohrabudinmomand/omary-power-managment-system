import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { DataGrid } from "@mui/x-data-grid";

import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import DialogActions from "@mui/material/DialogActions";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";

// import TextField from "@mui/material/TextField";

const columns = [
  { field: "DATE", headerName: "DATE", flex: 1 },
  { field: "REFERENCE", headerName: "REFERENCE", flex: 1 },
  { field: "ADDEDBY", headerName: "ADDEDBY", flex: 1 },
  { field: "PEOPLE", headerName: "PEOPLE", flex: 1 },
  { field: "AMOUNT", headerName: "AMOUNT", flex: 1 },
  { field: "CATEGORY", headerName: "CATEGORY", flex: 1 },
  { field: "Action", headerName: "Action", flex: 1 },
];

const rows = [
  {
    id: 1,
    DATE: "2024/10/10",
    REFERENCE: "EXP_1117",
    ADDEDBY: "Sohrab momand",
    PEOPLE: "Ahmad",
    AMOUNT: "10,000 AFG",
    CATEGORY: "Paid",
  },
  {
    id: 2,
    DATE: "2024/10/10",
    REFERENCE: "EXP_1117",
    ADDEDBY: "Sohrab momand",
    PEOPLE: "Ahmad",
    AMOUNT: "10,000 AFG",
    CATEGORY: "Paid",
  },
  {
    id: 3,
    DATE: "2024/10/10",
    REFERENCE: "EXP_1117",
    ADDEDBY: "Sohrab momand",
    PEOPLE: "Ahmad",
    AMOUNT: "10,000 AFG",
    CATEGORY: "Paid",
  },
  {
    id: 4,
    DATE: "2024/10/10",
    REFERENCE: "EXP_1117",
    ADDEDBY: "Sohrab momand",
    PEOPLE: "Ahmad",
    AMOUNT: "10,000 AFG",
    CATEGORY: "Paid",
  },
  {
    id: 5,
    DATE: "2024/10/10",
    REFERENCE: "EXP_1117",
    ADDEDBY: "Sohrab momand",
    PEOPLE: "Ahmad",
    AMOUNT: "10,000 AFG",
    CATEGORY: "Paid",
  },
  {
    id: 6,
    DATE: "2024/10/10",
    REFERENCE: "EXP_1117",
    ADDEDBY: "Sohrab momand",
    PEOPLE: "Ahmad",
    AMOUNT: "10,000 AFG",
    CATEGORY: "Paid",
  },
  {
    id: 7,
    DATE: "2024/10/10",
    REFERENCE: "EXP_1117",
    ADDEDBY: "Sohrab momand",
    PEOPLE: "Ahmad",
    AMOUNT: "10,000 AFG",
    CATEGORY: "Paid",
  },
  {
    id: 8,
    DATE: "2024/10/10",
    REFERENCE: "EXP_1117",
    ADDEDBY: "Sohrab momand",
    PEOPLE: "Ahmad",
    AMOUNT: "10,000 AFG",
    CATEGORY: "Paid",
  },
];

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const AllExpenses = () => {
  const [openCreateModel, setOpencreateModel] = React.useState(false);

  const handleClickOpen = () => {
    setOpencreateModel(true);
  };

  const handleClickClose = () => {
    setOpencreateModel(false);
  };

  return (
    <div className="w-full h-auto flex flex-col p-2">
      <div className="w-fit h-fit flex flex-row m-4">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Expneses
          </Link>
          <Typography color="text.primary">All Expneses</Typography>
        </Breadcrumbs>
      </div>
      <div className="w-auto h-[1px] bg-[#b2bec3] m-4"></div>
      <div className="w-auto h-fit flex flex-row justify-between m-4">
        <div>
          <TextField
            variant="outlined"
            placeholder="search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "5px",
                height: "38px",
              },
            }}
          />
        </div>
        <div>
          <Stack spacing={2} direction="row" className="mt-2">
            <Button variant="outlined">Filter</Button>
            <Button onClick={handleClickOpen} variant="contained">
              Create
            </Button>
          </Stack>
        </div>
      </div>
      {/* the data table starts here */}
      <div className="h-auto w-full p-4">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          getRowId={(row) => row.id}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
        />
      </div>

      {/* the data table ends here */}
      {/* the dilog box or window box starts here */}
      <div>
        <BootstrapDialog
          onClose={handleClickClose}
          aria-labelledby="customized-dialog-title"
          open={openCreateModel}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Create
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClickClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.gray && theme.palette.gray[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <div className="w-[100%] h-[1px] bg-[#b2bec3] m-4"></div>

          <div className="flex flex-row">
            <div className="m-4">
              <TextField
                id="outlined-basic"
                label="Name *"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: "50px",
                    borderRadius: "5px",
                  },
                  width: "100%",
                }}
              />
            </div>

            <div className="m-4">
              <TextField
                id="outlined-basic"
                label="Expense Category *"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: "50px",
                    borderRadius: "5px",
                    "&:focus": {
                      borderColor: "#000",
                    },
                  },
                  width: "300px",
                }}
              />
            </div>
          </div>

          <div className="w-auto h-auto flex flex-row">
            <div className="m-4">
              <TextField
                id="outlined-basic"
                label="Name *"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: "50px",
                    borderRadius: "5px",
                    "&:focus": {
                      borderColor: "#000",
                    },
                  },
                  width: "300px",
                }}
              />
            </div>

            <div className="m-4">
              <TextField
                id="outlined-basic"
                label="Expense Category *"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: "50px",
                    borderRadius: "5px",
                    "&:focus": {
                      borderColor: "#000",
                    },
                  },
                  width: "300px",
                }}
              />
            </div>
          </div>

          <div className="w-auto h-auto flex flex-row">
            <div className="m-4">
              <TextField
                id="outlined-basic"
                label="Name *"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: "50px",
                    borderRadius: "5px",
                    "&:focus": {
                      borderColor: "#000",
                    },
                  },
                  width: "100%",
                }}
              />
            </div>
          </div>
          <DialogActions>
            <Button autoFocus onClick={handleClickClose} variant="contained">
              Submite
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>
      {/* the dilog box or window box ends here */}
    </div>
  );
};

export default AllExpenses;
