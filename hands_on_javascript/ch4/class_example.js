class Vector2{
    constructor(x,y){
        this.x=x
        this.y=y
    }
    lengthSq(){
        return this.x*this.x+this.y*this.y
    }
    add(that){
        this.x+=that.x
        this.y+=that.y
    }
}

class Vector3 extends Vector2{
    constructor(x,y,z){
        super(x,y)
        this.z=z
    }

    lengthSq(){
        return super.lengthSq()+this.z*this.z
    }
    add(that){
        super.add(that)
        this.z+=that.z
    }
}


class Vector2{
    static instanceCount=0
    static incrementCount(){
        this.instanceCount++
    }

constructor(x,y){
    this.x=x
    this.y=y
    Vector2.incrementCount()
}

}


Vector2.instanceCount



let obj={bro1:"mycroft",bro2:"sherlock",[Symbol("sys")]:"Eurus"}