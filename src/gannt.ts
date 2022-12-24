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
    height: 275
  };

    const chartDiv = document.getElementById('gannt_div')
  var chart = chartDiv && new window.google.visualization.Gantt(chartDiv);

  chart && chart.draw(ganttData, options);
}