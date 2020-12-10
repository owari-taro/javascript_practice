function add1(a, b) {
    return a + b
}

const add2 = function (a, b) { return a + b }

const add3 = function addFn(a, b) { return a + b }


const add4 = (a, b) => { return a + b }


const obj1 = { propA: 1, propB: 2 }
obj1.propA
obj1["propA"]
obj1.propC = 3


const obj4 = { propB: "b", prorpD: "d" }


const price = {
    value: 100,
    get withTax() {
        return Math.floor(this.value * 1.1)
    },

    set withTax(withTax) {
        thisvalue = Math.ceil(withTax / 1.1)
    }
}

price.withTax

price.withTax = 333

price.withTax

price.value


let arr2 = ["bar", "baz", "foo"]

for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i])
}


class Foo {
    #privateField = 1
    publicField = 2
    static #staticPrivateField = 3
    static staticPublicField = 4

    constructor(parameter) {
        this.fieldInitializedInConstructor = parameter
        console.log("Foo constructor")
    }

    get #computed() {
        return this.publicFeild * 2
    }
    get computed() {
        return this.#computed
    }
    set #computed(value) {
        this.publicField = value / 2
    }
    set computed(value) {
        thisl.#computed = value / 2
    }

    #privateMethod() {
        return this.#privateField
    }

    publicMethod() {
        return this.#privateField
    }

    static #staticPrivateMethod() {
        return this.#staticPrivateField
    }

    static staticPublicMethod() {
        return this.#staticPrivateField
    }
}




class Bar extends Foo{
    constructor(parameter){
        super(parameter)
        this.subClassPublicField=100
        console.log("bar constructor")
    }

    publicMethod(){
        return super.publicMethod()*this.subclassPubicField
    }
}

const bar=new Bar(100)
bar.publicField