class test {
    constructor(runtime) {
        this.runtime = runtime
        this.currentMSecs = -1
    }
    
    getInfo() {
        return {
            "id": "MoreOperators",
            "name": "More Operators",
            'color1':'#59c059',
            'color2':"#5db05d",
            "blocks": [ 
                {
                    "opcode":"raiseToPower",
                    "blockType":"reporter",
                    "text":"raise [x] to [power] power",
                    "arguments":{
                        "x":{
                            "type":"number",
                            "defaultValue":" "
                        },
                        "power":{
                            "type":"number",
                            "defaultValue":' '
                        }
                        
                        

                    }
                },
                {
                    "opcode":"isEven",
                    "blockType":"Boolean",
                    'text':"check if [value] is even",
                    'arguments':{
                        "value":{
                            'type':'number',
                            "defaultValue":" "
                        }
                    }
                },
                {
                    'opcode':'isOdd',
                    'blockType':'Boolean',
                    'text':"check if [value] is odd",
                    'arguments':{
                        'value':{
                            'type':'number',
                            'defaultValue':" "
                        }
                    }
                },
                {
                    'opcode':'negitate',
                    'blockType':'reporter',
                    'text':"- [value]",
                    'arguments':{
                        'value':{
                            'type':'number',
                            'defaultValue':" "
                        }
                    }
                },
                {
                  'opcode':'pi',
                  'blockType':'reporter',
                  'text':'π'  
                },
                {
                    'opcode':'blank',
                    'blockType':'reporter',
                    'text':"‎ "
                }
             ]
        }
    }

    /* add methods for blocks */
    raiseToPower({x,power}){
        return x**power
    }
    isEven({value}){
        return value%2===0
    }
    isOdd({value}){
        return !(value%2===0)
    }
    negitate({value}){
        return -value
    }
    pi({}){
        return Math.PI
    }
    blank({}){
        return " "
    }
}


(function() {
    var extensionInstance = new test(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})()
