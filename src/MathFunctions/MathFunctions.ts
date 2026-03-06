export namespace mathFunctions {

    type NUMBER = number | any;

    export class Maths {

        num_1: NUMBER = 0;
        num_2: NUMBER = 0;

        constructor(a: NUMBER, b: NUMBER) {

            this.num_1 = a;
            this.num_2 = b;

        }


        AddNumbers= (): NUMBER => {

            return Number(this.num_1 + this.num_2);

        }

        SubNumbers = (): NUMBER => {

            return Number(this.num_1 - this.num_2);
        }

        MulNumbers = (): NUMBER => {

            return Number(this.num_1 * this.num_2);
        }

        DivNumbers = (): NUMBER => {

            if (this.num_2 == 0) {

                console.log("Cannot Divide by Zero");
            }

            return Number(this.num_1 / this.num_2);
        }


    }

}