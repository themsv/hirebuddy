export const RATINGS = [
  { key: 0, value: "No experience", iconColor: "#FE414D" },
  { key: 1, value: "Theoretical Knowledge", iconColor: "#EB5757" },
  { key: 2, value: "Can code with guidance", iconColor: "#FFE63B" },
  { key: 3, value: "Confident hands-on developer", iconColor: "#00E6C3" },
];

export const CAREERSTAGES = [
  { key: "71", value: "Junior Associate" },
  { key: "72", value: "Associate L1" },
  { key: "73", value: "Associate L2" },
  { key: "74", value: "Sr. Associate L1" },
  { key: "75", value: "Sr. Associate L2" },
  { key: "76", value: "Manager" },
  { key: "78", value: "Sr. Manager" },
];
export const OUTCOMEVALUES = [
  { key: "81", value: "selected" },
  { key: "82", value: "rejected" },
];
export const ISTRAINABLE = [
  { key: "91", value: "Yes" },
  { key: "92", value: "No" },
];
export const TRAININGS = [
  { key: "101", value: "HTML" },
  { key: "102", value: "CSS" },
  { key: "103", value: "OOJS - Advanced" },
  { key: "104", value: "Functional JS - Advanced" },
  { key: "105", value: "ReactJS - Advanced" },
];

export const HEADERCELLS = [
  { id: "candidate", label: "Candidate" },
  { id: "interview", label: "Interview" },
  { id: "interviewer", label: "Interviewer" },
];

export const COLUMNCELLS = [
  //Candidate Fields
  {
    id: "candidateName",
    label: "Name",
    numeric: false,
    minWidth: 50,
  },
  {
    id: "candidateEmail",
    label: "Email",
    minWidth: 50,
    disableSorting: true,
  },
  {
    id: "candidatePhone",
    label: "Phone",
    minWidth: 50,
    disableSorting: true,
  },
  {
    id: "candidateExperience",
    label: "Experience",
    numeric: true,
    minWidth: 40,
  },

  //Interview Fields
  {
    id: "interviewDate",
    label: "Date",
    numeric: true,
    minWidth: 50,
    requestSearch: true,
  },
  {
    id: "candidateCareerStageInterviewedFor",
    label: "CareerStage Applied",
    minWidth: 165,
    disableSorting: true,
    requestFilter: true,
  },
  {
    id: "outcome",
    label: "Outcome",
    minWidth: 90,
    disableSorting: true,
    requestFilter: true,
  },
  {
    id: "recommendedCareerStage",
    label: "CareerStage Selected",
    minWidth: 175,
    disableSorting: true,
    requestFilter: true,
  },

  //Interviewer Fields
  {
    id: "interviewerName",
    label: "Name",
    minWidth: 50,
    numeric: false,
  },
  {
    id: "interviewerOracleId",
    label: "OracleID",
    minWidth: 50,
    numeric: true,
  },
  {
    id: "interviewerEmail",
    label: "Email",
    minWidth: 50,
    disableSorting: true,
  },
  {
    id: "interviewerCareerStage",
    label: "CareerStage",
    minWidth: 90,
    disableSorting: true,
  },
];
