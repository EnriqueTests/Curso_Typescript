var user = {
    name: "Monster",
    age: 30,
    getMessage: function () {
        return "Hello " + user.name;
    }
};
var user2 = {
    name: "Jack",
    getMessage: function () {
        return "Hello " + user2.name;
    }
};
console.log(user.getMessage());
