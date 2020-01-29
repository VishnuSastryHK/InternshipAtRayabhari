class MyCalculator {
    constructor() {
        this.stack = []
        this.top = -1
        this.operand = "";
    }

    backspace() {
        var value = document.getElementById("result").value;
        document.getElementById("result").value = value.substr(0, value.length - 1);
        //obj.mypop();
    }

    clear() {
        document.getElementById("result").value = "";
        this.stack = [];

    }
    display(val) {
        document.getElementById("result").value += val
        //obj.mypush(val);
        //obj.storeIntoStack(val);
    }

    /*storeIntoStack(ele) {
        console.log(this.operand)
        if (obj.isOperator(ele) == false) {
            this.operand += ele;
            console.log(this.operand)
        }
        else {
            obj.mypush(this.operand);
            console.log(this.stack)
            obj.mypush(ele);
            console.log(this.stack)
            this.operand = ""
        }
    }*/
    storeOperand(str) 
    {
        //var invalidInput=true;
        console.log(str)
        var n = str.length;
        var y = 0, lastOperand = "";
        var i = 0;
        while (i < n) 
        {
            console.log(i)
            if (obj.isEquals(str[i]) == true) 
            {
                lastOperand=str.substring(y,n-1)
                console.log(lastOperand);
                obj.mypush(lastOperand);
                console.log(this.stack)
                lastOperand="";
                //invalidInput=false;

            }
            else 
            {
                if(obj.isOperator(str[i-1])==true && str[i]=='+')
                {
                    this.operand += str[i];
                    console.log(this.operand)
                    
                }
                else if(obj.isOperator(str[i-1])==true && str[i]=='-')
                {
                    this.operand += str[i];
                    console.log(this.operand)
                    
                }
                else if (obj.isOperator(str[i]) == false) 
                {
                    this.operand += str[i];
                    console.log(this.operand)
                }
                else 
                {
                    obj.mypush(this.operand);
                    console.log(this.stack)
                    obj.mypush(str[i]);
                    console.log(this.stack)
                    y = i + 1;
                    this.operand = ""
                    //invalidInput=false
                }
            }

            i++;
        }
       /* if(invalidInput==true)
        {
            document.getElementById("result").value="Invalid Input"
        }*/
    }


    mypush(element) {
        this.top = this.top + 1;
        this.stack[this.top] = element;
        //document.getElementById("demo").innerHTML=ele;

    }

    clearStack()
    {
        this.stack=[];
        this.top=-1;
    }
    mypop() {
    
        this.top = this.top - 1;
    
    }
    /*
        mydisplay() 
                {   
                    document.getElementById("result").value=""
                    var i=0;
                    while(i<=this.top)
                    {
                                        
                    document.getElementById("result").value += this.stack[i]+",";
                    i++;
                    }
     
                }
        */


    inverse() 
    {
        var x = document.getElementById("result").value;
        document.getElementById("result").value = 1 / x;
    }

    square() {
        var x = document.getElementById("result").value;
        document.getElementById("result").value = x * x;
    }

    squareroot() {
        var x = document.getElementById("result").value;
        document.getElementById("result").value = Math.sqrt(x);
    }

    solve() {
        /*
        var postfix = [];
        postfix=obj.infix_postfix(this.stack, postfix);
        //var result = obj.evaluationOfPostfix(postfix);
        //document.getElementById("result").value = postfix;
        document.getElementById("result").value=""
        var i=0;
        document.getElementById("demo").innerHTML=postfix;
        this.stack=[];
        */
        var string=document.getElementById("result").value+"=";
        obj.storeOperand(string);
        console.log(this.stack)
        document.getElementById("result").value = ""
        var postfix = obj.infix_postfix(this.stack);
        console.log(postfix)
        var result = obj.evaluationOfPostfix(postfix);
        console.log(result)

        if(isNaN(result)==true)
        {
            document.getElementById("result").value = "Invalid Input";

        }
        else
        {
        document.getElementById("result").value = result;
        obj.displayHistory(string+result,string);
        }
        obj.clearStack();
        console.log(this.stack)
        obj.mypush(result);
        console.log(this.stack)
        this.operand=""


    }
    F(symbol) {
        switch (symbol) {
            case '+':
            case '-': return 2;
            case '*':
            case '/': return 4;
            case '^':
            case '$': return 5;
            case '(': return 0;
            case '#': return -1;
            default: return 8;
        }
    }

    G(symbol) {
        switch (symbol) {
            case '+':
            case '-': return 1;
            case '*':
            case '/': return 3;
            case '^':
            case '$': return 6;
            case '(': return 9;
            case ')': return 0;
            default: return 7;
        }
    }

    infix_postfix(infix) {
        var i, j, t;
        var symbol, s = new Array(), postfix = new Array();
        t = -1;
        s[++t] = '#';

        j = 0;
        var n = infix.length;
        for (i = 0; i < n; i++) {

            symbol = infix[i];
            while (obj.F(s[t]) > obj.G(symbol)) {
                postfix[j++] = s[t--];
            }
            if (obj.F(s[t]) != obj.G(symbol)) {
                s[++t] = symbol;
            }
            else {
                t--;

            }

        }
        while (s[t] != '#') {
            postfix[j++] = s[t--];
        }
        postfix[j] = '\0';
        return postfix;
    }

    compute(symbol, op1, op2) {
        switch (symbol) {
            case '+': return Number(op1) + Number(op2);
            case '-': return Number(op1) - Number(op2);
            case '*': return Number(op1) * Number(op2);
            case '/': return Number(op1) / Number(op2);
            case '$':
            case '^': return Math.pow(Number(op1), Number(op2));
            default: return 0;

        }
    }

    isEquals(c) {
        if (c == '=') {
            return true;
        }
        else {
            return false;
        }
    }

    isOperator(c) {
        if (c == '+' || c == '-' || c == '*' || c == '/') {
            return true;
        }
        else {
            return false;
        }

    }

    evaluationOfPostfix(postfix) {
        var s = [], res, op1, op2, t, i, symbol;
        t = -1;
        for (i = 0; i < postfix.length - 1; i++) {
            symbol = postfix[i];
            if (obj.isOperator(symbol) == false) {
                s[++t] = symbol;
            }
            else {
                op2 = s[t--];
                op1 = s[t--];
                res = obj.compute(symbol, op1, op2);
                s[++t] = res;
            }
        }

        res = s[t--];
        console.log(res)
        return res;
        
    }

    displayHistory(stringPlusResult,string)
    {   
        console.log(string)
        var displayString= document.createElement("button");
        displayString.innerHTML=stringPlusResult;

        var element = document.getElementById("divH");
        element.appendChild(displayString);

    }









}


obj = new MyCalculator();

