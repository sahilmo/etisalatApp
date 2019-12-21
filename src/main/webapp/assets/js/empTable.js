/**
 * 
 */
class Emp extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.editClick = this.editClick.bind(this);
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
   *  Delete User 
  */
  handleClick = () => {
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
 * get User to edit
 * 
*/ editClick() {
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
        }

      },
      error: function (jqXHR, textStatus, errorThrown) {
        alert(jqXHR.status + ' ' + jqXHR.responseText);
      }
    });
  }
  render() {
    return (
      <div>
        {
          this.state.data.map((dynamicData, Key) => {
            let keys = Object.keys(dynamicData);
            let d = dynamicData;
            return keys.map(data => {
              return (
                <div style={{ border: '1px solid black' }}>

                  <table id="emp" border="1" class="table myDataTable w-auto small table-sm table-striped table-bordered">
                    {/* <thead class="thead-dark">
                      <tr>
                        <th>#</th>
                        <th>Company</th>
                        <th>UserId</th>
                        <th>Role</th>
                        <th>Email</th>
                        <th>Desc</th>
                        <th>Contact</th>
                        <th>Password</th>
                        <th>Action</th>
                      </tr>
                    </thead> */}
                    <tbody >
                      <tr>
                        <td>{dynamicData[data].employee_id}</td>
                        <td>{dynamicData[data].first_name}</td>
                        <td>{dynamicData[data].last_name}</td>
                        <td>{dynamicData[data].email}</td>
                        <td>{dynamicData[data].phone_number}</td>
                        <td>{dynamicData[data].hire_date}</td>
                        <td>{dynamicData[data].salary}</td>
                        <td>{dynamicData[data].department.department_name}</td>
                        <td><button value={dynamicData[data].employee_id} onClick={this.editClick}
                          className="btn  btn-primary btn-sm">Edit </button> &nbsp;&nbsp;
                             <button value={dynamicData[data].employee_id} onClick={this.handleClick}
                            className="btn  btn-danger btn-sm">Delete </button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            });
          })

        }
      </div>
    )
  }
}


ReactDOM.render(<Emp />, document.getElementById("root2"));