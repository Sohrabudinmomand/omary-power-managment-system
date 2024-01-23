import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { DataGrid } from "@mui/x-data-grid";

const AllExpenses = () => {

  {filed: "id", headerName: "ID", width: 70},
  {filed: "firstName", headerName: "First Name", width: 130},
  {filed: "lasName", headerName: "Last Name", width: 130},
  {
    field: "age", 
    headerName: "Age", 
    type: "number", 
    width: 90,
  },
  {
    fi
  }



  return (
    <div className="p-2">
      <div className="w-full h-screen flex flex-col">
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
              <Button variant="contained">Create</Button>
            </Stack>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default AllExpenses;
