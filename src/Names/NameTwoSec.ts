export namespace nameTwoSec {

    export const Name_Two = (): string => {

        const name = ["Justin", "Jay", "Nate", "Peter"];
        const rand = Math.floor(Math.random() * name.length);

        return name[rand];

    }

}