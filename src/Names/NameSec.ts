export namespace NameSec {

    export const Name_One = (): string => {

         const name = ["Luke", "Paul", "Mat", "Jake"];
         const rand = Math.floor(Math.random() * name.length);

         return name[rand];

    }

}