

class calculator{



              constructor(previousOperandTextElement,currentOperandTextElement)
                        {
                          this.currentOperandTextElement=currentOperandTextElement;
                          this.previousOperandTextElement=previousOperandTextElement;
                          this.currentOperand='';
                          this.previousOperand='';
                          this.Operation='';
                          this.calculationResult='';
                        }
                         


                        Clear()
                            {

                              this.currentOperand='';
                              this.previousOperand='';
                              this.Operation='';
                            }

                        Delete()
                            {
                               this.currentOperand=this.currentOperand.slice(0,-1);
                            }

                        AppendNumber(number)
                           {
                                if(   (number==='.') &&  (this.currentOperand.includes('.'))   )return
                                this.currentOperand=this.currentOperand.toString()+number.toString();
                                
                           }



                        operations(operationv)
                            {
                               
                                
                                if(this.currentOperand==='')return
                                if(this.previousOperand!=='')
                                  {
                                     this.calculation();
                                  }

                                  this.Operation=operationv;
                                  this.previousOperand=this.currentOperand;
                                  this.currentOperand='';
                                 

                            }
                               
                           


                        Display()
                            {


                              this.currentOperandTextElement.innerText=this.currentOperand.toString();
                              
                              if(this.Operation!=='')
                                  {
                                       this.previousOperandTextElement.innerText=
                                       this.previousOperand.toString()+this.Operation;
                                  }
                                  else
                                    {
                                        this.previousOperandTextElement.innerText='';
                                    }
                              
                                 
                             



                            }
                       
                        calculation()
                              {
                                // alert(this.previousOperand);
                                // alert(this.currentOperand);
                                const prev=parseFloat(this.previousOperand);
                                const curr=parseFloat(this.currentOperand);
                                let result;
                                switch(this.Operation)
                                     {
                                       case '+':
                                          result=prev + curr;
                                          break;

                                       case '-':
                                            result=prev -curr;
                                            break;

                                      case '*':
                                        result=prev * curr;
                                        // alert(result);
                                        break;
                                       
                                      case '/':
                                        result=prev /curr;
                                        break;

                                      default:
                                         alert("there no operator selecter");


                                     }
                                  
                                    //  alert(this.calculationResult);
                                     this.currentOperand=result.toString();
                                     this.Operation='';
                                     this.previousOperand='';
                                     
                                    
                              }


}



const NumberButton=document.querySelectorAll('[data-number]');
const OperationButton=document.querySelectorAll('[data-operation]');
const EqualButton=document.querySelector('[data-equals]');
const AllClearButton=document.querySelector('[data-all-clear]');
const DeleteButton=document.querySelector('[data-delete]');


const previousOperandTextElement=document.querySelector('[data-previous-operand]');
const currentOperandTextElement=document.querySelector('[data-current-operand]');



const cal1=new calculator(previousOperandTextElement,currentOperandTextElement);



NumberButton.forEach((button)=>{
    button.addEventListener('click',()=>{
      cal1.AppendNumber(button.innerText);
      cal1.Display();
      
    })
})

AllClearButton.addEventListener('click', (button)=>{
  cal1.Clear();
  cal1.Display();
})

OperationButton.forEach((button)=>{
  button.addEventListener('click',()=>{
    cal1.operations(button.innerText);
    cal1.Display();
  })
})

EqualButton.addEventListener('click',()=>{
  cal1.calculation();
  cal1.Display();
})

DeleteButton.addEventListener('click',(button)=>{
  cal1.Delete();
  cal1.Display();
})