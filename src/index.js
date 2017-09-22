
function component(elTag, id){
    var element = document.createElement(elTag);
    
    if(id){
        element.id = id;
    }else{
        element.innerHTML = 'Hello, Webpack!!';
    }
    
    return element;
}

function test(){
    var someArray = [1, 5, 7];
    var someArrayEntries = someArray.entries();

    someArrayEntries.toString();
    someArrayEntries === someArrayEntries[Symbol.iterator]();

    var str = 'hityjtdfyjtyj';
    typeof str[Symbol.iterator]; // function

    var iter = str[Symbol.iterator]();
    iter + '';

    // for( a of iter){
    //     console.log(a);
    // }     

    // console.log([...str]);

    var someStr = new String('hi');

    someStr[Symbol.iterator] = function(){
        return {
            next : function(){
                if(this._first){
                    this._first = false;
                    return { value : 'bye' , done : false };
                }else{
                    return { done : true };
                }    
            },
            _first : true
        }
    }
    //단 오브젝트를 결과로 받고 싶다면, parenthesis() 안에 오브젝트를 넣어주어야 함

    materials.map(() => ({ key : 'value' }));

    console.log([...someStr]);
    console.log(someStr+'');

    var newStr = someStr+'';

    console.log(newStr);


    var id = function idMaker(){
        var index = 0;

        return {
            next : () => {return { value : index++, done : false }}
            }
    }();
    
    console.log(`--- id maker using arrow func ---`);
    console.log(id.next().value);
    console.log(id.next().value);
    console.log(id.next().value);


    function* makeSimpleGenerator(array){
        var nextIndex = 0;

        while(nextIndex < array.length) {
            yield array[nextIndex++];
        }
    }

    var gen = makeSimpleGenerator(['yo', 'ya']);

    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().done);
}

function sendBox(){

    var getHashFunc = function getHashFunc(...text){
        let hash;
        
        hash = +text[0] + (Math.random() * new Date()) / 100; 
    
        return hash.toString();

    }.bind(this);
    
    var numberGenerator = function numberGenerator(){
        var index = new Date();
        return {
            next : () => {return { value : index * Math.random() , done : false}}
        }
    }();

    for(let ix = 0, ixLen = 10 ; ix < ixLen ; ix++ ){
        console.log(getHashFunc(numberGenerator.next().value));
    }

    function idMaker1(){
        var id = 0;

        return {
            next : () => {return { value : id++, done : false }}
            }
    };
    
    function* idMaker2(){
        var id = 0;

        while(true) yield id++;
    }

    var idUsingProtocol = idMaker1();
    var idUsingGenerator = idMaker2();

    console.log(idUsingProtocol.next());
    console.log(idUsingGenerator.next());
}


function checkArrowScope(){

    var a,b,c;
    
    a = 10;
    b = 20;
    c = {key : 'set'};

    function innerFunction(){
        this.age = 0;

           setInterval(()=>{
               this.age++;
               console.log(this.age);
           }, 1000);
    }

    var test = new innerFunction();

    test();

    function innerFunction(){
        this.const = 10;

            setInterval(function(){
                this.const++;
                console.log(this.const);
            })

    }

}


document.body.appendChild(component('div'));
document.body.appendChild(component('div' , 'log'));

// test();
// sendBox();
checkArrowScope();


// if (module.hot) {
//        module.hot.accept('./print.js', function() {
//          console.log('Accepting the updated printMe module!');
//          printMe();
//        })
//      };
    