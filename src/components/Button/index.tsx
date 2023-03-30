import './ButtonStyle.css'
type ButtonProps = {
    text:string,
    type:"default"|"primary"
}
export function Button(props:ButtonProps){
    return(
        <button className={`btn-${props.type}`}>{props.text}</button>
    )
}