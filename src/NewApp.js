import React, {useState, useEffect} from 'react'
import './App.css'

function MyApp (){

    const [form, setform] = useState({})

    const onChangeHandler =(e,inputField)=>{
        setform({
            ...form,
            [inputField]:e.target.value
        })
        
    }

    const calculate =(operator)=>{
        const result = document.querySelector('#result')
        if(operator === "add"){
            const calculate = Number(form.firstNumber) + Number(form.secondNumber)
            result.textContent = calculate
        }else if(operator === "multiply"){
           const calculate = form.firstNumber * form.secondNumber
            result.textContent = calculate
        }else if(operator === "divide"){
            if(form.secondNumber > form.firstNumber) {
                alert("out")
            }else {
               const calculate = form.firstNumber / form.secondNumber
                result.textContent = calculate
            }
        }

        // // switch(operator){
        // //     case "add":
        // //         calculate = Number(form.firstNumber) + Number(form.secondNumber)
        // //         result.textContent = calculate
        // //     break;
        // //     case "multiply":
        // //         calculate = Number(form.firstNumber) * Number(form.secondNumber)
        // //         result.textContent = calculate
        // //     break;
        // //     case "divide":
        // //         if(form.firstNumber < form.secondNumber){
        // //             alert("get out!!!")
        // //         }else{
        // //             calculate = Number(form.firstNumber) / Number(form.secondNumber)
        // //         result.textContent = calculate
        // //         }
        // //     break;

        // }

    }

    return(
        <div className="App">
            {console.log(form)}
           <h1> Welcome to Skillz class </h1>
           <label>First Number</label><input onChange={(event)=>onChangeHandler(event,'firstNumber')} type="number"/><br /><br />
           <label>Second Number</label><input onChange={(e)=>onChangeHandler(e,'secondNumber')} type="number"/><br />
            <button onClick={()=>calculate('add')}>Add</button>
            <button onClick={()=>calculate('multiply')}>Multiply</button> 
            <button  onClick={()=>calculate('divide')}>Divide</button>
            <h3>Result is: <span id="result" style={{color:"red"}}></span></h3>
        </div>
    )
}

export default MyApp

