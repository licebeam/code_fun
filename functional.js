const test = () => {
    console.log("hello");
}

const check = (name) => {
    const myar = ['time','to','die', name];
    console.log(myar.join(', '));
    test();
}

check('dustin');