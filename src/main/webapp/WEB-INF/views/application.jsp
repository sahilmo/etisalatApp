<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<!--to inform browser site is ready for mobile layout  -->
<meta name="viewport" content="width=device-width, initial-scale=1">

<!--================= Bootstrap Core =================-->
<link href="webjars/bootstrap/4.0.0/css/bootstrap.min.css"
	rel="stylesheet">
<!--================= Font Awesome Icons =================-->
<link rel="stylesheet"
	href="webjars/font-awesome/4.7.0/css/font-awesome.min.css"></link>
<!--================= Custom styles for this template =================-->
<link href="<c:url value="/assets/css/simple-sidebar.css" />"
	rel="stylesheet">
<style>
.container-fluid {
	padding: 0;
}
</style>
<title>Application</title>
</head>
<body>
	<div class="d-flex" id="wrapper">
		<%@include file="templates/sidebar.jsp"%>

		<div class="container-fluid">

			<%@include file="templates/nav-bar.jsp"%>

			<div class="container text-center">
				<hr />
				<div class="row">

					<span style="padding: 35px; color: #0080ff"> <a
						href="/newUser"> <i class="fa fa-id-badge fa-3x"></i> <br>
							User
					</a>
					</span> <span style="padding: 35px; color: #0080ff"> <a
						href="/employee"> <i class="fa fa-id-badge fa-3x"></i> <br>
							Employee
					</a>
					</span>
				</div>
				<br>
				<h2>Etisalat Project Description:</h2>
				<table class="table .table-bordered">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Front End</th>
							<th scope="col">Back End</th>

						</tr>
					</thead>
					<tbody>

						<tr>
							<th scope="row">User</th>
							<td>JSP,Bootstrap,Jquery(webjars)</td>
							<td>H2, Spring ,Hibernate</td>

						</tr>
						<tr>
							<th scope="row">Employee</th>
							<td>React , JSP</td>
							<td>H2,Rest Service, Hibernate validator</td>

						</tr>
					</tbody>
				</table>

			</div>

		</div>
	</div>
	<!-- ================================================================================== -->
	<script src="webjars/jquery/3.3.1/jquery.min.js"></script>
	<script src="webjars/bootstrap/4.0.0/js/bootstrap.min.js"></script>
	<script type="text/javascript"
		src="${pageContext.request.contextPath}/assets/js/template.js"></script>


</body>
</html>