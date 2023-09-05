import React, { useState } from "react";
import "./form.css";

const Form = () => {
    const [input, setInput] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [file, setFile] = useState("");
    const [submittedData, setSubmittedData] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleAge = (e) => {
        setAge(e.target.value);
    };

    const handleGender = (e) => {
        setGender(e.target.value);
    };

    const handleFile = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            input,
            password,
            email,
            age,
            gender,
            file,
        };

        setSubmittedData(data);
        setIsSubmitted(true);
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <h1>Enter Your Details:</h1>
            <label className="input-label">
                Input:
                <input
                    className="input-field"
                    type="text"
                    placeholder="Search"
                    onChange={handleInput}
                    value={input}
                />
            </label>
            <label className="input-label">
                Password:
                <input
                    className="input-field"
                    type="password"
                    placeholder="Password"
                    onChange={handlePassword}
                    value={password}
                />
            </label>
            <label className="input-label">
                Email:
                <input
                    className="input-field"
                    type="email"
                    placeholder="Email"
                    onChange={handleEmail}
                    value={email}
                />
            </label>
            <label className="input-label">
                Age:
                <input
                    className="input-field"
                    type="number"
                    placeholder="Age"
                    onChange={handleAge}
                    value={age}
                />
            </label>
            <label className="input-label">
                Select Gender:
                <select className="input-field" onChange={handleGender} value={gender}>
                    <option value="">Select</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                </select>
            </label>
            <label className="input-label">
                File Upload:
                <input
                    className="input-field"
                    type="file"
                    name="upload"
                    onChange={handleFile}
                />
            </label>
            <button className="submit-button" type="submit">
                Submit
            </button>
            {isSubmitted && <p id="two">Data Have been Submitted!</p>}
            <div className="submitted-data-container">
                {submittedData && (
                    <div className="submitted-data">
                        <h1>Submitted Data:</h1>
                        <p>Input: {submittedData.input}</p>
                        <p>Password: {submittedData.password}</p>
                        <p>Email: {submittedData.email}</p>
                        <p>Age: {submittedData.age}</p>
                        <p>Gender: {submittedData.gender}</p>
                        <p>File: {submittedData.file.name}</p>
                    </div>
                )}
            </div>
        </form>
    );
};

export default Form;