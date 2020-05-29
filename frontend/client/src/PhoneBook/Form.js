import React from 'react';

const InputForm = props => {
    return(
        <form action="/action_page.php">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={props.name || ""} className="form-control" id="name" onChange={props.inputChangeHandler} />
            </div>
            <div className="form-group">
                <label htmlFor="first_phone">Mobile Number</label>
                <div style={{display:"flex"}}>
                    <input type="tel" className="form-control" name="first_phone" value={`+91 ${props.first_phone || ""}`} disabled={props.btnTxt == "Save"} id="first_phone" onChange={props.inputChangeHandler} />
                    <button type="button" data-action="plus" onClick={props.addPhone} style={{borderRadius:"50%",marginLeft:"2px"}}><span className="glyphicon glyphicon-plus"></span></button>
                </div>
            </div>
            {
                props.otherPhoneCount > 0 &&
                [...Array(props.otherPhoneCount+1).keys()].map((key,index)=>{
                    let myKey = `other_phone_${key}`
                    let phone = props.otherPhones[myKey]
                    if(key > 0){
                        return(
                            <div className="form-group">
                                <div style={{display:"flex"}}>
                                    <input type="tel" className="form-control" name="other_phone" data-key={`other_phone_${index}`} value={`+91 ${phone || ""}`}  id={`other_phone ${index}`} onChange={props.setOtherPhone} />
                                    <button type="button" data-action="minus" onClick={props.addPhone} style={{borderRadius:"50%",marginLeft:"2px"}}><span className="glyphicon glyphicon-minus"></span></button>
                                </div>
                            </div>
                        )
                    }  
                })
            }
            <div className="form-group">
                <label htmlFor="dob">DOB</label>
                <input type="date" className="form-control" name="dob" value={(props.dob && props.dob.split("T")[0]) || ""} id="dob" onChange={props.inputChangeHandler} />
            </div>
            <div className="form-group">
                <label htmlFor="first_email">Email</label>
                <div style={{display:"flex"}}>
                    <input type="email" className="form-control" name="first_email" value={props.first_email || ""} disabled={props.btnTxt == "Save"} id="first_email" onChange={props.inputChangeHandler} />
                    <button type="button" onClick={props.addEmail} style={{borderRadius:"50%",marginLeft:"2px"}}><span className="glyphicon glyphicon-plus"></span></button>
                </div>
            </div>
        </form>
    )
}

export default InputForm;