function makeFizzBuzzIterator(max) {
    let count = 0
    return {
        next() {
            const done = max <= count
            if (count % 6 === 0) {
                return { value: "FizzBuzz", done }
            } else if (count % 2 === 0) {
                return { value: "Fizz", done }
            } else if (count % 3 === 0) {
                return { value: "Buzz", done }
            } else {
                return { value: count, done }
            }
        }


    }
}


class MyIterator {
    constructor(data) {
        this.data = data;
    }
    [Symbol.iterator]() {
        let current = 0
        let that = this
        return {
            next() {
                return current < that.data.length ?
                    { value: that.data[current++], done: false } :
                    { done: true };
            }
        }
    }
}


let itr=new MyIterator(["one","two","three"])
for (let value of itr){
    console.log(value)
}

for(let value of itr){
    console.log(value)
}

function* generatorFunc(){
    console.log(yield 3)
    console.log(yield 5)
}


function* fibonacci(){
    a0=0
    a1=1
    while(true){
        tmp=a0+a1
        a0=a1
        a1=tmp
        yield tmp
    }
}