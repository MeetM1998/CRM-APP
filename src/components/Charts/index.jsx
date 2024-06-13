import Chart from "react-apexcharts";

const options = {
  chart: {
    id: "area-chart",
    fontFamily: "inherit",
    type: "area",
    height: 150,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    sparkline: {
      enabled: true,
    },
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: true,
      position: "front",
      stroke: {
        color: "#E4E6EF",
        width: 1,
        dashArray: 3,
      },
    },
    tooltip: {
      enabled: false,
    },
    convertedCatToNumeric: true,
  },
  yaxis: {
    labels: {
      show: false,
      style: {
        colors: "#181C32",
        fontSize: "12px",
      },
    },
  },
};

const AreaChart = ({ chartData }) => {
  return (
    <div>
      <div></div>
      <Chart
        options={options}
        series={[{ name: "Data", data: chartData, color: "#4CAF50" }]}
        type="area"
        height={270}
      />
    </div>
  );
};

export default AreaChart;
