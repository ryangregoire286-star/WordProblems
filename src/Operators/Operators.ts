export namespace Operator {

    export const getOperator = (): string => {

        const op = ["+", "-", "*", "/"];
        let rand = Math.floor(Math.random() * op.length);

        return op[rand];
    }
}