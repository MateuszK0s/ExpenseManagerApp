import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  const displayCharts = props.dataPoints.map((dataPoint) => (
    <ChartBar
      key={dataPoint.label}
      value={dataPoint.value}
      maxValue={totalMaximum}
      label={dataPoint.label}
    />
  ));

  return <div className="chart">{displayCharts}</div>;
};

export default Chart;
