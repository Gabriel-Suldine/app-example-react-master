import { FormEvent, useState } from "react"
import "./style.css"
export function StateExample() {
    console.log("renderizou")
    const [name, setName] = useState("")

    function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
        let nome = event.target.value
        setName(nome)
        console.log("Disparou Evento")
    }
    return (
        <>
            <h1>State Example</h1>
            <input onInput={handleInput} className="inputName" type="text" />
            <h1>{name}</h1>
            <h1>{name}</h1>
        </>
    )
}
