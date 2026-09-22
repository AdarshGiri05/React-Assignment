import {useState} from 'react';
export default function Assi({addnewinfo}) {
    let [formdata, setformdata] = useState({username: "", email: "", mob:"",tech:"",text:""})
    let handel = (event)=>{
        setformdata((data)=>{
            return {...data, [event.target.name]: event.target.value}
        })
    }
    let [isvalid,setvalid] = useState(true)
    let def = (event)=>{
        event.preventDefault()
        if(!formdata.username){
            setvalid(false)
            return
        }
        addnewinfo(formdata)
        setvalid(true)
        console.log(formdata)
        setformdata({username: "", email: "", mob:"",tech:"",text:""})
    }
    return<>
        <form onSubmit={def}>
            <input type="text" name='username' placeholder='Enter your name' value={formdata.username} onChange={handel}></input>
            {!isvalid && <p style={{color:"red"}}>This Field Cannot Be Empty</p>}
            <br></br>
            <br></br>
            <input type="email" name='email' placeholder='Enter your email' value={formdata.email} onChange={handel}></input>
            <br></br>
            <br></br>
            <input type="tel" name='mob' placeholder='Enter your mobile number' value={formdata.mob} onChange={handel}></input>
            <br></br>
            <br></br>
            <div className="radio-group">
                <label htmlFor="mern"><input id="mern" type="radio" name='tech' value="MERN Stack" checked={formdata.tech==="MERN Stack"} onChange={handel}></input>MERN Stack</label>
                <label htmlFor="data"><input id="data" type="radio" name='tech' value="Data Analyst" checked={formdata.tech==="Data Analyst"} onChange={handel}></input>Data Analyst</label>
                <label htmlFor="aiml"><input id="aiml" type="radio" name='tech' value="AI/ML" checked={formdata.tech==="AI/ML"} onChange={handel}></input>AI/ML</label>
            </div>
            <br></br>
            <br></br>
            <textarea name='text' placeholder='Enter your message' value={formdata.text} onChange={handel}></textarea>
            <br></br>
            <br></br>
            <button>Register</button>
        </form>
    </>
}