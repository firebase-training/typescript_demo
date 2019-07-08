const user = {
    firstName: "Hans",
    lastName: "Meier",
    birthyear: 1970
};

function hello(user, currentYear = 2019) {
    const age = currentYear - user.birthyear;
    console.log(`Hello ${user.firstName} ${user.lastName}. You will turn ${age} this year`);
}

hello(user);
