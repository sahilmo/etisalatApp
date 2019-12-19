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
<style type="text/css">
form {
  overflow: hidden;
  width:100%;
}
.input-group label {
  float: left;
  padding:5px;
   display: inline-block;
  width: 140px;
  text-align: right;
}
.input-group input {
  float: right;
  clear: both;
  align: right;
  padding:5px;
  
}
#title {
  text-align: center;
  font-family: arial, sans-serif;
}

#emp {
  text-align: center;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  border: 3px solid #ddd;
  width: 100%;
}

#emp td, #emp th {
  border: 1px solid #ddd;
  padding: 8px;
}

#emp tr:nth-child(even){background-color: #f2f2f2;}

#emp tr:hover {background-color: #ddd;}

#emp th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #4CAF50;
  color: white;
}

</style>
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
	<script type="text/babel" src="${pageContext.request.contextPath}/assets/js/empForm.js"></script>
	<script type="text/babel" src="${pageContext.request.contextPath}/assets/js/empTable.js"></script>


	<script src="webjars/jquery/3.3.1/jquery.min.js"></script>
	<script src="webjars/bootstrap/4.0.0/js/bootstrap.min.js"></script>
	<script type="text/javascript"
		src="${pageContext.request.contextPath}/assets/js/template.js"></script>
</body>



</html>