
  class DynamicDT {
    #date = new Date();
    #time = this.#date.getTime();
    currentTime = {}
    currentDate = {}

    constructor(obj) {
      if (obj.update !== undefined) {
        this.update = obj.update;
      }
      if (obj.format !== undefined) {
        this.format = obj.format;
      }
      this.currentTime = {
        hours: "",
        minutes: "",
        seconds: ""
      }
      this.currentDate = {
        day: "",
        date: "",
        month: "",
        year: ""
      }

      this.#getDate(this.#time)
    }

    #getDate(date) {
      let time = this.#time;
      const useThis = this;

      setInterval(function () {
        useThis.#setTime(Date(time ++))
      }, 1000)
    }

    #setTime(time) {
      time = time.split(' ')
      this.currentDate.day = time[0];
      this.currentDate.month = time[1];
      this.currentDate.date = time[2];
      this.currentDate.year = time[3];
      let  currentTime = time[4].split(':');

      if (this.format === 12) {
        if (currentTime[0] > 12) {
          currentTime[0] = currentTime[0] - 12;
          if (currentTime[0] < 10) {
            currentTime[0] = "0"+currentTime[0]
          }
          this.currentTime.type = "PM"
        } else {
          this.currentTime.type = "AM"
        }
        this.currentTime.hours = String(currentTime[0])
      } else {
        this.currentTime.hours = String(currentTime[0])
      }
      this.currentTime.minutes = currentTime[1]
      this.currentTime.seconds = currentTime[2]
      if (this.update !== undefined) {
        this.update(this.currentTime, this.currentDate)
      }
    }
  }
