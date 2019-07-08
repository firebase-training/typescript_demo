interface User {
    firstName: string,
    lastName: string,
    birthyear: number
}

const user: User = {
    firstName: "Hans",
    lastName: "Meier",
    birthyear: 1970
};

function hello_from_typescript(user: User, currentYear = 2019) {
    const age = currentYear - user.birthyear;
    console.log(`Hello ${user.firstName} ${user.lastName}. You will turn ${age} this year. From Typescript.`);
}

hello_from_typescript(user, "2019");
