module.exports = class Module1 {
    method4 () {
        console.log(1);
    }

    method5 () {
        console.log(2);
    }

    method6 () {
        this.method4();
        this.method5();
    }
};
