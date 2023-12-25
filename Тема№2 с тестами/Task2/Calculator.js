function Calculator(x) {
    if (!new.target) {
        throw new Error("Калькулятор вызван без ключевого слова 'new'!");
    }

    this.stack = [x];

    this.plus = function (num) {
        this.stack.push(num);
        return this;
    };

    this.minus = function (num) {
        this.stack.push(-num);
        return this;
    };

    this.multiply = function (num) {
        let lastNumber = this.stack.pop();
        this.stack.push(lastNumber * num);
        return this;
    };

    this.divide = function (num) {
        if (num === 0) {
            throw new Error('Cannot divide by zero');
        }

        let lastNumber = this.stack.pop();
        this.stack.push(lastNumber / num);
        return this;
    };

    this.calculate = function () {
        return this.stack.reduce((acc, val) => acc + val, 0);
    };
}