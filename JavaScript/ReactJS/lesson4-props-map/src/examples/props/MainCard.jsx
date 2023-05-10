import React, { Component } from 'react'
import Card from './components/Card'

 class Maincard extends Component {
  render() {
    return (
     <div className="container my-5">
       <div className='row g-5'>
            <Card title="my first title" decs="1st desc" photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFC9ooicAt-bUakcfBMQ7Yw7OOB2SwwZdROr3YMjmeAcfTjDXTQ5dr2qco_yKfZPBV4lw&usqp=CAU"/>
            <Card title="my second title" decs="2nd desc" photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGNnFzDbDOHCx_Fe6_gbY-pd4asXJwYwbbwkj1b8QvWDr-ouTj1MFx4jt-9Mz5dBdCs1k&usqp=CAU"/>
            <Card title="my third title"  decs="3rd desc"  photo="https://t3.ftcdn.net/jpg/00/00/02/94/360_F_29433_jZ5SlC8atBdm5tKlDAkBcZVSXyvMoF.jpg"/>
            <Card title="my fourth title" decs="4th desc" photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFYwzcUw00ZQOtqKyATrAnRHXvbzZg7R-L3nIy-oFvqVy18_QhUpS4-pmSb6rzsrJDO8Y&usqp=CAU"/>
      </div>
     </div>
    )
  }
}

export default Maincard