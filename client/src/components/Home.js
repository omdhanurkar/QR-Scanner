
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import "../App.css"
import axios from "axios"

const QRScanner = () => {
    const [data, setData] = useState('no result');

    const handleSubmit = async (event) => {
        event.preventDefault();
        alert(`QR code scanned: ${data}`)
        axios.post('https://qrscanner-9758e-default-rtdb.asia-southeast1.firebasedatabase.app/data.json',
             JSON.stringify(data)
        )
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
                <p>{data}</p>
            </form>

        </div >

    );
};

export default QRScanner;


