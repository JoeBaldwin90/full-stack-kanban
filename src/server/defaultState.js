export const defaultState = {
  session: {
    isAuthenticated: false
  },
  users: [{
      id: "U1",
      name: "Dev",
    },
    {
      id: "U2",
      name: "Joe",
    },
    {
      id: "U3",
      name: "Hannah",
    },
  ],
  groups: [{
      name: "To Do",
      id: "G1",
      owner: "U1",
    },
    {
      name: "Doing",
      id: "G2",
      owner: "U1",
    },
    {
      name: "Done",
      id: "G3",
      owner: "U1",
    },
  ],
  tasks: [{
      name: "Do Tests",
      id: "T1",
      group: "G1",
      owner: "U1",
      isComplete: false,
    },
    {
      name: "Refactor Tests",
      id: "T2",
      group: "G1",
      owner: "U1",
      isComplete: false,
    },
    {
      name: "Meet CTO",
      id: "T3",
      group: "G2",
      owner: "U1",
      isComplete: false,
    },
    {
      name: "Make Coffee",
      id: "T4",
      group: "G3",
      owner: "U2",
      isComplete: true,
    },
    {
      name: "Shred shady docs",
      id: "T5",
      group: "G3",
      owner: "U1",
      isComplete: true,
    },
  ],
  comments: [{
      owner: "U2",
      id: "C1",
      task: "T1",
      content: "Great work!",
    },
    {
      owner: "U3",
      id: "C2",
      task: "T4",
      content: "Less milk next time please.",
    },
  ],
};