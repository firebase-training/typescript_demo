interface IUser {
    firstName: string;
    lastName: string;
    birthyear: number;
}

function hello_from_typescript(user: IUser, currentYear = 2019) {
    const age = currentYear - user.birthyear;
    console.log(`Hello ${user.firstName} ${user.lastName}. You will turn ${age} this year. From Typescript.`);
}

const demoUser: IUser = {
    birthyear: 1970,
    firstName: "Hans",
    lastName: "Meier",
};

hello_from_typescript(demoUser);
