module.exports = class Module1 {
    method1 () {
        for (let i = 0; i < 10; i++) {
            console.log(i);
        }
    }

    method2 () {
        [1,2,3].forEach(i => { console.log(i); });
    }

    method3 () {
        this.method1();
        this.method2();
    }
};
