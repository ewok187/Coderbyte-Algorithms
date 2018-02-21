function TimeConvert(num) {

      const fullHours = (num / 60).toString()[0];
      const minutes = num % 60;

      return fullHours + ":" + minutes;
  }