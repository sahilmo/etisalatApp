
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: {
        first_name: '',
        last_name: '',
        phone_number: '',
        hire_date: '',
        salary: '',
        email: '',
        manager: null,
        department: {
          department_id: 102
        }
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(propertyName, event) {
    //console.log(event);
    const employee = this.state.employee;
    employee[propertyName] = event.target.value;
    this.setState({ employee: employee });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    var component = this;
    fetch("http://localhost:8080/saveOrUpdateEmp", {
      method: "POST",
      body: JSON.stringify(this.state.employee),
      headers: {
        "content-type": "application/json"
      }
    })
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        component.setState({
          data: json
        })
        console.log('parsed json', json)
        const arr = Object.keys(json).map((key) => [key, json[key]]);
        console.log(arr);
        alert(arr[0][1].defaultMessage);
        window.location.reload();

      })
      .catch((ex) => {
        console.log('parsing failed', ex)
      })
  }

  render() {
    return (
      <form id="empForm" onSubmit={this.handleSubmit}>
        <div className="input-group">
          <label> first name:</label>
          <input type="text"
            name="first_name"
            value={this.state.employee.first_name} onChange={this.handleChange.bind(this, 'first_name')} />
        </div>
        <div className="input-group">
          <label > last name:
          </label>
          <input type="text"
            name="last_name"
            value={this.state.employee.last_name} onChange={this.handleChange.bind(this, 'last_name')} />
        </div>
        <div className="input-group">
          <label> email:
          </label>
          <input type="text"
            name="email"
            value={this.state.employee.email} onChange={this.handleChange.bind(this, 'email')} />
        </div>
        <div className="input-group">
          <label> phone number:
          </label>
          <input type="text"
            name="phone_number"
            value={this.state.employee.phone_number} onChange={this.handleChange.bind(this, 'phone_number')} />
        </div>
        <div className="input-group">
          <label> hire date:
          </label>
          <input type="date"
            name="hire_date"
            value={this.state.employee.hire_date} onChange={this.handleChange.bind(this, 'hire_date')} />
        </div>
        <div className="input-group">

          <label> salary:
          </label>
          <input type="text"
            name="salary"
            value={this.state.employee.salary} onChange={this.handleChange.bind(this, 'salary')} />
        </div>
        <input type="submit" className="btn  btn-success btn-sm float-left" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root')) 