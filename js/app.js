function draw(context) {
    context.moveTo(10, 10); // move current point to ⟨10,10⟩
    context.lineTo(100, 10); // draw straight line to ⟨100,10⟩
    context.arcTo(150, 150, 300, 10, 40); // draw an arc, the turtle ends up at ⟨194.4,108.5⟩
    context.lineTo(300, 10); // draw straight line to ⟨300,10⟩
    // etc.
    return context; // not mandatory, but will make it easier to chain operations
  }

  function main() {
    console.log("Starting application...");
    
    d3.create("svg")
        .call(svg => svg.append("path")
        .style("stroke", "black")
        .style("fill", "none")
        .attr("d", draw(d3.path())))
        //.node()
  }

  main()