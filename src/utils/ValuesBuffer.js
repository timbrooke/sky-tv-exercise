import CircularBuffer from "./CircularBuffer";

class ValuesBuffer {
  constructor(maxLength = 20) {
    this.maxLength = maxLength;
    this.values = new Map();
  }

  receive(data) {
    const keys = Object.keys(data);
    keys.forEach((key) => {
      let entry = this.values[key];
      if (!entry) {
        entry = new CircularBuffer(this.maxLength);
        this.values.set(key, entry);
      }
      entry.addValue(data[key]);
    });
  }

  getAverages() {
    const result = {};
    this.values.forEach((value, key) => {
      result[key] = value.getAverage();
    });
    return result;
  }
}

export default ValuesBuffer;
