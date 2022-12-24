import { data } from "./data/GanntChart";

export function drawChart() {
  var ganttData = new window.google.visualization.DataTable();
  ganttData.addColumn('string', 'Task ID');
  ganttData.addColumn('string', 'Task Name');
  ganttData.addColumn('string', 'Resource');
  ganttData.addColumn('date', 'Start Date');
  ganttData.addColumn('date', 'End Date');
  ganttData.addColumn('number', 'Duration');
  ganttData.addColumn('number', 'Percent Complete');
  ganttData.addColumn('string', 'Dependencies');

  for (const [key, value] of Object.entries(data)) {
    ganttData.addRows([
      [
        key,
        value.taskName,
        value.resource,
        value.startDate,
        value.endDate,
        value.duration,
        value.percentageComplete,
        value.dependencies,
      ],
    ]);
  }

  var options = {
    height: 1000,
    width:1000,
    gantt: {
      labelStyle: {
        fontName: "Arial",
        fontSize: 18,
        color: "#000000"
      },
      palette: [
        {
          color: "#000000",
          dark: "#2a56c6",
          light: "#c6dafc",
        },
        {
          color: "#000000",
          dark: "#5e97f6",
          light: "#f4c7c3",
        },
        {
          color: "#f2a600",
          dark: "#ee8100",
          light: "#fce8b2",
        },
        {
          color: "#0f9d58",
          dark: "#0b8043",
          light: "#b7e1cd",
        },
        {
          "color": "#00acc1",
          "dark": "#00838f",
          "light": "#b2ebf2"
        },
        {
          "color": "#ff7043",
          "dark": "#e64a19",
          "light": "#ffccbc"
        },
        {
          "color": "#9e9d24",
          "dark": "#827717",
          "light": "#f0f4c3"
        },
        {
          "color": "#5c6bc0",
          "dark": "#3949ab",
          "light": "#c5cae9"
        },
        {
          "color": "#f06292",
          "dark": "#e91e63",
          "light": "#f8bbd0"
        },
        {
          "color": "#00796b",
          "dark": "#004d40",
          "light": "#b2dfdb"
        },
        {
          "color": "#c2185b",
          "dark": "#880e4f",
          "light": "#f48fb1"
        }
      ], 
    },
  };

    const chartDiv = document.getElementById('gannt_div')
  var chart = chartDiv && new window.google.visualization.Gantt(chartDiv);

  chart && chart.draw(ganttData, options);
}