import styles from '../styles/ContactPage.module.css'
import {useRouter} from "next/router";
import BasicForm from "../components/BasicForm";

const baseInputs = [
    {
        label: "Firstname",
        name: "first_name",
        inputType: "text",
        placeholder: "Enter Firstname",
        required: true
    }, {
        label: "Lastname",
        name: "last_name",
        inputType: "text",
        placeholder: "Enter Lastname",
        required: false
    }, {
        label: "Street",
        name: "street",
        inputType: "text",
        placeholder: "Enter street",
        required: false,
        addressField: true
    }, {
        label: "Number",
        name: "streetNumber",
        inputType: "number",
        placeholder: "Enter street number",
        required: false,
        addressField: true
    }, {
        label: "Plz",
        name: "plz",
        inputType: "number",
        placeholder: "Enter plz",
        required: false,
        addressField: true
    }, {
        label: "Location",
        name: "location",
        inputType: "text",
        placeholder: "Enter location",
        required: false,
        addressField: true
    }, {
        label: "Message",
        name: "message",
        inputType: "textarea",
        placeholder: "Enter Message",
        required: true,
    }]

export default function ContactPage() {
    const router = useRouter();

    async function onSubmit(e, formData) {
        // send contact form

    }

    return (<main className={styles.container}>
        <BasicForm inputs={baseInputs} defaultData={{address: {}}}
                   submitText={"Send"} onValidSubmit={onSubmit}/>
    </main>)
}