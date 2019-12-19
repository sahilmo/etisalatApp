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
    fetch("http://localhost:8080/getAllEmp").
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

                  <table id='emp'>
                    {/* <tr>
                      <th>Emp id</th>
                      <th>First name</th>
                      <th>Last name</th>
                      <th>Email </th>
                      <th>Mobile </th>
                      <th>Hire Date </th>
                      <th>Salary </th>
                      <th>Department </th>
                    </tr> */}
                    <tr style={{ border: '1px  black' }}>


                      <td><button value={dynamicData[data].employee_id} onClick={this.editClick}
                        className="btn  btn-primary btn-sm">Edit </button></td>
                      <td><button value={dynamicData[data].employee_id} onClick={this.handleClick}
                        className="btn  btn-danger btn-sm">Delete </button></td>
                      <td>{dynamicData[data].employee_id}</td>
                      <td>{dynamicData[data].first_name}</td>
                      <td>{dynamicData[data].last_name}</td>
                      <td>{dynamicData[data].email}</td>
                      <td>{dynamicData[data].phone_number}</td>
                      <td>{dynamicData[data].hire_date}</td>
                      <td>{dynamicData[data].salary}</td>
                      <td>{dynamicData[data].department.department_name}</td>
                    </tr>

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