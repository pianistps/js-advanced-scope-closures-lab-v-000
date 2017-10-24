function produceDrivingRange(blockRange) {
  return function toofar(num1, num2) {
    let sub = parseInt(num2) - parseInt(num1)
    if (sub > blockRange) {
      return `${sub - blockRange} blocks out of range`
    } else {
      return `within range by ${blockRange - sub}`
    }
  }
}

function produceTipCalculator(percent) {
  return function percentTip(dollars) {
    return percent * dollars;
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
