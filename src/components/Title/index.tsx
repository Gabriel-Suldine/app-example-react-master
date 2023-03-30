type TitleProps = {
    text:string
}
export function Title(props:TitleProps){
    return(
        <h1>{props.text}</h1>
    )
}