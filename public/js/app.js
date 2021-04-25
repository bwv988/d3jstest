// Generate L string using a library.
// Parse L string and convert into SVG
// Plot SVG
// Do it parallely with web workers?
//

// Define the SVG.
// FIXME: Change dynamically.


const MAXITER = 4
const LINELEN = 20

function setupContext() {
  // The drawing context.
  // var context = d3.path()
  
  // context.moveTo(CENTERX, CENTERY)

  // Use a traditional 2D context.
  var canvas = document.getElementById("canvas")
  var context = canvas.getContext("2d")
  
  context.translate(canvas.width / 2, canvas.height / 4)

  return context
}

function produceKochKurve(ctx) {
  var kochCurve = new LSystem({
    axiom: "F++F++F",
    productions: {"F": "F-F++F-F"}, 
    finals: {
      '+': () => { 
        ctx.rotate((Math.PI / 180) * 60) 
      },
      '-': () => { 
        ctx.rotate((Math.PI / 180) * -60) 
      },
      'F': () => {
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(0, LINELEN / (kochCurve.iterations + 1))
        ctx.stroke()
        ctx.translate(0, LINELEN / (kochCurve.iterations + 1))
      }
     }
  })

  return kochCurve
}

function main() {
  console.log("Starting application...");
  
  var ctx = setupContext()

  // This "draws" onto the context.
  lsys = produceKochKurve(ctx)
  lsys.iterate(MAXITER)
  lsys.final()

  // FIXME: Why can't I use the d3.create("svg") pattern from here:
  // https://observablehq.com/@d3/d3-path
  // let svg = d3.select("#svgcontainer")
  //     .append("svg")
  //     .attr("width", width)
  //     .attr("height", height)
    
  // Call the draw() function.
  // FIXME: Colors, dynamically etc.
  // FIXME: Animate path.
  // svg.append("path")
  //     .style("stroke", "black")
  //     .style("fill", "none")
  //     .attr("d", ctx)
    
  console.log("Done.");
}

  main()