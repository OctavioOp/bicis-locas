function validateForm(){
	/* Escribe tú código aquí */
	let expRegAbc = /[a-zA-Z]/;

  $("#name").parent().find("span").remove();
  let name = $("#name").val().replace(/ /g,'');
  //console.log(name);
  if (name == "") {
    $("#name").parent().append("<span>Ingrese Nombre!</span>");
  } else if (expRegAbc.test(name) == false) {
    $("#name").parent().append("<span>Ingrese Nombre Valido!</span>");
  } else if (name[0].toUpperCase() != name[0]) {
	name = name.replace(name[0],name[0].toUpperCase())
  }
  $("#name").val(name)

 //comprobar apellido
  $("#lastname").parent().find("span").remove();
  let lastname = $("#lastname").val().replace(/ /g,'');
  console.log(lastname);
  if (lastname == "") {
    $("#lastname").parent().append("<span>Ingrese Apellido!</span>");
  } else if (expRegAbc.test(lastname) == false) {
    $("#lastname").parent().append("<span>Ingrese Apellido Valido!</span>");
  } else if (lastname[0].toUpperCase() != lastname[0]) {
    lastname = lastname.replace(lastname[0],lastname[0].toUpperCase())
  }
  $("#lastname").val(lastname)
  
  //comprobar correo
  let expRegEmail = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
  $("#input-email").parent().find("span").remove();
  let email = $("#input-email").val().replace(/ /g,'');
  console.log(email)
  if (email == "") {
    $("#input-email").parent().append("<span>Ingrese correo!</span>");
  } 
  else if (expRegEmail.test(email) == false){
	$("#input-email").parent().append("<span>Ingrese correo valido!</span>");
  }
  $("#input-email").val(email)

  //comprobacion password
  $("#input-password").parent().find("span").remove();
  let pass = $('#input-password').val().trim();

  if (pass == "") {
    $("#input-password").parent().append("<span>Ingrese password!</span>");
  } 
  else if(pass.length<6){
	$("#input-password").parent().append("<span>Password debíl ingrese mas de 6 caracteres!</span>");
  }
  else if (pass == '123456' || pass == '098754'){
	$("#input-password").parent().append("<span>really dude?</span>");
  }
  $("#input-password").val(pass)

  //comprobacion bici
  let select = $('select').val();
  $("select").parent().find("span").remove();
  //console.log(select)
  if(select == '0'){
	$("select").parent().append("<span>Seleccione una cleta!</span>");
  }
}