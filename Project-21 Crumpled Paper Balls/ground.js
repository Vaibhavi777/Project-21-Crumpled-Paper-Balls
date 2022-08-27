class Ground{
    constructor(x,y,w,h){
        this.body=Bodies.rectangle(x,y,w,h,{isStatic:true})
        World.add(world,this.body)
        this.width=w
        this.height=h
    }
    display(){
        var pos=this.body.position
        push ()
        rectMode(CENTER)
        fill ("purple")
        rect(pos.x,pos.y,this.width,this.height)
        pop ()
    }
}
