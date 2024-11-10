export const ITEMS_PER_PAGE = 5;

export const teachersColumns = [
  {
    name: "Info",
    accessor: "info"
  },
  {
    name: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell"
  },
  {
    name: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell"
  },
  {
    name: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell"
  },
  {
    name: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell"
  },
  {
    name: "Address",
    accessor: "address",
    className: "hidden lg:table-cell"
  },
  {
    name: "Actions",
    accessor: "actions"
  }
];

export const studentsColumns = [
  {
    name: "Info",
    accessor: "info"
  },
  {
    name: "Student ID",
    accessor: "studentId",
    className: "hidden md:table-cell"
  },
  {
    name: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell"
  },
  {
    name: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell"
  },
  {
    name: "Address",
    accessor: "address",
    className: "hidden lg:table-cell"
  },
  {
    name: "Actions",
    accessor: "actions"
  }
];

export const parentsColumns = [
  {
    name: "Info",
    accessor: "info"
  },
  {
    name: "Student Name",
    accessor: "students",
    className: "hidden md:table-cell"
  },

  {
    name: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell"
  },
  {
    name: "Address",
    accessor: "address",
    className: "hidden lg:table-cell"
  },
  {
    name: "Actions",
    accessor: "actions"
  }
];
export const subjectColumns = [
  {
    name: "Subject Name",
    accessor: "subjectName"
  },
  {
    name: "Teachers",
    accessor: "teachers",
    className: "hidden md:table-cell"
  },

  {
    name: "Actions",
    accessor: "actions"
  }
];

export const classColumns = [
  {
    name: "Classes Name",
    accessor: "classesName"
  },
  {
    name: "Capcity",
    accessor: "capcity",
    className: "hidden md:table-cell"
  },
  {
    name: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell"
  },
  {
    name: "Supervisor",
    accessor: "supervisor",
    className: "hidden lg:table-cell"
  },
  {
    name: "Actions",
    accessor: "actions"
  }
];

export const lessonColumns = [
  {
    name: "Subject Name",
    accessor: "subjectName"
  },
  {
    name: "Class",
    accessor: "class",
    className: "hidden md:table-cell"
  },
  {
    name: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell"
  },

  {
    name: "Actions",
    accessor: "actions"
  }
];

export const examsColumns = [
  {
    name: "Subject ",
    accessor: "subject"
  },
  {
    name: "Class",
    accessor: "class",
    className: "hidden md:table-cell"
  },
  {
    name: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell"
  },

  {
    name: "Date",
    accessor: "date",
    className: "hidden md:table-cell"
  },

  {
    name: "Actions",
    accessor: "actions"
  }
];

export const assignmentColumns = [
  {
    name: "Subject ",
    accessor: "subject"
  },
  {
    name: "Class",
    accessor: "class",
    className: "hidden md:table-cell"
  },
  {
    name: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell"
  },

  {
    name: "Due Date",
    accessor: "dueDate",
    className: "hidden md:table-cell"
  },

  {
    name: "Actions",
    accessor: "actions"
  }
];

export const resultsColumns = [
  {
    name: "Subject ",
    accessor: "subject"
  },
  {
    name: "Student",
    accessor: "student",
    className: "hidden md:table-cell"
  },
  {
    name: "Score",
    accessor: "score",
    className: "hidden md:table-cell"
  },

  {
    name: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell"
  },
  {
    name: "Class",
    accessor: "class",
    className: "hidden lg:table-cell"
  },
  {
    name: "Date",
    accessor: "date",
    className: "hidden md:table-cell"
  },
  {
    name: "Actions",
    accessor: "actions"
  }
];
export const eventsColumns = [
  {
    name: "Title ",
    accessor: "title"
  },
  {
    name: "Class",
    accessor: "class",
    className: "hidden md:table-cell"
  },
  {
    name: "Date",
    accessor: "date",
    className: "hidden md:table-cell"
  },

  {
    name: "Start Time",
    accessor: "startTime",
    className: "hidden md:table-cell"
  },
  {
    name: "End Time",
    accessor: "endTime",
    className: "hidden md:table-cell"
  },

  {
    name: "Actions",
    accessor: "actions"
  }
];
export const announcementsColumns = [
  {
    name: "Title ",
    accessor: "title"
  },
  {
    name: "Class",
    accessor: "class",
    className: "hidden md:table-cell"
  },
  {
    name: "Date",
    accessor: "date",
    className: "hidden md:table-cell"
  },

  {
    name: "Actions",
    accessor: "actions"
  }
];
