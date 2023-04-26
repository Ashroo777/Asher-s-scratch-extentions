class MoreMath{
    constructor(){
    }

    getInfo(){
        return{
            "id":"MoreMath",
            "name":"More Math",
            "blocks":[
                new Block(exp,'reporter',"raise [base] to [exponent] power",
                {
                    'base':{
                        'type':"number",
                        'defaultValue':null
                    },
                    "exp":{
                        'type':"number",
                        'defaultValue':null
                    }
                    
                })

                
            ]
        }
    }
    //Add methods for blocks
    exp({base,exp}){
        return base**exp
    }
}

Scratch.extensions.register(new MoreMath())

class Block{
    constructor(opcode,type,text,args){
        this.opcode=opcode
        this.blockType=type
        this.arguments=args
        this.text=text
    }
}