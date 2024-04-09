import React, { useState } from 'react'

export default function About() {
    const [myStyle, SetMyStyle] = useState({
      color:'black',
      backgroundColor:'white'
    })
const [btntext,setbtntext]=useState("Enable dark Mode")
 const toggleStyle = () => {
        if (myStyle.color === 'black') {
            SetMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border:'2px solid white'
            })
            setbtntext("Enable Dark Mode")
        } else {
            SetMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setbtntext("Enable light Mode")
        }
    }
    return ( 
      <div className='container' style={myStyle} >
        <h1 className="my-3">About us</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" style={myStyle} data_bs_toggle="collapse" data_bs_target="#flush-collapseOne" aria_expanded="false" aria_controls="flush-collapseOne">
            Accordion Item #1
          </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse" data_bs_parent="#accordionFlushExample">
          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button"style={myStyle} data_bs_toggle="collapse" data_bs_target="#flush-collapseTwo" aria_expanded="false" aria_controls="flush-collapseTwo">
            Accordion Item #2
          </button>
        </h2>
        <div id="flush-collapseTwo" className="accordion-collapse collapse" data_bs_parent="#accordionFlushExample">
          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button"style={myStyle} data_bs_toggle="collapse" data_bs_target="#flush-collapseThree" aria_expanded="false" aria_controls="flush-collapseThree">
            Accordion Item #3
          </button>
        </h2>
        <div id="flush-collapseThree" className="accordion-collapse collapse" data_bs_parent="#accordionFlushExample">
          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
        </div>
      </div>
    </div>
    <div className='container my-3'>
      <button onClick={toggleStyle} className="btn btn-primary">{btntext}</button>
    </div>
      </div>
    )
}