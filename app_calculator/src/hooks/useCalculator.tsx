import { useRef, useState } from "react"; 

enum Operator{
    add = 0,
    subtract = 1,
    multiply =2 ,
    divide = 3,
}

 export const useCalculator = () => {

    const [number , setNumber] = useState ('0');

    const [prevNumber, setPrevNumber] = useState ('0');
    const lastOperation = useRef<Operator>();

    const clear = () => {
        setNumber('0');
        setPrevNumber('0');
    };
    const deleteOperation = () => {
        let concurrentSign  = ''; 
        let temporalNumber = number;
        
        if (number.includes('-')){
         concurrentSign = '-';
         temporalNumber = number.substring(1);
        }

        if (temporalNumber.length> 1){
            return setNumber(concurrentSign + temporalNumber.slice(0, -1))
        }

        setNumber('0');
    };

    const toggleSign = () => {
        if (number.includes ('-')){
            return setNumber(number.replace('-', '')); 
        }
        setNumber('-' + number);
    };
 
     const buildNumber = (numberString : string ) => {

        if (number.includes('.') && numberString === '.') {
            return;
        }

        if (number.startsWith('0') || number.startsWith('-0')){
            if (numberString==='.'){
                return setNumber(number + numberString);
            }
            if (numberString === '0' && number.includes('.')){
                return setNumber(number + numberString);
            }

            if (numberString !=='0' && !number.includes('.')){
                return setNumber(numberString);
            }

            if (numberString ==='0' && ! number.includes('.')){
                return ;
            }

            return setNumber (number + numberString);
        }

    setNumber(number + numberString); 
     };

     const setlastNumber = () => {
        if (number.endsWith('.')){
            setPrevNumber(number.slice(0,-1));
        }else{
            setPrevNumber(number);
        }
        setNumber('0');
     }

     const divideOperation = () =>{
        setlastNumber();
        lastOperation.current= Operator.divide;
     };

     const multuplyOperation = () =>{
        setlastNumber();
        lastOperation.current= Operator.multiply;
     };

     const addOperation = () =>{
        setlastNumber();
        lastOperation.current= Operator.add;
     };

     const subtractOperation = () =>{
        setlastNumber();
        lastOperation.current= Operator.subtract;
     };


    return {
        number,
        prevNumber,
        setlastNumber,

        buildNumber,
        toggleSign,
        clear,
        deleteOperation,
        divideOperation,
        multuplyOperation,
        addOperation,
        subtractOperation,
    };
};