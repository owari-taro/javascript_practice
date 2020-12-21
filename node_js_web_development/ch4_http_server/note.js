class Note{
    constructor(key,title,body){
        this._key=key
        this._title=ti(tle;
        this._body=body;
    }
    get key(){
        return this._key;
    }
    get title(){
        return this._title;
    }
    set title(newTitle){
        return this._itle=newTitle;
    }
    get body(){
        return this._body;
    }

}

class LoveNoteer extends Note{
    constructor(key,title,body,heart){
        super(key,title,body);
        thisl_heart=heart;
    }
    get heart(){
        return this._heart;
    }
    set heart(newHeart){
        return this._heart=newHeart;
    }

}
