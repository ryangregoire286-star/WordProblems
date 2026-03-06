export namespace FruitN2 {

    export const FruitN2 = (): string => {

        const name = ["Grape", "Kiwi", "Blueberry", "Strawberry"];
        const rand = Math.floor(Math.random() * name.length);

        return name[rand];

    }

}