import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import React, { useEffect } from "react";

const Chart = () => {
  useEffect(() => {
    /* Chart code */
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    let root = am5.Root.new("chartdiv");
    root._logo.dispose();

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        startAngle: 180,
        endAngle: 360,
        layout: root.verticalLayout,
        innerRadius: am5.percent(50),
        // outerRadius: am5.percent(80),
        height: am5.percent(80)
      })
    );

    // Create series
    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        startAngle: 180,
        endAngle: 360,
        valueField: "value",
        categoryField: "category",
        alignLabels: false,
      })
    );

    series.states.create("hidden", {
      startAngle: 180,
      endAngle: 180,
    });

    series.slices.template.setAll({
      cornerRadius: 8,
    });

    series.ticks.template.setAll({
      forceHidden: true,
    });

    // Set data
    series.data.setAll([
      { value: 10, category: "Team A" },
      { value: 9, category: "Team B" },
      { value: 6, category: "Team C" },
      { value: 5, category: "Team D" },
      { value: 4, category: "Team E" },
      { value: 3, category: "Team F" },
      { value: 1, category: "Team G" },
    ]);

    series.appear(500, 100);

    return () => {
      root.dispose();
    };
  }, []);

  return(
    <>
        {/* <Button variant="contained">Teamwise Progress</Button>
        <Button variant="contained"> Progress</Button> */}
        <div id="chartdiv" style={{ width: "100%", height: "550px" }}></div>
    </>
  )
};

export default Chart;
