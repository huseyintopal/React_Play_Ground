import React from "react";

class ClassComponent extends React.Component {
  // constructor(props) {     //* artık constructor kullanmadan da props ve isteklerinizi state ile de yapabiliyoruz.
  //   super(props)
  //   this.state = {count: 0}
  // }
  state = {count: 0}

increase = () =>this.setState({count : this.state.count +1})
// increase = () => this.setState({name: "Felix"})

//*component oluştuktan sonra gerçekleşecek eylem (aslında 'clas comp didmounted' yazsak olurdu clg ye)
componentDidMount() {
  console.log("Clas Comp Mounted");
  this.increase()
}

  render() {
    console.log("Class Comp Rendered");
    return (
      <div className="class">
        <h2>Class Component</h2>
        <h3>Count:{this.state.count}</h3>
        {/* <h3>Name:{this.state.name}</h3> */}
        <button onClick={this.increase}>Increase</button>
      </div>
    )
  }
}
export default ClassComponent