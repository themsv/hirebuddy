import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

import {
  StyledTableCell,
  StyledTableRow,
  TableText,
  LightTooltip,
} from "./styles";
import { getComparator, stableSort, filterCandidates } from "./sorting";
import Header from "./header";

const ListOfInterviews = ({ candidateDetails, userDetails }) => {
  // const candidateData = props.candidateDetails;
  // const user = props.userDetails;

  const filteredCandidate = userDetails.isAdmin
    ? candidateDetails
    : candidateDetails.filter(
        (item) =>
          item.interviewData.interviewerOracleId === userDetails.oracleId
      );
  // console.log('filteredCandidate', filteredCandidate);

  const originalData = filterCandidates(filteredCandidate);

  const navigate = useNavigate();

  const [rows, setRows] = useState(originalData);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Sorting
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  //Pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSortAndPagination = () => {
    return stableSort(rows, getComparator(order, orderBy)).slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
  };

  //Searching
  const handleRequestSearch = (value) => {
    const filteredData = originalData.filter((item) =>
      item.interviewDate.includes(value)
    );
    setRows(filteredData);
  };

  //Filtering

  const handleOutcomeFilter = (event) => {
    setRows(
      originalData.filter(
        (item) => item.outcome === event.currentTarget.dataset.myValue
      )
    );
  };

  const handleCareerAppliedFilter = (event) => {
    setRows(
      originalData.filter(
        (item) => item.candidateCareerStageInterviewedFor === event.target.value
      )
    );
  };

  const handleCareerSelectedFilter = (event) => {
    setRows(
      originalData.filter(
        (item) => item.recommendedCareerStage === event.target.value
      )
    );
  };

  //Navigation

  const handleCickHandler = (candidateId) => (event) => {
    navigate("/candidate-details/" + candidateId);
  };

  return (
    // <BoxShadow></BoxShadow>
    <Paper
      sx={{ width: "100%", pt: 1, pl: 2, pr: 2, mt: 2 }}
      data-testid="list-of-interviews"
    >
      <h2
        data-testid="list-of-interviews-text"
        style={{
          textAlign: "center",
          fontSize: "22px",
          margin: "10px",
          fontWeight: 600,
        }}
      >
        List Of Interview Details
      </h2>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table
          stickyHeader
          aria-label="sticky table"
          sx={{ borderSpacing: "0.7px" }}
          data-testid="list-of-interviews-table"
        >
          <Header
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            onRequestSearch={handleRequestSearch}
            onOutcomeFilter={handleOutcomeFilter}
            onCareerAppliedFilter={handleCareerAppliedFilter}
            onCareerSelectedFilter={handleCareerSelectedFilter}
            rowCount={rows.length}
          />

          <TableBody>
            {handleSortAndPagination().length > 0 ? (
              handleSortAndPagination().map((row) => {
                return (
                  <StyledTableRow hover key={row.id}>
                    <LightTooltip title="View Details">
                      <StyledTableCell
                        component="th"
                        scope="row"
                        style={{
                          cursor: "pointer",
                          color: "#EB5757",
                        }}
                        onClick={handleCickHandler(row.id)}
                      >
                        {row.candidateName}
                      </StyledTableCell>
                    </LightTooltip>
                    <StyledTableCell>{row.candidateEmail}</StyledTableCell>
                    <StyledTableCell>{row.candidatePhone}</StyledTableCell>
                    <StyledTableCell>{row.candidateExperience}</StyledTableCell>
                    <StyledTableCell>{row.interviewDate}</StyledTableCell>
                    <StyledTableCell>
                      {row.candidateCareerStageInterviewedFor}
                    </StyledTableCell>
                    <StyledTableCell>{row.outcome}</StyledTableCell>
                    <StyledTableCell>
                      {row.recommendedCareerStage}
                    </StyledTableCell>
                    <StyledTableCell>{row.interviewerName}</StyledTableCell>
                    <StyledTableCell>{row.interviewerOracleId}</StyledTableCell>
                    <StyledTableCell>{row.interviewerEmail}</StyledTableCell>
                    <StyledTableCell>
                      {row.interviewerCareerStage}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={12}>
                  <TableText>No Records Found!!</TableText>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default ListOfInterviews;
