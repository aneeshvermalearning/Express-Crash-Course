<% include partials/header %>
	<h1>Add Customer </h1>
<% if(errors) { >%
		
	<% }
	<form method="POST" action="/users/add">
		<label>First Name </label>
		<br>
		<input type="text" name="first_name">
		
		<br>

		<label>Last Name </label>
		<br>
		<input type="text" name="last_name">
		
		<br>

		<label>Email </label>
		<br>
		<input type="text" name="email">
		<br><br>
		<input type="submit" value="Submit">
	</form>
	<h1> <%= title %> </h1>
		<ul>
		<% users.forEach(function(user){ %>
			<li><%= user.first_name %> <%= user.last_name %></li>
		<%})%>
		</ul>
<% include partials/footer %>
