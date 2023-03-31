import { CircularProgress, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { ContactCard } from "../../components/ContactCard";
import { ContactList } from "../../components/ContactList";
import { BaseLayout } from "../../layout/baseLayout";
import { getContacts } from "../../services/api";
import { Contact } from "../../types";



export function Contacts() {

    const [search, setSearch] = useState('')
    const [isLoading, setIsLoading] = useState<Boolean>(false)
    const [contacts, setContacts] = useState<Contact[]>([])


    const filteredContacts = () => {
        

    }

    useEffect(() => {
        async function listContacts() {
            setIsLoading(true)
            setContacts(await getContacts())
            setIsLoading(false)
        }
        listContacts()

    }, [])
    return (
        <BaseLayout appBarTitle="Agenda de Contatos">
            <TextField variant="outlined" fullWidth />
            {
                isLoading ? <CircularProgress /> :
                    (<ContactList>{
                        contacts.map(contact => {
                            return <ContactCard key={contact.login.uuid} contactData={contact} />
                        })}
                    </ContactList>)
            }


        </BaseLayout>
    )
}