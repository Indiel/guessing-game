class GuessingGame {
    constructor() {
        this.min;
        this.max;
        this.middle;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.middle = Math.round((this.min + this.max) / 2);
        return this.middle;
    }

    lower() {
        this.max = this.middle;
        this.guess();
    }

    greater() {
        this.min = this.middle;
        this.guess();
    }
}

module.exports = GuessingGame;
