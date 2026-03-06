import {mathFunctions} from "./MathFunctions/MathFunctions";
import {Operator} from "./Operators/Operators";
import {question} from 'readline-sync';
import Maths = mathFunctions.Maths;
import {NameSec} from "./Names/NameSec";
import {nameTwoSec} from "./Names/NameTwoSec";
import {FruitN1} from "./Fruits/FruitN1";
import {FruitN2} from "./Fruits/FruitN2";

const GenerateNumbers = (A: number) => {
    return Math.floor(Math.random() * A);
}


const Result =
    (n1: number, n2: number, name_1: string, name_2: string, f1: string, f2: string) => {

    return `${name_1} had ${n1} ${f1}'s And ${name_2} Gave ${name_1} ${n2} ${f2}`;
}

const main = () => {

    const number_1 = GenerateNumbers( 5);
    const number_2 = GenerateNumbers(10);

    const name_1 = NameSec.Name_One();
    const name_2 = nameTwoSec.Name_Two();
    const fruit_1 = FruitN1.FruitN1();
    const fruit_23 = FruitN2.FruitN2();

    const m = new Maths(number_1, number_2);

    const GetOperator = Operator.getOperator();

    console.log(Result(number_1, number_2, name_1, name_2, fruit_1, fruit_23));

    console.log(GetOperator);
    const ReadUser = parseInt(question("Enter Answer: "));


    if (GetOperator == "+" && ReadUser == m.AddNumbers()) {

        console.log("Correct Answer");
    }

    if (GetOperator == "+" && ReadUser != m.AddNumbers()) {

        console.log("Correct Answer was: "
            + `${number_1} + ${number_2} = ${m.AddNumbers()}`);
    }

    else if (GetOperator == "-" && ReadUser == m.SubNumbers()) {
        console.log("Correct Answer");
    }

    else if (GetOperator == "-" && ReadUser != m.SubNumbers()) {
        console.log("Correct Answer was: "
            + `${number_1} - ${number_2} = ${m.SubNumbers()}`);
    }


    if (GetOperator == "*" && ReadUser == m.MulNumbers()) {
        console.log("Correct Answer");
    }

    else if (GetOperator == "*" && ReadUser != m.MulNumbers()) {

        console.log("Correct Answer was: "
            + `${number_1} * ${number_2} = ${m.MulNumbers()}`);

    }

    if (GetOperator == "/" && ReadUser == m.DivNumbers()) {

        console.log("Correct Answer");
    }

    else if (GetOperator == "/" && ReadUser != m.DivNumbers()) {

        console.log("Correct Answer was: "
            + `${number_1} / ${number_2} = ${m.DivNumbers()}`);
    }

}

main();