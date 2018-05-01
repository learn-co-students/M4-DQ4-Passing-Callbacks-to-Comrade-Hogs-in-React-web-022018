import React from "react"
import exclamation from "../assets/exclamation.png"


export default class Pig extends React.Component {


  panic = () => (<img className="exclamation" src={exclamation} alt="" />)


  render() {
    let panicked = setTimeout(this.panic(), 2000)
    // console.log("pig props", this.props)
    return(
      <div id={this.props.name} className="sheeple">
        {this.props.environment==="inhospitable" ? this.panic() : console.log("normal")}
      </div>
    )
  }
}
