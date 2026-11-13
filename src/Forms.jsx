import React, { useState } from "react";

const Forms = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        age: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(
            `Form Payload: ${formData.firstname} -${formData.lastname} -${formData.age}`,
        );
        setFormData({
            firstname: "",
            lastname: "",
            age: 0,
        });
    }

    return (
        <>
            <div className="form-contailner">
                <div className="form-header">
                    <h2>Application Form</h2>
                </div>
                <div className="form-body">
                    <h3>Personal Details</h3>
                    <div className="form-data">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="firstname">First Name:</label>
                            <input
                                type="text"
                                name="firstname"
                                value={formData.firstname}
                                placeholder="First Name"
                                onChange={handleChange}
                            />
                            <label htmlFor="lastname">Last Name:</label>
                            <input
                                type="text"
                                name="lastname"
                                value={formData.lastname}
                                placeholder="Last Name"
                                onChange={handleChange}
                            />
                            <label htmlFor="age">Age:</label>
                            <input
                                type="text"
                                name="age"
                                value={formData.age}
                                placeholder="Age"
                                onChange={handleChange}
                            />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Forms;
