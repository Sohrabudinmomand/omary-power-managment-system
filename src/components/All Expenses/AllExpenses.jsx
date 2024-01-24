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
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

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

const filter = createFilterOptions();

const AllExpenses = () => {
  const [openCreateModel, setOpencreateModel] = React.useState(false);

  const handleClickOpen = () => {
    setOpencreateModel(true);
  };

  const handleClickClose = () => {
    setOpencreateModel(false);
  };

  return (
    <div className="w-full h-screen flex flex-col p-2">
      <div className="w-full h-auto flex flex-row my-6">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Expneses
          </Link>
          <Typography color="text.primary">All Expneses</Typography>
        </Breadcrumbs>
      </div>
      <div className="w-full h-auto flex flex-row justify-between">
        <div>
          <TextField
            variant="outlined"
            fullWidth
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

                "&.Mui-focused": {
                  borderColor: "Black",
                },
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
      <div className="h-[400] w-full">
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOption={[5, 10]}
          checkboxSelection
        />
      </div>
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
          <Autocomplete
            filterOptions={(options, params) => {
              const filtered = filter(options, params);

              const { inputValue } = params;
              // Suggest the creation of a new value
              const isExisting = options.some(
                (option) => inputValue === option.title
              );
              if (inputValue !== "" && !isExisting) {
                filtered.push({
                  inputValue,
                  title: `Add "${inputValue}"`,
                });
              }

              return filtered;
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            id="free-solo-with-text-demo"
            getOptionLabel={(option) => {
              // Value selected with enter, right from the input
              if (typeof option === "string") {
                return option;
              }
              // Add "xxx" option created dynamically
              if (option.inputValue) {
                return option.inputValue;
              }
              // Regular option
              return option.title;
            }}
            renderOption={(props, option) => <li {...props}>{option.title}</li>}
            sx={{ width: 300 }}
            freeSolo
            renderInput={(params) => (
              <TextField {...params} label="Free solo with text demo" />
            )}
          />
          <DialogActions>
            <Button autoFocus onClick={handleClickClose}>
              Save changes
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>
    </div>
  );
};

export default AllExpenses;
