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
				</div>
			</div>
		</div>
		</div>	
			<!-- Load React. -->
			<!-- Note: when deploying, replace "development.js" with "production.min.js". -->
			<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
			<script	src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
			<script	src="https://unpkg.com/babel-standalone@6.26.0/babel.js" crossorigin></script>

			<!--  <!-- Load our React component. -->
			
			<script type="text/javascript" src="${pageContext.request.contextPath}/assets/js/like_button.js"></script>
			<script type="text/babel">
			const rootE1 = document.getElementById('root')
			
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    let age = this.state.age;
    if (!Number(age)) {
      alert("Your age must be a number");
    }
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      
        <p>first name:</p>
      <input
        type='text'
        name='first_name'
      />
      <p>last name:</p>
      <input
        type='text'
        name='last_name'
      />
      <p>Email:</p>
      <input
        type='text'
        name='email'
      />
      <p>phone number:</p>
      <input
        type='text'
        name='phone_number'
      />
      <p>hire date:</p>
      <input
        type='text'
        name='hire_date'
      />
      <p>salary:</p>
      <input
        type='text'
        name='salary'
      />
      <p>department:</p>
      <input
        type='text'
        name='salary'
      />
      <br/>
      <br/>
      <input type='submit' />
      </form>
    );
  }
}	
			ReactDOM.render(<MyForm />,rootE1) 		
	
			</script>
			
			
			<script src="webjars/jquery/3.3.1/jquery.min.js"></script>
			<script src="webjars/bootstrap/4.0.0/js/bootstrap.min.js"></script>
			<script src="webjars/datatables/1.10.20/js/jquery.dataTables.min.js"></script>
			<script type="text/javascript"
				src="${pageContext.request.contextPath}/assets/js/template.js"></script>
</body>



</html>