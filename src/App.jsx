import "./App.css";
import { useState, useRef } from "react";
function App() {
    const [err, setErr] = useState("");
    const [dec, setDec] = useState("");
    let inputEl = useRef(null);
    
    function submit() {
        let input = inputEl.current.value;
        let hasil = parseInt(input, 2);
        setDec(hasil);
        const cek = input.match(/^[0-1]+$/g);
        // cek jika ada angka selain angka 0 dan 1 maka akan mengeluarkan error
        if (cek === null) { // 
            setErr("masukkan angka 1 dan 0 saja!!"); 
        } else {
            setErr('')
        }
    }

    return (
        <div className="App">
            <input
                ref={inputEl}
                onChange={submit}
                type="text"
                className=""
                placeholder="masukkan angka"
            ></input>
            <h1>{err} </h1>
            <p>{dec}</p>
        </div>
    );
}

export default App;
