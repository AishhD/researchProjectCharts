import { drawChart } from './gannt';
import './style.css'

window.google.charts.load('current', {'packages':['gantt']});
window.google.charts.setOnLoadCallback(drawChart);

