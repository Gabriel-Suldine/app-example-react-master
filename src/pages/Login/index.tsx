import { Button } from "../../components/Button";
import { Title } from "../../components/Title";

export function Login(){
    return(
        <>
             <header>
                <Title text='Login' />
            </header>
            <main>
                <form>
                    <input type="email" name="email" placeholder="E-mail"/>
                    <input type="password" name="senha" placeholder="Senha"/>
                    <Button text="Entrar" type="primary" />
                </form>
            </main>
        </>
    )
}