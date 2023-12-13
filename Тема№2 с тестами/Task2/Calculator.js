function Calculator(x) {
    if (!new.target) {
        throw new Error("Калькулятор вызван без ключевого слова 'new'!");
    }
    
    this.stack = [{ operator: null, operand: x }];

    this.plus = function (num) {
        this.stack.push({ operator: '+', operand: num });
        return this;
    };

    this.minus = function (num) {
        this.stack.push({ operator: '-', operand: num });
        return this;
    };

    this.multiply = function (num) {
        this.stack.push({ operator: '*', operand: num });
        return this;
    };

    this.divide = function (num) {
        if (num === 0) {
            throw new Error('Cannot divide by zero');
        }
        this.stack.push({ operator: '/', operand: num });
        return this;
    };

    this.calculate = function () {
        let tempStack = [];
        let current = this.stack[0];

        for (let i = 1; i < this.stack.length; i++) {
            const next = this.stack[i];

            if (next.operator === '*' || next.operator === '/') {
                current.operand = (next.operator === '*') ?
                    current.operand * next.operand :
                    current.operand / next.operand;
            } else {
                tempStack.push(current);
                current = next;
            }
        }

        tempStack.push(current);
        this.stack = tempStack;

        let result = this.stack[0].operand;
        for (let i = 1; i < this.stack.length; i++) {
            const next = this.stack[i];
            result = (next.operator === '+') ?
                result + next.operand :
                result - next.operand;
        }

        return result;
    };
}