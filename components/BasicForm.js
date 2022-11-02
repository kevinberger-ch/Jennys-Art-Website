import {useEffect, useState} from "react";
import styles from '../styles/BasicForm.module.css'

function validate(formData, inputs) {
    const errors = {};

    let isValid = true;

    for (const input of inputs) {
        if (input.required) {
            let inputValue = input.addressField ? formData["address"][input.name] : formData[input.name]

            if (inputValue === "" || inputValue === undefined || inputValue === null) {
                isValid = false
                errors[input.name] = "Please enter " + input.label
                continue
            }

            if (input.inputType === "email") {
                if (!inputValue.includes("@") || !inputValue.includes(".")) {
                    isValid = false;
                    errors[input.name] = "Please enter valid Email"
                }
            }
        }
    }

    return {errors, isValid};
}

export default function BasicForm({inputs, submitText, onValidSubmit, defaultData}) {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState([])

    useEffect(() => {
        if (!defaultData) return
        setFormData(defaultData)
    }, [defaultData])

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData, [name]: value
        });
    }

    function handleAddressChanged(e) {
        const name = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData, address: {
                ...formData["address"], [name]: value
            }
        });
    }

    function validateAndSubmit(e) {
        e.preventDefault()
        setErrors([])

        const result = validate(formData, inputs);

        if (!result.isValid) {
            setErrors(result.errors);
            return;
        }

        onValidSubmit(e, formData)
        setFormData({})
    }

    return (<form className={styles.form} onSubmit={validateAndSubmit}>

        {inputs.map(input => {
            return (<fieldset className={styles.field} key={input.name}>
                <label className={styles.label}>{input.required &&
                    <span className={styles.required}>*</span>} {input.label}</label>
                {input.inputType === "textarea" ? (
                    <textarea
                        value={input.addressField ? (formData["address"] && formData["address"][input.name]) : formData[input.name]}
                        type={input.inputType} placeholder={input.placeholder} name={input.name}
                        onChange={(e) => input.addressField ? handleAddressChanged(e) : handleChange(e)}/>) : (
                    <input
                        value={input.addressField ? (formData["address"] && formData["address"][input.name]) : formData[input.name]}
                        type={input.inputType} placeholder={input.placeholder} name={input.name}
                        onChange={(e) => input.addressField ? handleAddressChanged(e) : handleChange(e)}/>
                )}

                {errors[input.name] && <span className={styles.error_alert}>{errors[input.name]}</span>}
            </fieldset>)
        })}

        <input type="submit" className={styles.primary_button} value={submitText}/>

    </form>)
}