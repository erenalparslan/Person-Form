import React, { useState } from 'react';
import './Login.css'; // CSS dosyasını import edin

function Login() {
    const [form, setForm] = useState({ name: "", surname: "", gender: "0" });
    const [list, setList] = useState([]);

    const updateForm = (e) => {
        setForm((previous) => ({ ...previous, [e.target.name]: e.target.value }));
    }

    const addNameToList = () => {
        setList((prevList) => [...prevList, form.name]);
    }

    return (
        <div className="login-container"> {/* CSS sınıfınızı uygulayın */}
            <div className="input-container">
                <div className="input-label">İsim</div>
                <input className="input-field" placeholder='İsim giriniz' name="name" onChange={updateForm} value={form.name}></input>
            </div>
            <div className="input-container">
                <div className="input-label">Soyad</div>
                <input className="input-field" placeholder='Soyad giriniz' name="surname" onChange={updateForm} value={form.surname}></input>
            </div>
            <div className="input-container">
                <div className="input-label">Cinsiyet</div>
                <select className="input-field" value={form.gender} onChange={updateForm} name="gender" >
                    <option value="0">Erkek</option>
                    <option value="1">Kadın</option>
                </select>
            </div>
            <hr />
            <div className="info-display">
                <div>İsim: {form.name}</div>
                <div>Soyisim: {form.surname}</div>
                <div>Cinsiyet: {form.gender === "1" ? "Kadın" : "Erkek"}</div>
            </div>
            <button className="add-button" onClick={addNameToList}>İsmi Listeye Ekle</button>
            <ol className="name-list">
                {list.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ol>
        </div>
    );
}

export default Login;
