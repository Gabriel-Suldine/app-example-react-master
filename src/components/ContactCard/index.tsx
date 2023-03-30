import { Contact } from '../../types'
import './style.css'
type ContactCardProps = {
    contactData:Contact
}
export function ContactCard({contactData}:ContactCardProps){
    const {name,email,picture} = contactData
    return(
        <>
            <div className="contactCard">
                <img src={picture.medium}/>
                <div className="contactInformations">
                    <h2>{name.first}</h2>
                    <p>
                      {email}
                    </p>
                </div>
            </div>
        </>
    )
}
