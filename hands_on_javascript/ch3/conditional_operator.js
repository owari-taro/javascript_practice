let pi = true ? 3.14 : 3

val < 0 ? "負" : val > 0 ? "正" : "ゼロ"

for (let i = 0; i < 10; i++) {
    console.log(i)
}


array=[11,23,543,234]
for (const num in array){
    console.log(num)
}


for (const num of array){
    console.log(num)
    2

}



function getPrimes(max){
    let primes=""
    outer:
        for (let i=0;i<max;i++){
            for (let divisor=i-1;1<divisor;divisor--){
                console.log("i:",i,"divisor:",divisor)
                if (i%divisor===0)continue outer
            }
            primes+=i+" "
        }
    return primes
}


getPrimes(10)