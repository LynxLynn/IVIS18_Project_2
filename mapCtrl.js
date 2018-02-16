
mapApp.controller('MapCtrl', function ($scope, $http, $routeParams, $timeout) {

  var dataV1W3;
  var dataV1W4;
  var dataV1W5;
  var dataV1W6;
  var variable_1_Data = [];

  var dataV2W3;
  var dataV2W4;
  var dataV2W5;
  var dataV2W6;
  var variable_2_Data = [];

  var dataV3W3;
  var dataV3W4;
  var dataV3W5;
  var dataV3W6;
  var variable_3_Data = [];

  var dataV4W3;
  var dataV4W4;
  var dataV4W5;
  var dataV4W6;
  var variable_4_Data = [];

  var dataV5W3;
  var dataV5W4;
  var dataV5W5;
  var dataV5W6;
  var variable_5_Data = [];

  var dataV6W3;
  var dataV6W4;
  var dataV6W5;
  var dataV6W6;
  var variable_6_Data = [];

  var dataV7W3;
  var dataV7W4;
  var dataV7W5;
  var dataV7W6;
  var variable_7_Data = [];

  var dataV8W3;
  var dataV8W4;
  var dataV8W5;
  var dataV8W6;
  var variable_8_Data = [];
  // var countryID = [];
  var dataMenu = [];

  // GETTING THE DATA FROM ALL FILES....
  //VARIABLE 1
  $.getJSON("data/dataVariable_1_wave_4.json", function(json2){
    dataV1W4 = json2;
    console.log(dataV1W4);
  });
  $.getJSON("data/dataVariable_1_wave_5.json", function(json3){
    dataV1W5 = json3;
  });
  $.getJSON("data/dataVariable_1_wave_6.json", function(json4){
    dataV1W6 = json4;
  });
  //VARIABLE 2
  $.getJSON("data/dataVariable_2_wave_3.json", function(json5){
    dataV2W3 = json5;
  });
  $.getJSON("data/dataVariable_2_wave_4.json", function(json5){
    dataV2W4 = json5;
    console.log(dataV2W4);
  });
  $.getJSON("data/dataVariable_2_wave_5.json", function(json6){
    dataV2W5 = json6;
  });
  $.getJSON("data/dataVariable_2_wave_6.json", function(json7){
    dataV2W6 = json7;
  });
  //VARIABLE 3
  $.getJSON("data/dataVariable_3_wave_3.json", function(json8){
    dataV3W3 = json8;
  });
  $.getJSON("data/dataVariable_3_wave_4.json", function(json9){
    dataV3W4 = json9;
  });
  $.getJSON("data/dataVariable_3_wave_5.json", function(json10){
    dataV3W5 = json10;
  });
  $.getJSON("data/dataVariable_3_wave_6.json", function(json11){
    dataV3W6 = json11;
  });
  //VARIABLE 4
  $.getJSON("data/dataVariable_4_wave_3.json", function(json12){
    dataV4W3 = json12;
  });
  $.getJSON("data/dataVariable_4_wave_4.json", function(json13){
    dataV4W4 = json13;
  });
  $.getJSON("data/dataVariable_4_wave_5.json", function(json14){
    dataV4W5 = json14;
  });
  $.getJSON("data/dataVariable_4_wave_6.json", function(json15){
    dataV4W6 = json15;
  });
  //VARIABLE 5
  $.getJSON("data/dataVariable_5_wave_3.json", function(json16){
    dataV5W3 = json16;
  });
  $.getJSON("data/dataVariable_5_wave_4.json", function(json17){
    dataV5W4 = json17;
  });
  $.getJSON("data/dataVariable_5_wave_5.json", function(json18){
    dataV5W5 = json18;
  });
  $.getJSON("data/dataVariable_5_wave_6.json", function(json19){
    dataV5W6 = json19;
  });
  //VARIABLE 6
  $.getJSON("data/dataVariable_6_wave_3.json", function(json20){
    dataV6W3 = json20;
  });
  $.getJSON("data/dataVariable_6_wave_4.json", function(json21){
    dataV6W4 = json21;
  });
  $.getJSON("data/dataVariable_6_wave_5.json", function(json22){
    dataV6W5 = json22;
  });
  $.getJSON("data/dataVariable_6_wave_6.json", function(json23){
    dataV6W6 = json23;
  });
  //VARIABLE 7
  $.getJSON("data/dataVariable_7_wave_3.json", function(json24){
    dataV7W3 = json24;
  });
  $.getJSON("data/dataVariable_7_wave_4.json", function(json25){
    dataV7W4 = json25;
  });
  $.getJSON("data/dataVariable_7_wave_5.json", function(json26){
    dataV7W5 = json26;
  });
  $.getJSON("data/dataVariable_7_wave_6.json", function(json27){
    dataV7W6 = json27;
  });
  //VARIABLE 8
  $.getJSON("data/dataVariable_8_wave_3.json", function(json28){
    dataV8W3 = json28;
  });
  $.getJSON("data/dataVariable_8_wave_4.json", function(json29){
    dataV8W4 = json29;
  });
  $.getJSON("data/dataVariable_8_wave_5.json", function(json30){
    dataV8W5 = json30;
  });
  $.getJSON("data/dataVariable_8_wave_6.json", function(json31){
    dataV8W6 = json31;
  });

  //Make the list push as a seperate function later, easier to keep track of all the files that way.
  //Did not work with a seperate function, but this works aswell.
  $.getJSON("data/dataVariable_1_wave_3.json", function(json) {
    dataV1W3 = json;
    console.log(dataV1W3);

    dataMenu.push({
      "V1Wave3": dataV1W3,"V1Wave4": dataV1W4,"V1Wave5": dataV1W5,"V1Wave6": dataV1W6,
      "V2Wave3": dataV2W3,"V2Wave4": dataV2W4,"V2Wave5": dataV2W5,"V2Wave6": dataV2W6,
      "V3Wave3": dataV3W3,"V3Wave4": dataV3W4,"V3Wave5": dataV3W5,"V3Wave6": dataV3W6,
      "V4Wave3": dataV4W3,"V4Wave4": dataV4W4,"V4Wave5": dataV4W5,"V4Wave6": dataV4W6,
      "V5Wave3": dataV5W3,"V5Wave4": dataV5W4,"V5Wave5": dataV5W5,"V5Wave6": dataV5W6,
      "V6Wave3": dataV6W3,"V6Wave4": dataV6W4,"V6Wave5": dataV6W5,"V6Wave6": dataV6W6,
      "V7Wave3": dataV7W3,"V7Wave4": dataV7W4,"V7Wave5": dataV7W5,"V7Wave6": dataV7W6,
      "V8Wave3": dataV8W3,"V8Wave4": dataV8W4,"V8Wave5": dataV8W5,"V8Wave6": dataV8W6
    })

    for (var i in dataMenu) {
      var wave3 = dataMenu[i].V1Wave3
      var wave4 = dataMenu[i].V1Wave4
      var wave5 = dataMenu[i].V1Wave5
      var wave6 = dataMenu[i].V1Wave6
      console.log(dataMenu[i]);
      //Make a list for each variable
      //Pushing them into "wave" categories since I wasnt allowed (couldnt get it to work) to do that in the json files.
      variable_1_Data.push({
        "Wave3": wave3,
        "Wave4": wave4,
        "Wave5": wave5,
        "Wave6": wave6
      });
      variable_2_Data.push({
        "Wave3": dataMenu[i].V2Wave3,
        "Wave4": dataMenu[i].V2Wave4,
        "Wave5": dataMenu[i].V2Wave5,
        "Wave6": dataMenu[i].V2Wave6
      });
      // console.log(variable_2_Data);
      variable_3_Data.push({
        "Wave3": dataMenu[i].V3Wave3,
        "Wave4": dataMenu[i].V3Wave4,
        "Wave5": dataMenu[i].V3Wave5,
        "Wave6": dataMenu[i].V3Wave6
      });
      variable_4_Data.push({
        "Wave3": dataMenu[i].V4Wave3,
        "Wave4": dataMenu[i].V4Wave4,
        "Wave5": dataMenu[i].V4Wave5,
        "Wave6": dataMenu[i].V4Wave6
      });
      variable_5_Data.push({
        "Wave3": dataMenu[i].V5Wave3,
        "Wave4": dataMenu[i].V5Wave4,
        "Wave5": dataMenu[i].V5Wave5,
        "Wave6": dataMenu[i].V5Wave6
      });
      variable_6_Data.push({
        "Wave3": dataMenu[i].V6Wave3,
        "Wave4": dataMenu[i].V6Wave4,
        "Wave5": dataMenu[i].V6Wave5,
        "Wave6": dataMenu[i].V6Wave6
      });
      variable_7_Data.push({
        "Wave3": dataMenu[i].V7Wave3,
        "Wave4": dataMenu[i].V7Wave4,
        "Wave5": dataMenu[i].V7Wave5,
        "Wave6": dataMenu[i].V7Wave6
      });
      variable_8_Data.push({
        "Wave3": dataMenu[i].V8Wave3,
        "Wave4": dataMenu[i].V8Wave4,
        "Wave5": dataMenu[i].V8Wave5,
        "Wave6": dataMenu[i].V8Wave6
      });
    }
  });

  console.log(dataMenu)


  // Creates the world map, hover over a country to get it's name. Click on a country to get data.
  var map = new Datamap({
    element: document.getElementById('container'),
    done: function(datamap) {
      datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {

        var countryID = geography.properties.name;
        //Sends the country ID to the function retrieveCountryId()
        $scope.retrieveCountryId(countryID);
        //Sends IDlist to the function createTable()
        $scope.createTable(IDlist);
        console.log(IDlist);
        console.log(countryID);

      });
    },
    fills: {
      // defaultFill: 'rgba(23,48,210,0.9)', // Any hex, color name or rgb/rgba value
      colors: '#408080'
    },
    data: {
      USA: {fillKey: 'colors'},
      ALB: {fillKey: 'colors'},
      AZE: {fillKey: 'colors'},
      ARG: {fillKey: 'colors'},
      AUS: {fillKey: 'colors'},
      BGD: {fillKey: 'colors'},
      ARM: {fillKey: 'colors'},
      BGR: {fillKey: 'colors'},
      BLR: {fillKey: 'colors'},
      CHL: {fillKey: 'colors'},
      CHN: {fillKey: 'colors'},
      CZE: {fillKey: 'colors'},
      SLV: {fillKey: 'colors'},
      EST: {fillKey: 'colors'},
      FIN: {fillKey: 'colors'},
      DEU: {fillKey: 'colors'},
      IND: {fillKey: 'colors'},
      JPN: {fillKey: 'colors'},
      KOR: {fillKey: 'colors'},
      MEX: {fillKey: 'colors'},
      NZL: {fillKey: 'colors'},
      NGA: {fillKey: 'colors'},
      NOR: {fillKey: 'colors'},
      PER: {fillKey: 'colors'},
      PHL: {fillKey: 'colors'},
      POL: {fillKey: 'colors'},
      ROU: {fillKey: 'colors'},
      RUS: {fillKey: 'colors'},
      SVN: {fillKey: 'colors'},
      ZAF: {fillKey: 'colors'},
      ESP: {fillKey: 'colors'},
      SWE: {fillKey: 'colors'},
      SWZ: {fillKey: 'colors'},
      TUR: {fillKey: 'colors'},
      UKR: {fillKey: 'colors'},
      MKD: {fillKey: 'colors'}
    },
    geographyConfig: {
      popupTemplate: function(geo) {
        return ['<div class="hoverinfo"><strong>',
        geo.properties.name,
        '</strong></div>'].join('');
      }
    }
  });

  var IDlist = [];
  var countryID;
  //Retrieves the country ID when clicking on the map and returns the value 'country' to the global variable 'countryID'
  //Why pass it to a global variable? So that other functions like, 'paddId' can use it.
  $scope.retrieveCountryId = function(country){
    countryID = country;
    return countryID
  }

  //Retrieves the variable data list from specificVariable()
  //Loops through the retrived list and passes and creates the data table for a specific chosen country
  //I created this function so that the data in the table would update when you changed the variable.
  $scope.createTable = function(list) {
    console.log(countryID);
    console.log(list);
    IDlist = list;
    var text = "";
    var text1 = "";
    var text2 = "";
    var text3 = "";
    //If user havent choosen a variable, V1 = default
    if (IDlist.length === 0){
      IDlist = variable_1_Data;
    }

    for (var i in IDlist) {
      var newData = (IDlist[i])
      console.log(newData);
      var Vw3 = newData.Wave3
      var Vw4 = newData.Wave4
      var Vw5 = newData.Wave5
      var Vw6 = newData.Wave6
      
      for (var j in Vw3){
        var lynn2 = Vw3[j];
        if (typeof lynn2[countryID] != "undefined") {
          text += '<tr>' + '<th scope="row">'+lynn2.Question+'</th>' + '<th>' + lynn2[countryID] + ' %' + '</th>' + '</tr>';
        }
        else {
          text += '<tr>' + '<th scope="row">'+lynn2.Question+'</th>' + '<th>' + 'No data available'+ '</th>' + '</tr>';;
        }
      }

    }

    for (var j in Vw4){
      var lynn3 = Vw4[j];
      if (typeof lynn3[countryID] != "undefined") {

        text1 += '<tr>' + '<th scope="col">' + lynn3[countryID] + ' %' + '</th>' + '</tr>';
      }
      else {

        text1 += '<tr>' + '<th scope="col">' + 'No data available' + '</th>' + '</tr>';
      }
    }

    for (var j in Vw5){
      var lynn4 = Vw5[j];
      if (typeof lynn4[countryID] != "undefined") {
        text2 += '<tr>' + '<th scope="col">' + lynn4[countryID] + ' %' + '</th>' + '</tr>';
      }
      else {
        text2 += '<tr>' + '<th scope="col">' + 'No data available' + '</th>' + '</tr>';
      }
    }

    for (var j in Vw6){
      var lynn5 = Vw6[j];
      if (typeof lynn5[countryID] != "undefined") {
        text3 += '<tr>' + '<th scope="col">' + lynn5[countryID] + ' %' + '</th>' + '</tr>';
      }

      else {
        text3 += '<tr>' + '<th scope="col">' + 'No data available' + '</th>' + '</tr>';
      }
    }

    document.getElementById("table").innerHTML = text
    document.getElementById("table1").innerHTML = text1
    document.getElementById("table2").innerHTML = text2
    document.getElementById("table3").innerHTML = text3
    document.getElementById("currentCountry").innerHTML = "Current country: " + countryID;
    // variableName = varName;
    console.log(IDlist);
    // return IDlist;
  }


  // Function called from menu.html, sends a specific variable "V1,V2 etc.." of the 8 I have chosen.
  // Which in turn sends datalist with that specific variable data to barChart()
  // This function also retrives an event (evt), since I use this function from two different buttons the event shows me which button have been clicked and does a different action depending on what was the event origin.
  $scope.specificVariable = function(variable,evt){
    console.log(variable_1_Data);
    console.log(variable);
    console.log(evt.target);
    var source = evt.target
    console.log(source.id);
    // alert(source.id);
    if (variable === "V1") {
      var variableList = variable_1_Data;
      var varName = "Aim for country: First choice";
      // console.log(variableList);
    }

    else if (variable === "V2") {
      var variableList = variable_2_Data;
      var varName = "Environment vs Economic Growth";
      // console.log(variableList);
    }

    else if (variable === "V3") {
      var variableList = variable_3_Data;
      var varName = "Confidence: Armed Forces";
      // console.log(variableList);
    }

    else if (variable === "V4") {
      var variableList = variable_4_Data;
      var varName = "Employment status";
      // console.log(variableList);
    }

    else if (variable === "V5") {
      var variableList = variable_5_Data;
      var varName = "State of Health";
      // console.log(variableList);
    }

    else if (variable === "V6") {
      var variableList = variable_6_Data;
      var varName = "Feelings of Happiness";
      // console.log(variableList);
    }

    else if (variable === "V7") {
      var variableList = variable_7_Data;
      var varName = "Trust In People";
      // console.log(variableList);
    }

    else if (variable === "V8") {
      var variableList = variable_8_Data;
      var varName = "Income Equality";
      // console.log(variableList);
    }

    //Checking which button has been clicked and doing different operations depending on event origin
    if (source.id === 'btn') {
      $scope.runBarChart(variableList);
      document.getElementById("varTotName").innerHTML = varName;
    }
    else {
      //Sends the data list to createTable()
      $scope.createTable(variableList);
      document.getElementById("varName").innerHTML = varName;
    }
  }
  // console.log(variableList);

  //Stacked bar chart function, takes in data from a specific variable and spits out a chart.
  $scope.barChart = function(variableList) {
    var one = [];
    var two = [];
    var tree = [];
    var four = [];
    var five = [];
    var six = [];
    var seven = [];
    var eight = [];

    //Upade function so that the data in the chart changes when clicking on another variable
    function updateData() {
      for (var i in variableList){
        var variableI = variableList[i];
        // console.log(variableI);
        var wave3 = variableI.Wave3;
        var wave4 = variableI.Wave4;
        var wave5 = variableI.Wave5;
        var wave6 = variableI.Wave6;
        for (var j in wave3) {
          // console.log(wave3[j].Sweden);
          one.push(wave4[j].Question);
          two.push(wave3[j].Total);
        }
        for (var k in wave4) {
          // console.log(wave4[k].Total);
          tree.push(wave4[k].Question);
          four.push(wave4[k].Total);
          // console.log(four);
        }
        for (var l in wave5) {
          // console.log(wave5[l].Total);
          five.push(wave5[l].Question);
          six.push(wave5[l].Total);
          // console.log(four);
        }
        for (var m in wave6) {
          // console.log(wave6[m].Total);
          seven.push(wave6[m].Question);
          eight.push(wave6[m].Total);
          // console.log(four);
        }
      }
    }

    //Data from the different variables, where one =  a list with the variable questions and four,six & eight = a list with the total percentage data for each question
    var data = {
      labels: one,
      series: [
        {
          label: "1995-1999",
          //Values from Wave3 of the Aims for country
          values: two
        },
        {
          label: "2000-2004 *",
          //Values from Wave4 of the Aims for country
          values: four
        },
        {
          label: '2005-2009 *',
          values: six
        },
        {
          label: '2010-2014 *',
          values: eight
        },]
        // ]
      };

      //Calling the update function before creating the chart.
      updateData();

      var chartWidth       = 300,
      barHeight        = 20,
      groupHeight      = barHeight * data.series.length,
      gapBetweenGroups = 10,
      spaceForLabels   = 320,
      spaceForLegend   = 320;
      labelWidth = 0;

      // Zip the series data together (first values, second values, etc.)
      var zippedData = [];
      for (var i=0; i<data.labels.length; i++) {
        for (var j=0; j<data.series.length; j++) {
          zippedData.push(data.series[j].values[i]);
          // console.log("OI");
          // console.log(zippedData);
        }
      }

      // Color scale
      var color = d3.scale.category20();
      var chartHeight = barHeight * zippedData.length + gapBetweenGroups * data.labels.length;

      var x = d3.scale.linear()
      .domain([0, d3.max(zippedData)])
      .range([0, chartWidth]);

      var y = d3.scale.linear()
      .range([chartHeight + gapBetweenGroups, 0]);

      var yAxis = d3.svg.axis()
      .scale(y)
      .tickFormat('')
      .tickSize(0)
      .orient("left");


      // Specify the chart area and dimensions
      var chart = d3.select(".chart")
      .attr("width", spaceForLabels + chartWidth + spaceForLegend)
      .attr("height", chartHeight);

      //Removes previous chart and creats a new with the new data (if any)
      chart.selectAll("g").remove();
      // Create bars
      var bar = chart.selectAll("g")
      .data(zippedData)
      bar.enter().append("g")
      .attr("transform", function(d, i) {
        return "translate(" + spaceForLabels + "," + (i * barHeight + gapBetweenGroups * (0.5 + Math.floor(i/data.series.length))) + ")";
      });

      // Create rectangles of the correct width
      bar.append("rect")
      .attr("fill", function(d,i) { return color(i % data.series.length); })
      .attr("class", "bar")
      .attr("width", x)
      .attr("height", barHeight - 1)
      .on("mousemove", function(d){
        tooltip
        .style("left", d3.event.pageX - 50 + "px")
        .style("top", d3.event.pageY - 70 + "px")
        .style("display", "inline-block")
        .style("opacity",.9)
        .html("<p class='tooltip'>hey</p>")
        console.log("<p class='tooltip'>hey</p>");
      })
      .on("mouseout", function(d){ tooltip.style("display", "none");});
      // console.log(d3event.pageX);

      // Add text label in bar
      bar.append("text")
      .attr("x", function(d) { return x(d) - 3; })
      .attr("y", barHeight / 2)
      .attr("fill", "red")
      .attr("dy", ".35em")
      .text(function(d) { return d; });

      // Draw labels
      bar.append("text")
      .attr("class", "label")
      .attr("x", function(d) { return - 10; })
      .attr("y", groupHeight / 2)
      .attr("dy", ".3em")
      .text(function(d,i) {
        // console.log(data.labels[Math.floor(i/data.series.length)]);
        if (i % data.series.length === 0)
        return data.labels[Math.floor(i/data.series.length)];
        else
        return ""});

        chart.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + spaceForLabels + ", " + -gapBetweenGroups/2 + ")")
        .call(yAxis);

        // Draw legend
        var legendRectSize = 18,
        legendSpacing  = 4;


        var legend = chart.selectAll('.legend')
        .data(data.series)
        .enter()
        .append('g')
        .attr('transform', function (d, i) {
          var height = legendRectSize + legendSpacing;
          var offset = -gapBetweenGroups/2;
          var horz = spaceForLabels + chartWidth + 40 - legendRectSize;
          var vert = i * height - offset;
          return 'translate(' + horz + ',' + vert + ')';
        });


        //Added a class hovertext for an attempt of creating text on hover (did not succeed 13/2-18)
        legend.append('rect')
        .attr('class', 'hovertext')
        .attr('width', legendRectSize)
        .attr('height', legendRectSize)
        // .html("<text title='TEXT'></text>")
        .style('fill', function (d, i) { return color(i); })
        .style('stroke', function (d, i) { return color(i); });

        legend.append('text')
        .attr('class', 'legend')
        .attr('title', 'Lynn')
        .attr('x', legendRectSize + legendSpacing)
        .attr('y', legendRectSize - legendSpacing)
        .text(function (d) { return d.label; })
        console.log(data);


      }

      // This function is called from the function specificvariable function, which sends the selected data.
      $scope.runBarChart = function(variableList){
        //timeout function not needed I think, but keep it for now.
        // $timeout(function() {
        $scope.barChart(variableList);
        //Text for notifying the user that there is "missing" data.
        //Try and find a better way to do this.
        document.getElementById("text").innerHTML = "<p style='font-style:italic; margin-top:20px;'>* Not all of the 36 chosen countries participated during these years.</p>"
        // }, 700);
      };

      $scope.scrollToMap = function(id) {
        // var id = document.getElementById("id");
        var specCat = '".' + id + '"' ;
        console.log(specCat);
        // $(this).click(function() {
        $('html,body').animate({
          scrollTop: $("." + id).offset().top},
          'slow');
          // });
        }
        var tooltip = d3.select(".chart").append("div").attr("class", "tooltip");



      });
