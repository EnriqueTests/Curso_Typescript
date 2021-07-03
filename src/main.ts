interface UserInterface {
    name: string;
    age?: number;
    getMessage(): string;
}

const user: UserInterface = {
    name: "Monster",
    age: 30,
    getMessage() {
        return "Hello " + user.name;
    },
};

const user2: UserInterface = {
    name: "Jack",
    getMessage() {
        return "Hello " + user2.name;
    },
};

console.log(user.getMessage());