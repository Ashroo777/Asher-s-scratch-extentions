class test {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "Test",
            "name": "Test",
            "blocks": [ 
                {
                    "opcode":"test",
                    "blockType":"reporter",
                    "text":"this is a test [x]",
                    "arguments":{
                        "x":{
                            "type":"string",
                            "defaultValue":" "
                        }
                    }
                }
             ]
        }
    }

    /* add methods for blocks */
    test({x}){
        return x
    }
}

Scratch.extensions.register(new test())