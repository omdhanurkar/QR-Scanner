import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import axios from "axios"
import "../App.css"
const MatchScanner = () => {
    const [data1, setData] = useState('no result');

    const handleSubmit = async (event) => {
        event.preventDefault();
        axios.get('https://qrscanner-9758e-default-rtdb.asia-southeast1.firebasedatabase.app/data.json')
            .then(data => {
                let k = Object.entries(data)
                let t = Object.entries(k[0][1])
                let output = t.map((n) => n[1]);
                if (output.includes(data1)) {
                    alert("Matched");
                } else {
                    alert("Not Match");
                }
            })
            .catch(err => {
                console.log(err)
            })
    };

    return (
        <div className='scanForm'>
            <form onSubmit={handleSubmit}>
                <QrReader
                    onResult={(result, error) => {
                        if (!!result) {
                            setData(result?.text);
                        }
                        if (!!error) {
                            console.info(error);
                        }
                    }}
                    style={{ width: '100%' }}
                />
                <button type="submit">Submit</button>
                <p>{data1}</p>
            </form>

        </div >

    );

};

export default MatchScanner;
