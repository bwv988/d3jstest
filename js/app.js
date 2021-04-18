// Generate L string using a library.
// Parse L string and convert into SVG
// Plot SVG
// Do it parallely with web workers?
//

// Define the SVG.
// FIXME: Change dynamically.

const width = 300;
const height = 300;
const MAXITER = 3;
const LINELEN = 200;
const CENTERX = width / 2;
const CENTERY = height / 2;

function draw(context) {
    context.moveTo(CENTERX, CENTERY); // move current point to ⟨10,10⟩
    context.lineTo(CENTERX + LINELEN, CENTERY); // draw straight line to ⟨100,10⟩

    return context; // not mandatory, but will make it easier to chain operations
}

function main() {
  console.log("Starting application...");
  
  let kochCurve = new LSystem({
    axiom: "F++F++F",
    productions: {"F": "F-F++F-F"}
  });

  console.log(kochCurve.iterate(MAXITER))

  // FIXME: Why can't I use the d3.create("svg") pattern from here:
  // https://observablehq.com/@d3/d3-path
  let svg = d3.select("#svgcontainer")
      .append("svg")
      .attr("width", width)
      .attr("height", height);
    
  // Call the draw() function.
  // FIXME: Colors, dynamically etc.
  // FIXME: Animate path.
  svg.append("path")
      .style("stroke", "black")
      .style("fill", "none")
      .attr("d", draw(d3.path()));
    
  console.log("Done.");
}

  main()