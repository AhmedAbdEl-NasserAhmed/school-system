import { RouteAccessMap } from "@/types/types";

export const ITEMS_PER_PAGE = 10;

export const routeAccessMap: RouteAccessMap = {
  "/admin(.*)": ["admin"],
  "/student(.*)": ["student"],
  "/teacher(.*)": ["teacher"],
  "/parent(.*)": ["parent"],
  "/list/teachers": ["admin", "teacher"],
  "/list/students": ["admin", "teacher"],
  "/list/parents": ["admin", "teacher"],
  "/list/subjects": ["admin"],
  "/list/classes": ["admin", "teacher"],
  "/list/exams": ["admin", "teacher", "student", "parent"],
  "/list/assignments": ["admin", "teacher", "student", "parent"],
  "/list/results": ["admin", "teacher", "student", "parent"],
  "/list/attendance": ["admin", "teacher", "student", "parent"],
  "/list/events": ["admin", "teacher", "student", "parent"],
  "/list/announcements": ["admin", "teacher", "student", "parent"]
};

export function generateColumns(type: string, role: string = "") {
  switch (type) {
    case "teachers": {
      return [
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
    }
    case "students": {
      return [
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
    }
    case "parents": {
      return [
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
        ...(role === "admin"
          ? [
              {
                name: "Actions",
                accessor: "actions"
              }
            ]
          : [])
      ];
    }
    case "subjects": {
      return [
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
    }
    case "classes": {
      return [
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
        ...(role === "admin"
          ? [
              {
                name: "Actions",
                accessor: "actions"
              }
            ]
          : [])
      ];
    }
    case "lessons": {
      return [
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

        ...(role === "admin"
          ? [
              {
                name: "Actions",
                accessor: "actions"
              }
            ]
          : [])
      ];
    }
    case "exams": {
      return [
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
        ...(role === "admin" || role === "teacher"
          ? [
              {
                name: "Actions",
                accessor: "actions"
              }
            ]
          : [])
      ];
    }
    case "assignments": {
      return [
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

        ...(role === "admin" || role === "teacher"
          ? [
              {
                name: "Actions",
                accessor: "actions"
              }
            ]
          : [])
      ];
    }
    case "results": {
      return [
        {
          name: "Title ",
          accessor: "title"
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
        ...(role === "admin" || role === "teacher"
          ? [
              {
                name: "Actions",
                accessor: "actions"
              }
            ]
          : [])
      ];
    }
    case "events": {
      return [
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
        ...(role === "admin"
          ? [
              {
                name: "Actions",
                accessor: "actions"
              }
            ]
          : [])
      ];
    }
    case "announcements": {
      return [
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

        ...(role === "admin"
          ? [
              {
                name: "Actions",
                accessor: "actions"
              }
            ]
          : [])
      ];
    }
    default:
      return [];
  }
}

export const announcements = [
  {
    id: 1,
    title: "Team Outing",
    date: "2024-11-15",
    description: "Join us for a fun day out with the team."
  },
  {
    id: 2,
    title: "Product Launch",
    date: "2024-12-01",
    description: "Exciting new product release; don’t miss it!"
  },
  {
    id: 3,
    title: "Year-End Party",
    date: "2024-12-20",
    description: "Celebrate the year with food, music, and awards."
  }
];
