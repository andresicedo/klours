import React, { useState } from 'react'

export default function DiscountModal() {
    let [discountCodeString, setDiscountCodeString] = useState('')
    
    let generateRandomDiscountCode = () => {
        let randomCode = [];
        while (randomCode.length !== 9) {
            randomCode.push(getRandValue())
        }
        setDiscountCodeString(randomCode.join(""))
    }
    
    let getRandValue = () => {//set possible values in var and return
        let alphabet = "abcdefghijklmnopqrstuvwxyz123456789";
        return alphabet[Math.floor(Math.random() * alphabet.length)]
    }

    return (
        <div>
            <button onClick={generateRandomDiscountCode} style={{backgroundColor: '#3A4740', color: 'white', marginTop: '5px'}} type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                20% Discount Now
            </button>
            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title" id="exampleModalLabel" >Color Palette Discount</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <p>Your Discount Code is:  
                                <strong>
                                {`  ${discountCodeString.length > 1 ? discountCodeString.toUpperCase() : `Not available at this time.`}`}       
                                </strong>
                            </p>
                            <p>*** Only applies to this color palette.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
