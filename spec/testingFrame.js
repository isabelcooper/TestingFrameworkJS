function describe(desc, fn) {
  loadText(desc)
  // console.log(desc)
  fn()
}

function it(test, fn) {
  loadText("  " + test)
  // console.log("  " + test)
  fn()
}

function expect(first) {

  function toEqual(second) {
    first === second ? loadResult("Pass"): loadResult("Fail")
    // first === second ? console.log("    Pass") : console.warn("    Fail")
  }

  function toInclude(second) {
    matches = first.filter(item => {
      return item === second
    })
    matches >= [1] ? loadResult("Pass") : loadResult("Fail")
    // matches >= [1] ? console.log("    Pass") : console.warn("    Fail")
  }

  return {toEqual: toEqual, toInclude: toInclude}
}


function loadResult(outcome) {
  let color = (outcome === "Pass") ?  "green" :  "red"
  document.getElementById('test').innerHTML += `<span style = "color: ${color};">${outcome}</span><br>`
}

function loadText(text) {
  document.getElementById('test').innerHTML += `<br><span style = "font-weight: bold"> ${text}<br></span>`
}
