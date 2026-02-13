import React, { useMemo, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Country, State } from 'country-state-city'

export const Form2 = () => {
    const { register, watch, handleSubmit, formState: { errors }, reset, setValue } = useForm({
        defaultValues: {
            country: '',
            state: ''
        }
    });

    const validation = {
        country: {
            required: "Country is required"
        },
        state: {
            required: "State is required"
        }
    };

    const [allStates, setAllStates] = useState([]);
    const allCountries = useMemo(() => Country.getAllCountries(), []);
    const selectedCountry = watch("country");

    useEffect(() => {
        if (selectedCountry) {
            try {
                const states = State.getStatesOfCountry(selectedCountry);
                setAllStates(states || []);
                setValue('state', ''); 
            } catch (error) {
                console.error('Error getting states:', error);
                setAllStates([]);
            }
        } else {
            setAllStates([]);
        }
    }, [selectedCountry, setValue]);

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        alert("Form submitted: " + JSON.stringify(data));
    };

    return (
        <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
            <h2>Form 2 - Country & State Selection</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ marginBottom: "15px" }}>
                    <label>Country: </label>
                    <select {...register("country", validation.country)} style={{ padding: "8px", width: "100%" }}>
                        <option value="">Select Country</option>
                        {
                            allCountries.map((c) => {
                                return <option key={c.isoCode} value={c.isoCode}>{c.name}</option>
                            })
                        }
                    </select>
                    <p style={{ color: "red", fontSize: "12px" }}>{errors?.country?.message}</p>
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label>State: </label>
                    <select {...register("state", validation.state)} style={{ padding: "8px", width: "100%" }} disabled={!selectedCountry}>
                        <option value="">Select State</option>
                        {
                            allStates.map((s) => {
                                return <option key={s.isoCode} value={s.isoCode}>{s.name}</option>
                            })
                        }
                    </select>
                    <p style={{ color: "red", fontSize: "12px" }}>{errors?.state?.message}</p>
                </div>

                <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                    Submit
                </button>
            </form>
        </div>
    )
}