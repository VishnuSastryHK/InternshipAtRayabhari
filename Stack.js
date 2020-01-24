class Stack
{
    constructor()
    {
        this.stack=[];
        this.top=-1;
    }




push() 
{
    let element=document.getElementById("result").value;
    this.top = this.top + 1;
    this.stack[this.top] = element;
    document.getElementById("result").value="";
    
}

length() 
{
    return this.top;
}

isEmpty() 
{
    return this.top === 0;
}


pop() 
{
    let y=this.stack[this.top];
    this.top=this.top -1;
    document.getElementById("result").value=y;
}

display() 
{
    var top = this.top - 1;
      while(top >= 0) 
      { 
          // print upto 0th index
        document.getElementById("result").value=this.stack[top];
      top--;
    }
  }
  
}

