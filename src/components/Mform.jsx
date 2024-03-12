import React from "react";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import FormInput from "./FormInput";
import { PLATFORMS, ACTIVE_AUDIENCE, FORM_DEFAULT } from "../utils/constats";
import { useState } from "react";
import supabaseCliet from "../supabaseClient";
import toast, {Toaster } from "react-hot-toast";
import { Spinner } from "react-bootstrap";

function Mform() {
  
  const [formData, setFormData] = useState(FORM_DEFAULT)
  const [medias, setMedias] = useState([])
  const [loading, setloading] = useState(false);

  function handelMediaCheck(event){
    if(event.target.checked){
     
      setMedias([...medias, event.target.value])

    }else{
      setMedias((prevData)=> prevData.filter(m=> m != event.target.value))
    }
  }

  async function saveData(event){

    event.preventDefault()
   try{

    setloading(true)
    // inserting data in client table
    var {error} = await supabaseCliet.from("Clients").insert([{
     ...formData

    }]);

    if(error) throw error
    
    // get last id from client table
    var {data, error} = await supabaseCliet.from("Clients")
    .select('id').order('id', { ascending: false })
    .limit(1);

    if(error) throw error

    const id = data[0].id
    

    // insertion in Media Table
    const media_data = []
    medias.forEach(media=>{
      media_data.push({name:media, client_id:id})
    })

    var {error} = await supabaseCliet.from('Social_Media').insert(media_data);
    if(error) throw error

    toast.success("Operation successful!")

    // Reset Form Data
    setFormData(FORM_DEFAULT)
    setMedias([])

   }catch(error){
    toast.error(error.message)
   }finally{
    setloading(false)
   }
    
  }

  return (
    <section className="formSection" onSubmit={saveData}>
      <form  className="input-group" >
        <div className="formHeading">
          <a href="#link" className="logo">
            <img src="/logo.png" alt="logo" className="img-fluid" />
          </a>

          <p className="text">Please fill all the information</p>
        </div>

        <div className="allControl">
        
        {/* Reason For interest */}
        <div className="control">
            <label htmlFor="reason">Reason For interest</label>
            <input
              type="text"
              className="form-control"
              placeholder="Reason For interest"
              required
              onChange={(e)=> setFormData({...formData, reason:e.target.value})}
              value={formData.reason}
            />
        </div>
        {/* social Media */}
        <div className="control">
            <p className="socialTitle">Select Social Media</p>
            <div className="socialMedia">
              {

                PLATFORMS.map(media=>(
                  <div className="form-check" key={media.value}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={media.value}
                    name={media.value}
                  onChange={handelMediaCheck}

                  />
                  <p className="form-check-label" htmlFor="flexCheckDefault">
                    {media.text}
                  </p>
                </div>

                ))
             
              }
            </div>
        </div>
        
        {/* Active Audience*/}
        <div className="control">
          <label htmlFor="name">Active Audience Size</label>
          <select
            className="form-select form-control"
            aria-label="Default select example"
            name="audience"
            required
            onChange={(e)=> setFormData({...formData, audience:e.target.value})}
            value={formData.audience}
          >
            <option selected value="">....</option>
            {
              ACTIVE_AUDIENCE.map((audience)=>(

                <option value={audience.value} key={audience.value}>
                  {audience.text}
                </option>

              ))
            }

          </select>
        </div>

        {/* sector */}
       <div className="control">
            <label htmlFor="sector">Sector</label>
            <input
              type="text"
              className="form-control"
              placeholder="sector"
              required
              name="sector"
              onChange={(e)=> setFormData({...formData, sector:e.target.value})}
              value={formData.sector}
            />
        </div>

        {/* firstName */}
        <div className="control">
            <label htmlFor="firstName">first Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="first name"
              required
              name="firstName"
              onChange={(e)=> setFormData({...formData, firstName:e.target.value})}
              value={formData.firstName}
            />
        </div>
         {/* lastName */}
        <div className="control">
            <label htmlFor="lastName">last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="last name"
              required
              name="lastName"
              onChange={(e)=> setFormData({...formData, lastName:e.target.value})}  
              value={formData.lastName}
            />
        </div>

        

        {/* Date of Birth */}
        <div className="control">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              placeholder="date of birth"
              required
              name="dob"
              onChange={(e)=> setFormData({...formData, dob:e.target.value})}
              value={formData.dob}
            />
        </div>


        {/* email */}
        <div className="control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="email"
              required
              name="email"
              onChange={(e)=> setFormData({...formData, email:e.target.value})}
              value={formData.email}
            />
        </div>
         

          {/* phone */}
        <div className="control">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              className="form-control"
              placeholder="phone"
              required
              name="phone"
              onChange={(e)=> setFormData({...formData, phone:e.target.value})}
              value={formData.phone}
            />
        </div>

          
        </div>
        
        <div className="action">
          {
            loading?(
              <button type="button" className="mainBtn">
              <Spinner animation="border" size="sm" /> Loading
            </button>
            ):(
              <button type="submit" className="mainBtn">
              Submit
            </button>
            )
          }
         
        </div>
      </form>

      <Toaster />
    </section>
  );
}

export default Mform;
