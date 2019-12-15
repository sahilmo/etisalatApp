<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@page import="java.util.List"%>
<!--===============================================================================================-->
<html>
<head>
<!--to inform browser site is ready for mobile layout  -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<!--================= Bootstrap Core =================-->
<link href="webjars/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
<link href="webjars/datatables/1.10.20/css/jquery.dataTables.min.css" rel="stylesheet">
<!--================= Font Awesome Icons =================-->
<link rel="stylesheet" href="webjars/font-awesome/4.7.0/css/font-awesome.min.css"></link>
<!--================= Custom styles for this template =================-->
<link href="<c:url value="${pageContext.request.contextPath}/assets/css/simple-sidebar.css" />" rel="stylesheet">

</head>
<body>
	<div class="d-flex" id="wrapper">
		<%@include file="../templates/sidebar.jsp"%>

		<div class="page-content-wrapper" style="width: 100%">

		<%@include file="../templates/nav-bar.jsp"%>

		<div class="container-fluid">
			
			<div class="card h-90 shadow-lg p-3 mb-5 bg-white rounded border">
			<div class="card-header bg-dark text-white">Apps User</div>
					<div class="card-body">
						<form id="userForm" class="needs-validation" novalidate
							method="post" action="/saveOrUpdateUser"
							modelAttribute="userData">
							<div class="row">
								<input type="hidden" id="user_code" name="user_code"
									value="${empty userData ? 0 : userData.user_code}" />


								<div class="form-group form-group-sm col-md-3 col-lg-3">
									<label class="control-label col-form-label-sm "
										for="user_comp_code">Comp Code</label> <input
										class="form-control form-control-sm " id="user_comp_code"
										name="user_comp_code" value="${empty userData ? " " :
										userData.user_comp_code}" required />
									<div class="invalid-feedback">Invalid comp code.</div>
								</div>

								<div class="form-group form-group-sm col-md-3 col-lg-3">
									<label class="control-label col-form-label-sm requiredField"
										for="user_id">User Id <span class="asteriskField">
											* </span></label> <input class="form-control form-control-sm " id="user_id"
										name="user_id" value="${empty userData ? " " :
										userData.user_id}" maxlength="32" required />
									<div class="invalid-feedback">Invalid user id.</div>
								</div>

								<div
									class="form-group form-group-sm form-group-sm col-md-3 col-lg-3">
									<label class="control-label col-form-label-sm "
										for="user_passwd">Password</label> <input
										class="form-control form-control-sm " type="password"
										id="user_passwd" name="user_passwd"
										value="${empty userData ? " " :
										userData.user_passwd}" maxlength="32" required />
									<div class="invalid-feedback">Invalid password.</div>
								</div>
								<div
									class="form-group form-group-sm form-group-sm col-md-3 col-lg-3">
									<label class="control-label col-form-label-sm "
										for="user_email">Email</label> <input
										class="form-control form-control-sm " id="user_email"
										name="user_email" type="email" value="${empty userData ? " " :
										userData.user_email}" required />
									<div class="invalid-feedback">Invalid email.</div>
								</div>

							</div>
							<div class="row">
								<div
									class="form-group form-group-sm form-group-sm col-md-3 col-lg-3">
									<label class="control-label col-form-label-sm " for="user_desc">Description</label>
									<input class="form-control form-control-sm " id="user_desc"
										name="user_desc" value="${empty userData ? " " :
										userData.user_desc}" maxlength="200" required />
									<div class="invalid-feedback">Invalid description.</div>
								</div>

								<div
									class="form-group form-group-sm form-group-sm col-md-3 col-lg-3">
									<label class="control-label col-form-label-sm " for="user_role">Role</label>
									<input class="form-control form-control-sm input-sm"
										id="user_role" name="user_role" value="${empty userData ? "
										" : userData.user_role}" required />
									<div class="invalid-feedback">Invalid role.</div>
								</div>

								<div class="form-group col-md-3 col-lg-3">
									<label
										class="control-label col-form-label-sm col-form-label-sm"
										for="user_contact_no">Contact No</label> <input
										class="form-control form-control-sm input-sm"
										id="user_contact_no" name="user_contact_no"
										value="${empty userData ? " " :
										userData.user_contact_no}" pattern=".{10,12}" required>
									<div class="invalid-feedback">Invalid contact.</div>
								</div>
							</div>
							<div class="row">
								<div class="form-group col-11">
									<button class="btn  btn-success btn-sm offset-2 float-right"
										name="submit" type="submit">Save</button>
										
									<button class="btn bg-info text-white btn-sm float-right"
									 type="button" onclick='getFakeEmp()'>Fake User</button>
								</div>
							</div>
						</form>
					</div>
					
					
					<div class="table-responsive">
						<table border="1" class="table myDataTable w-auto small table-sm table-striped table-bordered">
							<thead class="thead-dark">
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
							</thead>
							
							<tbody >
								<c:set var="i" value="1" />
								<c:forEach items="${userList}" var="u">
									<tr>
										<td>${i}</td>
										<td>${u.user_comp_code}</td>
										<td>${u.user_id}</td>
										<td>${u.user_role}</td>
										<td>${u.user_email}</td>
										<td>${u.user_desc}</td>
										<td>${u.user_contact_no}</td>
										<td>${u.user_passwd}</td>
										<td><i class="fa fa-2x fa-edit "
											onclick='editUser(${u.user_code});' style="color: Teal;"
											aria-hidden="true"></i> &nbsp;&nbsp; <i
											class="fa fa-2x fa-trash"
											onclick='deleteUser(${u.user_code})' data-toggle="modal"
											data-target="#deleteModal" style="color: red;"
											aria-hidden="true"></i></td>
									</tr>
									<c:set var="i" value="${i+1}" />
								</c:forEach>
							</tbody>
							
						</table>
						<!-- Modal -->
						<div class="modal fade" id="deleteModal" tabindex="-1"
							role="dialog" aria-labelledby="deleteModal" aria-hidden="true">
							<div class="modal-dialog" role="document">
								<div class="modal-content">
									<div class="modal-header">
										<h5 class="modal-title" id="deleteModal">Etisalat 1.0</h5>
										<button type="button" class="close" data-dismiss="modal"
											aria-label="Close">
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div class="modal-body">
										Do you want to delete <span id="deleteCode"></span> ?
									</div>
									<div class="modal-footer">
										<button type="button" class="btn btn-secondary"
											data-dismiss="modal">Cancel</button>
										<button type="button" id="deleteUserBtn" data-dismiss="modal"
											onclick='delUser()' class="btn btn-danger">Delete</button>
									</div>
								</div>
							</div>
						</div>
					</div>	
					</div>
					<!-- <div class="card-footer">
					Footer
					</div> -->
			</div>
			
		</div>


		</div>
	
	<!-- ================================================================================== -->
	<script src="webjars/jquery/3.3.1/jquery.min.js"></script>
	<script src="webjars/bootstrap/4.0.0/js/bootstrap.min.js"></script>
	<script src="webjars/datatables/1.10.20/js/jquery.dataTables.min.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/assets/js/appUserAdd.js" ></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/assets/js/template.js" ></script>

</body>
</html>