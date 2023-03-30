import './style.css'
type ContactListProps = {
    children:React.ReactNode
}
export function ContactList({children}:ContactListProps){

    return(
        <>
            <section className="contactList">
                {children}
            </section>
        </>
    )
}