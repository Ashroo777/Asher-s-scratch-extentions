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
}

Scratch.extensions.register(new ScratchFetch())