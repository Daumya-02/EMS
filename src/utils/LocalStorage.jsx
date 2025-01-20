const admin = [
  {
    "id": 1,
    "name": "Aarav",
    "email": "admin@example.com",
    "password": "123"
  }
];

const employees = [
  {
    "id": 1,
    "name": "Rohan",
    "email": "employee1@example.com",
    "password": "123",
    "task_count": {
      "new": 1,
      "active": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "new_task": true,
        "active_task": false,
        "completed_task": false,
        "failed_task": false,
        "title": "Prepare Q1 report",
        "description": "Prepare and complete the quarterly report for Q1, ensuring accuracy for management.",
        "category": "Work",
        "date": "2025-01-20"
      },
      {
        "new_task": false,
        "active_task": true,
        "completed_task": false,
        "failed_task": false,
        "title": "Join team meeting",
        "description": "Participate in the scheduled team meeting and discuss projects and milestones actively.",
        "category": "Meeting",
        "date": "2025-01-21"
      },
      {
        "new_task": false,
        "active_task": false,
        "completed_task": true,
        "failed_task": false,
        "title": "Provide project feedback",
        "description": "Provide detailed feedback to improve the project quality and ensure on-time delivery.",
        "category": "Review",
        "date": "2025-01-15"
      }
    ]
  },
  {
    "id": 2,
    "name": "Aisha",
    "email": "employee2@example.com",
    "password": "123",
    "task_count": {
      "new": 1,
      "active": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "new_task": true,
        "active_task": false,
        "completed_task": false,
        "failed_task": false,
        "title": "Update documentation",
        "description": "Update documentation to reflect changes and improvements made to the website functionality.",
        "category": "Documentation",
        "date": "2025-01-22"
      },
      {
        "new_task": false,
        "active_task": true,
        "completed_task": false,
        "failed_task": false,
        "title": "Fix frontend bugs",
        "description": "Resolve reported frontend bugs to enhance user experience and overall responsiveness.",
        "category": "Development",
        "date": "2025-01-23"
      },
      {
        "new_task": false,
        "active_task": false,
        "completed_task": true,
        "failed_task": false,
        "title": "Review feature code",
        "description": "Examine the new feature's code for adherence to standards and best practices.",
        "category": "Code Review",
        "date": "2025-01-15"
      },
      {
        "new_task": false,
        "active_task": false,
        "completed_task": false,
        "failed_task": true,
        "title": "Prepare presentation slides",
        "description": "Design and prepare slides for the upcoming project presentation to management.",
        "category": "Presentation",
        "date": "2025-01-18"
      }
    ]
  },
  {
    "id": 3,
    "name": "Aditya",
    "email": "employee3@example.com",
    "password": "123",
    "task_count": {
      "new": 1,
      "active": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "new_task": true,
        "active_task": false,
        "completed_task": false,
        "failed_task": false,
        "title": "Design database schema",
        "description": "Create and optimize a schema for the new app's database to improve efficiency.",
        "category": "Database",
        "date": "2025-01-19"
      },
      {
        "new_task": false,
        "active_task": true,
        "completed_task": false,
        "failed_task": false,
        "title": "Test implemented features",
        "description": "Conduct quality assurance testing of newly implemented features in the staging environment.",
        "category": "Testing",
        "date": "2025-01-20"
      },
      {
        "new_task": false,
        "active_task": false,
        "completed_task": true,
        "failed_task": false,
        "title": "Deploy app to production",
        "description": "Verify functionality and successfully deploy the app to the production environment.",
        "category": "Deployment",
        "date": "2025-01-15"
      }
    ]
  },
  {
    "id": 4,
    "name": "Kavya",
    "email": "employee4@example.com",
    "password": "123",
    "task_count": {
      "new": 1,
      "active": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "new_task": true,
        "active_task": false,
        "completed_task": false,
        "failed_task": false,
        "title": "Setup project repository",
        "description": "Initialize the project repository with the necessary folder structure and initial configurations.",
        "category": "Setup",
        "date": "2025-01-20"
      },
      {
        "new_task": false,
        "active_task": true,
        "completed_task": false,
        "failed_task": false,
        "title": "Test API endpoints",
        "description": "Develop and execute unit tests for API endpoints to ensure functionality.",
        "category": "Testing",
        "date": "2025-01-21"
      },
      {
        "new_task": false,
        "active_task": false,
        "completed_task": true,
        "failed_task": false,
        "title": "Optimize database queries",
        "description": "Improve the performance of database queries by reducing response time for actions.",
        "category": "Optimization",
        "date": "2025-01-15"
      }
    ]
  },
  {
    "id": 5,
    "name": "Priya",
    "email": "employee5@example.com",
    "password": "123",
    "task_count": {
      "new": 1,
      "active": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "new_task": true,
        "active_task": false,
        "completed_task": false,
        "failed_task": false,
        "title": "Design a new feature UI",
        "description": "Create an intuitive and visually appealing UI design for the new feature.",
        "category": "Design",
        "date": "2025-01-22"
      },
      {
        "new_task": false,
        "active_task": true,
        "completed_task": false,
        "failed_task": false,
        "title": "Create detailed wireframes",
        "description": "Illustrate the layout and user interactions by preparing detailed wireframes for the app.",
        "category": "Design",
        "date": "2025-01-23"
      },
      {
        "new_task": false,
        "active_task": false,
        "completed_task": true,
        "failed_task": false,
        "title": "Fix layout inconsistencies",
        "description": "Resolve layout inconsistencies across mobile devices for a seamless user experience.",
        "category": "Development",
        "date": "2025-01-15"
      },
      {
        "new_task": false,
        "active_task": false,
        "completed_task": false,
        "failed_task": true,
        "title": "Conduct usability testing",
        "description": "Perform usability testing to gather feedback and enhance product design and functionality.",
        "category": "Testing",
        "date": "2025-01-18"
      }
    ]
  }
];


  
export const setLocalStorage =() =>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () =>{
    const employeesD = JSON.parse(localStorage.getItem('employees'))
    const adminD = JSON.parse(localStorage.getItem('admin'))
    return {employeesD, adminD}
}