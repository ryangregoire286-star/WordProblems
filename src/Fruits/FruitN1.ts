export namespace FruitN1 {

    export const FruitN1 = (): string => {

        const name = ["Orange", "Plum", "Mango", "Lemon"];
        const rand = Math.floor(Math.random() * name.length);

        return name[rand];

    }

}