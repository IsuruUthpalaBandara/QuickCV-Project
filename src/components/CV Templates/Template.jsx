import React from 'react'
import {Row,Col, Image, Space} from 'antd'
import pic from './20230405_202936.jpg'


const createList=(details)=>{
  return details
}


export default function Template() {


  const firstName=JSON.parse((localStorage.getItem('values'))).firstName
  const lastName=JSON.parse((localStorage.getItem('values'))).lastName
  const email=JSON.parse((localStorage.getItem('values'))).email
  const contactNo=JSON.parse((localStorage.getItem('values'))).contactNo
  const gender=JSON.parse((localStorage.getItem('values'))).gender
  const education=JSON.parse((localStorage.getItem('values'))).education.map(createList)
  const experience=JSON.parse((localStorage.getItem('values'))).experience.map(createList)
  const internships=JSON.parse((localStorage.getItem('values'))).internships.map(createList)
  const SoftSkills=JSON.parse((localStorage.getItem('values'))).SoftSkills.map(createList)
  const ComputerSkills=JSON.parse((localStorage.getItem('values'))).ComputerSkills.map(createList)
  const memberships=JSON.parse((localStorage.getItem('values'))).memberships.map(createList)
  const intro=JSON.parse((localStorage.getItem('values'))).intro
  const IDNo=JSON.parse((localStorage.getItem('values'))).IDNo
  const address=JSON.parse((localStorage.getItem('values'))).address
  const ref1=JSON.parse((localStorage.getItem('values'))).ref1
  const ref2=JSON.parse((localStorage.getItem('values'))).ref2
  const DOB=JSON.parse((localStorage.getItem('values'))).DOB
  const age=JSON.parse((localStorage.getItem('values'))).age

  console.log(localStorage.getItem('values'))
  console.log("=>>>",JSON.stringify(experience))
  
  return (
    <>
    <Row>

        <Col span={5} style={{backgroundColor:"black"}}>
          <div 
          style={{
            color:'white'
            }}>

             <div style={{textAlign:'center', marginTop:10}}>
              <img src={pic} alt="pic" style={{width:200,height:'auto', margin:0,borderRadius:10}}/>
             </div>


              <div style={{marginLeft:10}}>
                <div> Phone : {contactNo} </div>
                <div>{email}</div>
                 <div>{address}</div>


              </div>


          <div style={{marginTop:30, backgroundColor:'grey',marginLeft:0,paddingLeft:10}}>Computer Skills</div>
          <div style={{marginTop:10 ,marginLeft:20}}>{ComputerSkills.map(ComputerSkills=><div key={ComputerSkills}>{ComputerSkills}</div>)}</div>

          <div style={{marginTop:30, backgroundColor:'grey',marginLeft:0,paddingLeft:10}}>Soft Skills</div>
          <div style={{marginTop:10 ,marginLeft:20}}>{SoftSkills.map(SoftSkills=><div key={SoftSkills}>{SoftSkills}</div>)}</div>


          <div style={{marginTop:30, backgroundColor:'grey',marginLeft:0,paddingLeft:10}}>Memberships</div>
          <div style={{marginTop:10 ,marginLeft:20}}>{memberships.map(memberships=><div key={memberships}>{memberships}</div>)}</div>

          </div>

          
           

            

       

        
        </Col>

        <Col span={19} style={{backgroundColor:'gold'}}>
          

        <h1 style={{marginLeft:20, marginTop:20}}>{firstName+" "+lastName}</h1>
        <div style={{marginLeft:20, marginTop:20, fontSize:18}}>{intro}</div>

        <div style={{marginLeft:20, marginTop:20, fontSize:15, fontWeight:'bold'}}>Experience:</div>
           <div style={{marginLeft:60, marginTop:5, fontSize:15}}>
              {experience.map(experience=><div key={experience}>{experience}</div>)}
            </div>



            <div style={{marginLeft:20, marginTop:20, fontSize:15,fontWeight:'bold'}}>Internships:</div>
           <div style={{marginLeft:60, marginTop:5, fontSize:15}}>
              {internships.map(internships=><div key={internships}>{internships}</div>)}
            </div>

        <div style={{marginLeft:20, marginTop:20, fontSize:15,fontWeight:'bold'}}>Education:</div>
           <div style={{marginLeft:60, marginTop:5, fontSize:15}}>
              {education.map(education=><div key={education}>{education}</div>)}
            </div>

        <div style={{marginLeft:20, marginTop:20, fontSize:15,fontWeight:'bold'}}>Personal Details:</div>
        <div style={{marginLeft:60, marginTop:5, fontSize:15}}>
          <div>Age : {age}</div>
          <div>Date of Birth : {DOB}</div>
          <div>Gender : {gender}</div>
          <div>Address : {address}</div>
        </div>

        <div style={{marginLeft:20, marginTop:20, fontSize:15,fontWeight:'bold'}}>Reference:</div>
        <div style={{marginLeft:60, marginTop:5, fontSize:15}}>
          <div>{ref1}</div>
          <div>{ref2}</div>
        
         
        </div>



            
            
        
        








        
        
        
        </Col>



    </Row>
    
    </>

  )
}
