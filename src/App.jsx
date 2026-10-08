import {useState} from 'react'
function App(){
    const [dispaly,SetDisplay]=useState("")
    const click=((value)=>{
        SetDisplay(dispaly+value)
    })
    const calculate=(()=>{
        SetDisplay(eval(dispaly))
    })

    const clear=(()=>{
        SetDisplay("")
    })

    return(
        <>
        <h1>Calculator</h1>
        <input type="text" value={dispaly} />
        <button onClick={()=>{
            click("1")
        }}>1</button>
        <button onClick={()=>{
            click("2")
        }}>2</button>
        <button onClick={()=>{
            click("3")
        }}>3</button>
        <button onClick={()=>{
            click("4")
        }}>4</button>
        <button onClick={()=>{
            click("5")
        }}>5
        </button>
        <button onClick={()=>{
            click("6")
        }}>6</button>
        <button onClick={()=>{
            click("7")
        }}>7</button>
        <button onClick={()=>{
            click("8")
        }}>8</button>
        <button onClick={()=>{
            click("9")
        }}></button>
        <button onClick={()=>{
            click("0")
        }}>0</button>
        <button onClick={()=>{
            click("+")
        }}>+</button>
        <button onClick={()=>{
            click("-")
        }}>-</button>
        <button onClick={()=>{
            click("*")
        }}>*</button>
        <button onClick={()=>{
            click("/")
        }}>/</button>
        <button onClick={calculate}>=</button>
        <button onClick={clear}>clear</button>
        </>
    )
}
export default App