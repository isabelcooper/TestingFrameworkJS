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
    first === second ? loadResult(true): loadResult(false)
    // first === second ? console.log("    Pass") : console.warn("    Fail")
  }

  function toInclude(second) {
    first.includes(second) ? loadResult(true) : loadResult(false)
    // matches >= [1] ? console.log("    Pass") : console.warn("    Fail")
  }

  function instanceOf(second) {
    (first instanceof second) ? loadResult(true) : loadResult(false)
  }

  return {toEqual: toEqual, toInclude: toInclude, instanceOf: instanceOf}
}


function loadResult(outcome) {
  let status = (outcome === true) ?  "Pass" :  "False"
  let color = (outcome === true) ?  "green" :  "red"
  document.getElementById('test').innerHTML += `<span style = "color: ${color};">${status}</span><br>`
}

function loadText(text) {
  document.getElementById('test').innerHTML += `<br><span style = "font-weight: bold"> ${text}<br></span>`
}
