function initCharts() {
  Chart.defaults.global = {
    // Boolean - Whether to animate the chart
      animation: true,
    // Number - Number of animation steps
      animationSteps: 60,
    // String - Animation easing effect
      animationEasing: "easeOutQuart",
    // Boolean - If we should show the scale at all
      showScale: true,
    // Boolean - If we want to override with a hard coded scale
      scaleOverride: false,
    // ** Required if scaleOverride is true **
    // Number - The number of steps in a hard coded scale
      scaleSteps: null,
    // Number - The value jump in the hard coded scale
      scaleStepWidth: null,
    // Number - The scale starting value
      scaleStartValue: null,
    // String - Colour of the scale line
      scaleLineColor: "rgba(0,0,0,.1)",
    // Number - Pixel width of the scale line
      scaleLineWidth: 1,
    // Boolean - Whether to show labels on the scale
      scaleShowLabels: true,
    // Interpolated JS string - can access value
      scaleLabel: "<%=value%>",
    // Boolean - Whether the scale should stick to integers, not floats even if
	// drawing space is there
      scaleIntegersOnly: true,
    // Boolean - Whether the scale should start at zero, or an order of
	// magnitude down from the lowest value
      scaleBeginAtZero: false,
    // String - Scale label font declaration for the scale label
      scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    // Number - Scale label font size in pixels
      scaleFontSize: 12,
    // String - Scale label font weight style
      scaleFontStyle: "normal",
    // String - Scale label font colour
      scaleFontColor: "#666",
    // Boolean - whether or not the chart should be responsive and resize when
	// the browser does.
      responsive: false,
    // Boolean - whether to maintain the starting aspect ratio or not when
	// responsive, if set to false, will take up entire container
      maintainAspectRatio: true,
    // Boolean - Determines whether to draw tooltips on the canvas or not
      showTooltips: true,
    // Array - Array of string names to attach tooltip events
      tooltipEvents: ["mousemove", "touchstart", "touchmove"],
    // String - Tooltip background colour
      tooltipFillColor: "rgba(0,0,0,0.8)",
    // String - Tooltip label font declaration for the scale label
      tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    // Number - Tooltip label font size in pixels
      tooltipFontSize: 14,
    // String - Tooltip font weight style
      tooltipFontStyle: "normal",
    // String - Tooltip label font colour
      tooltipFontColor: "#fff",
    // String - Tooltip title font declaration for the scale label
      tooltipTitleFontFamily:"'Helvetica Neue','Helvetica','Arial',sans-serif",
    // Number - Tooltip title font size in pixels
      tooltipTitleFontSize: 14,
    // String - Tooltip title font weight style
      tooltipTitleFontStyle: "bold",
    // String - Tooltip title font colour
      tooltipTitleFontColor: "#fff",
    // Number - pixel width of padding around tooltip text
      tooltipYPadding: 6,
    // Number - pixel width of padding around tooltip text
      tooltipXPadding: 6,
    // Number - Size of the caret on the tooltip
      tooltipCaretSize: 8,
    // Number - Pixel radius of the tooltip border
      tooltipCornerRadius: 6,
    // Number - Pixel offset from point x to tooltip edge
      tooltipXOffset: 10,
    // String - Template string for single tooltips
      tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
    // String - Template string for single tooltips
      multiTooltipTemplate: "<%= value %>",
    // Function - Will fire on animation progression.
      onAnimationProgress: function(){},
    // Function - Will fire on animation completion.
      onAnimationComplete: function(){}
	}
}
function setWinGraphs(json, options){
  var options = {
    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,
    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.05)",
    // Boolean - If we want to override with a hard coded scale
    scaleOverride: true,
    // ** Required if scaleOverride is true **
    // Number - The number of steps in a hard coded scale
    scaleSteps: 10,
    // Number - The value jump in the hard coded scale
    scaleStepWidth: 100,
    // Number - The scale starting value
    scaleStartValue: 0,
    // Number - The scale ending value
    sclaeEndValue:1000,
    //Number - Width of the grid lines
    scaleGridLineWidth : 1,
    //Boolean - Whether the line is curved between points
    bezierCurve : true,
    //Number - Tension of the bezier curve between points
    bezierCurveTension : 0.4,
    //Boolean - Whether to show a dot for each point
    pointDot : true,
    //Number - Radius of each point dot in pixels
    pointDotRadius : 4,
    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth : 1,
    //Number - amount extra to add to the radius to cater for hit detection
    //outside the drawn point
    pointHitDetectionRadius : 20,
    //Boolean - Whether to show a stroke for datasets
    datasetStroke : true,
    //Number - Pixel width of dataset stroke
    datasetStrokeWidth : 2,
    //Boolean - Whether to fill the dataset with a colour
    datasetFill : true,
  };
  $('#leftChartName').text(json.name_1);
  $('#rightChartName').text(json.name_2);
  $('#leftStatName').text(json.name_1);
  $('#rightStatName').text(json.name_2);
  if(json.won_1 > json.won_2){
    $('#header-lead').text(json.name_1);
  }
  else{
    $('#header-lead').text(json.name_2);
  }
  var dataLeft = {
    labels: ["Wins"],
    datasets: [
    {
      label: "Percent",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: [json.won_1]
    },
  ]};
  var dataRight = {
    labels: ["Wins"],
    datasets: [
    {
      label: "Percent",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: [json.won_2]
    },
  ]};
  var ctxWinLeft = $("#leftWinChart").get(0).getContext("2d");
  var charWintLeft = new Chart(ctxWinLeft);

  var ctxWinRight = $("#rightWinChart").get(0).getContext("2d");
  var charWintRight = new Chart(ctxWinRight);
  
  new Chart(ctxWinLeft).Bar(dataLeft, options);
  new Chart(ctxWinRight).Bar(dataRight, options);      
}

function setStatGraphs(json){
  var options = {
    //Number - Amount of animation steps
    animationSteps : 100,
    //String - Animation easing effect
    animationEasing : "easeOutBounce",
    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : true,
    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : false
  };
  var dataLeft = [
    {
      value: json.rock_1,
      color:"#F7464A",
      highlight: "#FF5A5E",
      label: "Rock"
    },
    {
      value: json.paper_1,
      color: "#46BFBD",
      highlight: "#5AD3D1",
      label: "Paper"
    },
    {
      value: json.scissors_1,
      color: "#FDB45C",
      highlight: "#FFC870",
      label: "Scissor"
    }
  ];
  var dataRight = [
    {
      value: json.rock_2,
      color:"#F7464A",
      highlight: "#FF5A5E",
      label: "Rock"
    },
    {
      value: json.paper_2,
      color: "#46BFBD",
      highlight: "#5AD3D1",
      label: "Paper"
    },
    {
      value: json.scissors_2,
      color: "#FDB45C",
      highlight: "#FFC870",
      label: "Scissor"
    }
  ];
  
  var ctxStatLeft = $("#leftStatChart").get(0).getContext("2d");
  var charStatLeft = new Chart(ctxStatLeft);

  var ctxStatRight = $("#rightStatChart").get(0).getContext("2d");
  var charStatRight = new Chart(ctxStatRight);
  
  new Chart(ctxStatLeft).Pie(dataLeft,options);
  new Chart(ctxStatRight).Pie(dataRight,options);
}
