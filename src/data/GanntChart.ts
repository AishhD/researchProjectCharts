interface GanttChartData {
        [key: string]: {taskName: string
            resource: string
        startDate: Date
        endDate: Date
        duration: number | null
        percentageComplete: number
        dependencies: string}
}

export const data: GanttChartData= {
    "Datasets":{
        taskName: "Find datasets",
        resource: "Complete",
        startDate: new Date(2022, 11, 1),
        endDate: new Date(2022, 11, 31),
        duration: null,
        percentageComplete: 100,
        dependencies: "",
      },
    "Background": {
        taskName: "..Finish background research",
        resource: "Incomplete",
        startDate: new Date(2023, 0,3),
        endDate: new Date(2023, 1, 26),
        duration: null,
        percentageComplete: 100,
        dependencies: "Datasets",
      },
    "ML":  {
        taskName: "Write a successful \n ML algorithm",
        resource: "Incomplete",
        startDate: new Date(2023, 1, 27),
        endDate: new Date(2023, 3,9),
        duration: null,
        percentageComplete: 100,
        dependencies: "Background",
      },
    "Statistics":  {
        taskName: "Present a statistical \n analysis of the results",
        resource: "Incomplete",
        startDate: new Date(2023, 3, 10),
        endDate: new Date(2023, 5, 18),
        duration: null,
        percentageComplete: 100,
        dependencies: "ML",
      },
    "Conclusion":  {
        taskName: "Conclude the dissertation",
        resource: "Incomplete",
        startDate: new Date(2023, 5, 19),
        endDate: new Date(2023, 6, 2),
        duration: null,
        percentageComplete: 100,
        dependencies: "Statistics",
      },
    "Finalise":  {
        taskName: " Finalise the dissertation",
        resource: "Incomplete",
        startDate: new Date(2023, 6, 3),
        endDate: new Date(2023, 6, 16),
        duration: null,
        percentageComplete: 100,
        dependencies: "Conclusion",
      },
    "Buffer":  {
        taskName: "Buffer time",
        resource: "Incomplete",
        startDate: new Date(2023, 6, 17),
        endDate: new Date(2023, 6, 31),
        duration: null,
        percentageComplete: 100,
        dependencies: "",
      },
    "Submission":  {
        taskName: "Submit the dissertation",
        resource: "Incomplete",
        startDate: new Date(2023, 7, 1),
        endDate: new Date(2023, 7, 2),
        duration: null,
        percentageComplete: 100,
        dependencies: "Finalise",
      },
  };