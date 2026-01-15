class Human{
    age=100;
    wt;
    #height=20;
    get fetchHeight(){
        return this.#height;
    }
    set modifyHeight(val){
        this.#height=val;
    }
}

let obj=new Human();
obj.wt=10;
console.log(obj.wt)
console.log(obj.fetchHeight);
obj.modifyHeight=19;
console.log(obj.fetchHeight)