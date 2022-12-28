//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hour, minutes = 0) {
    this.hours = hour;
    this.minutes = minutes;
    //throw new Error('Remove this statement and implement this function');
  }

  toString() {
    if (this.minutes >= 60) {
      this.hours = this.hours + Math.floor(+this.minutes / 60);
      this.minutes = this.minutes % 60;
    }
    if (this.hours > 24) {
      this.hours = Math.floor(this.hours % 24);
    }
    if (this.hours < 0) {
      this.hours = 24 + (this.hours % 24);
    }
    if (this.minutes < 0) {
      this.minutes = -1 * +this.minutes;
      this.hours = 24 - Math.floor(this.minutes / 60);
      this.minutes = 60 - (this.minutes % 60);
    }
    if (this.hours === 24) {
      this.hours = '0';
    }

    if (this.hours < 10 && this.hours >= 0) {
      this.hours = `0${this.hours}`;
    }

    if (this.minutes < 10) {
      this.minutes = `0${this.minutes}`;
    }

    return `${this.hours}:${this.minutes}`;
    //throw new Error('Remove this statement and implement this function');
  }

  plus() {
    throw new Error('Remove this statement and implement this function');
  }

  minus() {
    throw new Error('Remove this statement and implement this function');
  }

  equals() {
    throw new Error('Remove this statement and implement this function');
  }
}
