
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
      },
      data: [],
      todos: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'],
      currentPage: 1,
      dataPerPage: 3
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.deleteClick = this.deleteClick.bind(this);
    this.editClick = this.editClick.bind(this);

    this.handleClick = this.handleClick.bind(this);

  }

  handleChange(propertyName, event) {
    //console.log(event);
    const employee = this.state.employee;
    employee[propertyName] = event.target.value;
    //this.setState({ employee: { ...employee } });
    this.setState({ employee: employee });
    //console.log(this.state.employee);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("saving state: ", this.state.employee);
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
  componentDidMount() {
    fetch("http://localhost:8080/getAllEmp/0").
      then(response => response.json()).
      then(findresponse => {
        this.setState({
          data: [findresponse]
        });
      })
  }
  /** 
   *  Delete Employee 
  */
  deleteClick = () => {
    let user_code = event.target.value;
    console.log('edit user:', user_code);
    $.ajax({
      type: 'DELETE',
      url: 'deleteEmp/' + user_code,
      contentType: "application/json",
      dataType: 'json',
      /*   data: { user_code: user_code }, */
      async: true,
      success: function (result) {
        alert("Result" + result.msg);
        window.location.reload();

      },
      error: function (jqXHR, textStatus, errorThrown) {
        alert("Status" + jqXHR.status + ' ' + jqXHR.responseText);
        window.location.reload();

      }
    });
  }

/**
 * get Employee to edit
 * 
*/ editClick() {
    const employee = this.state.employee;
    let employee_id = event.target.value;
    console.log('edit emp:', employee_id);
    $.ajax({
      type: 'GET',
      url: 'getEmp/' + employee_id,
      dataType: 'json',
      data: { employee_id: employee_id },
      async: true,
      success: function (result) {
        //populate empForm
        var form = $("#empForm");
        var i;
        for (i in result) {
          form.find('[name="' + i + '"]').val(result[i]);
          employee[i] = result[i];
        }

      },
      error: function (jqXHR, textStatus, errorThrown) {
        alert(jqXHR.status + ' ' + jqXHR.responseText);
      }
    });
    console.log("employee", employee);
    this.setState({ employee: employee });
  }
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
  render() {
    const { todos, currentPage, dataPerPage } = this.state;

    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * dataPerPage;
    const indexOfFirstTodo = indexOfLastTodo - dataPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map((todo, index) => {
      return <li key={index}>{todo}</li>;
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(todos.length / dataPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });

    return (
      <div>
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
        <div>
          <table id="emp" border="1" class="table">
            <thead class="thead-dark">
              <tr>
                <th>#</th>
                <th>Company</th>
                <th>UserId</th>
                <th>Role</th>
                <th>Email</th>
                <th>Desc</th>
                <th>Contact</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody >
              {this.state.data.map((dynamicData, Key) => {
                let keys = Object.keys(dynamicData);
                //let d = dynamicData;
                return keys.map(data => {
                  return (
                    // <div style={{ border: '1px solid black' }}>
                    <tr style={{ border: '1px solid black' }}>
                      <td>{dynamicData[data].employee_id}</td>
                      <td>{dynamicData[data].first_name}</td>
                      <td>{dynamicData[data].last_name}</td>
                      <td>{dynamicData[data].email}</td>
                      <td>{dynamicData[data].phone_number}</td>
                      <td>{dynamicData[data].hire_date}</td>
                      <td>{dynamicData[data].salary}</td>
                      {/* <td>{dynamicData[data].department.department_name}</td> */}
                      <td><button value={dynamicData[data].employee_id} onClick={this.editClick}
                        className="btn  btn-primary btn-sm">Edit </button> &nbsp;&nbsp;
                             <button value={dynamicData[data].employee_id} onClick={this.deleteClick}
                          className="btn  btn-danger btn-sm">Delete </button></td>
                    </tr>
                    // </div>
                  );
                });
              })}
            </tbody>
          </table>
        </div>
        <div>
          <ul>
            {renderTodos}
          </ul>
          <ul id="page-numbers">
            {renderPageNumbers}
          </ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root')) 