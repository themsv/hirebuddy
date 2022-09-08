export function filterCandidates(arr) {
  let tempObj = [];
  arr.map((candidate) => {
    const { interviewData, finalFeedback, id } = candidate;
    let tempData = {
      id,
      ...interviewData,
      ...finalFeedback,
      candidateName: `${interviewData.candidateFirstName} ${interviewData.candidateLastName}`,
      interviewerName: `${interviewData.interviewerFirstName} ${interviewData.interviewerFirstName}`,
    };
    tempObj.push(tempData);
  });
  return tempObj;
}

export const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

export const getComparator = (order, orderBy) => {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

export const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
};
