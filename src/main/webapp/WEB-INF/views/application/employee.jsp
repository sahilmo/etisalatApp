<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
<meta charset="UTF-8">
<title>Employee</title>
<!--to inform browser site is ready for mobile layout  -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<!--================= Bootstrap Core =================-->
<link href="webjars/bootstrap/4.0.0/css/bootstrap.min.css"
	rel="stylesheet">
<link href="webjars/datatables/1.10.20/css/jquery.dataTables.min.css"
	rel="stylesheet">
<!--================= Font Awesome Icons =================-->
<link rel="stylesheet"
	href="webjars/font-awesome/4.7.0/css/font-awesome.min.css"></link>
<!--================= Custom styles for this template =================-->
<link
	href="<c:url value="${pageContext.request.contextPath}/assets/css/simple-sidebar.css" />"
	rel="stylesheet">

</head>
<body>
	<div class="d-flex" id="wrapper">
		<%@include file="../templates/sidebar.jsp"%>

		<div class="page-content-wrapper" style="width: 100%">

			<%@include file="../templates/nav-bar.jsp"%>

			<div class="container-fluid">

				<div class="card h-90 shadow-lg p-3 mb-5 bg-white rounded border">
					<div class="card-header bg-dark text-white">Employee</div>

					<div id="root"></div>
					<div id="root2"></div>

				</div>
			</div>
		</div>
	</div>
	<!-- Load React. -->
	<!-- Note: when deploying, replace "development.js" with "production.min.js". -->
	<!-- <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
			<script	src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script> -->
	<script src="webjars/react/15.6.1/react.min.js"></script>
	<script src="webjars/react-dom/15.6.1/dist/react-dom.min.js"></script>
	<script src="https://unpkg.com/babel-standalone@6.26.0/babel.js" crossorigin></script>
	
	<!--  <!-- Load our React component. -->

	<script type="text/javascript"
		src="${pageContext.request.contextPath}/assets/js/like_button.js"></script>

	<script type="text/babel">

class SaveForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        first_name:"",
        last_name:"",
        phone_number:"",
        hire_date:"",
        salary:"",
        department:null,
        email: "",
		manager:null
        
      },
      isSubmitting: false,
      isError: false
    };
  }

  submitForm = async e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ isSubmitting: true });

    const res = await fetch("http://localhost:8080/saveOrUpdateEmp", {
      method: "POST",
      body: JSON.stringify(this.state.values),
      headers: {
        "content-type":"application/json"
      }
    });
    this.setState({ isSubmitting: false });
    const data = await res;
	alert(data);
    !data.hasOwnProperty("error")
      ? this.setState({ message: data.success })
      : this.setState({ message: data.error, isError: true });

    setTimeout(
      () =>
        this.setState({
          isError: false,
          message: "",
          values: { 
          first_name:"",
          last_name:"",
          phone_number:"",
          hire_date:"",
          salary:"",
          department:null,
          email: "",
		  manager:null
           }
        }),
      1600
    );
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
ReactDOM.render(<App />,document.getElementById('root2')) 		
</script>

	<script src="webjars/jquery/3.3.1/jquery.min.js"></script>
	<script src="webjars/bootstrap/4.0.0/js/bootstrap.min.js"></script>
	<script type="text/javascript"
		src="${pageContext.request.contextPath}/assets/js/template.js"></script>
</body>



</html>