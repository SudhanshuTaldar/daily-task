import React from 'react';
import './Timesheet.css';

class Timesheet extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} style={{textAlign:'center',marginTop:'20px'}}>
          <label style={{marginTop:'10px'}}>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br></br>
          <label style={{marginTop:'10px'}}>
            Email:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br></br>
          <label style={{marginTop:'10px'}}>
            Mobile:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br></br>
          <input type="submit" value="Submit" style={{marginTop:'10px'}} />
        </form>
      );
    }
  }

export default Timesheet;