
class SaveForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        first_name: "",
        last_name: "",
        phone_number: "",
        hire_date: "",
        salary: "",
        email: "",
        manager: null,
        department: {
          department_id: 102
        }

      },
      isSubmitting: false,
      isError: false
    };
  }

  submitForm = async e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ isSubmitting: true });
    var component = this;
    await fetch("http://localhost:8080/saveOrUpdateEmp", {
      method: "POST",
      body: JSON.stringify(this.state.values),
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
        alert("Employee Saved Success");
      })
      .catch((ex) => {
        console.log('parsing failed', ex)
      })


    //console.log(this.state.data);



    // this.setState({ isSubmitting: false });
    // const data = await res;
    // !data.hasOwnProperty("error")
    //   ? this.setState({ message: data.success })
    //   : this.setState({ message: data.error, isError: true });

    setTimeout(
      () =>
        this.setState({
          isError: false,
          message: "",
          values: {
            first_name: "",
            last_name: "",
            phone_number: "",
            hire_date: "",
            salary: "",
            department: {
              department_id: 102
            },
            email: "",
            manager: null
          }
        }),
      1600
    );

    // var component = this;

    // fetch("http://localhost:8080/getAllEmp", {
    //   method: "POST",
    //   body: JSON.stringify(this.state.values),
    //   headers: {
    //     "content-type": "application/json"
    //   }
    // }
    // )
    //   .then((response) => {
    //     return response.json()
    //   })
    //   .then((json) => {
    //     component.setState({
    //       data: json
    //     })
    //     console.log('parsed json', json)
    //   })
    //   .catch((ex) => {
    //     console.log('parsing failed', ex)
    //   })
    // console.log(this.state.data)



  };

  handleInputChange = e =>
    this.setState({
      values: { ...this.state.values, [e.target.name]: e.target.value }
    });

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <div className="input-group">
            <label htmlFor="first_name">first name</label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              value={this.state.values.first_name}
              onChange={this.handleInputChange}
              title="first_name"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="last_name">last name</label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              value={this.state.values.last_name}
              onChange={this.handleInputChange}
              title="last_name"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">E-mail Address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={this.state.values.email}
              onChange={this.handleInputChange}
              title="Email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone_number">Phone</label>
            <input
              type="text"
              name="phone_number"
              id="phone_number"
              value={this.state.values.phone_number}
              onChange={this.handleInputChange}
              title="phone_number"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="hire_date">Hire Date</label>
            <input
              type="date"
              name="hire_date"
              id="hire_date"
              value={this.state.values.hire_date}
              onChange={this.handleInputChange}
              title="hire_date"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="salary">Salary</label>
            <input
              type="text"
              name="salary"
              id="salary"
              value={this.state.values.salary}
              onChange={this.handleInputChange}
              title="salary"
              required
            />
          </div>
          <button type="submit">Save</button>
        </form>
        <div>
          {this.state.isSubmitting ? "Submitting..." : this.state.message}
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h3>Create New</h3>
      <SaveForm />
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, document.getElementById('root2')) 