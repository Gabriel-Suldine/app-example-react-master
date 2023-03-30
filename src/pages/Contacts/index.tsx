import { useEffect, useState } from "react";
import { ContactCard } from "../../components/ContactCard";
import { ContactList } from "../../components/ContactList";
import { Title } from "../../components/Title";
import { getContacts } from "../../services/api";
import { Contact } from "../../types";



export function Contacts(){
    const [search,setSearch] = useState('')
    const [contacts,setContacts] = useState<Contact[]>([])
     
    useEffect(()=>{
        async function listContacts(){
         setContacts(await getContacts())
        }
        listContacts()
    },[])
    return (
        <>
          <header>
            <Title text="Agenda de Contatos"/>
          </header>
            <main>
                <input type="search" className="inputSearch"/>
                <ContactList>
                    {
                        contacts.map(contact=>{
                           return <ContactCard contactData={contact}/>
                        })
                    }
                </ContactList>
            </main>
        </>

        
    )
}