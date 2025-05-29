function guardar(event){
event.preventDefault();

  const archivo = document.getElementById("archivo").files[0];
  const dni = document.getElementById("dni").value;
  const nombre = document.getElementById("nombre").value;
  const apellidos = document.getElementById("apellidos").value;
  const email = document.getElementById("correo").value;

  if (!archivo) {
    alert("Por favor selecciona un archivo.");
    return;
  }

  // Ruta en Firebase Storage
  const storageRef = storage.ref(`usuarios/${dni}/${archivo.name}`);

  // Subir archivo
  storageRef.put(archivo).then((snapshot) => {
    snapshot.ref.getDownloadURL().then((url) => {
      console.log("Archivo subido. URL:", url);

      // Ahora puedes guardar los datos junto con la URL del archivo
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify({
        dni: dni,
        nombre: nombre,
        apellidos: apellidos,
        email: email,
        archivoURL: url
      });

      let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      fetch("https://desarrollosf.netlify.app/.netlify/functions/usuarios/usuarios", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log("Datos guardados:", result))
        .catch((error) => console.error("Error al guardar datos:", error));
    });
  }).catch((error) => {
    console.error("Error al subir archivo:", error);
  });
}

function cargar(resultado){
    let transformado = JSON.parse(resultado);
    var salida="";
    var elemento="";

    for (const [clave, valor] of Object.entries(transformado)) {
        //console.log(`${clave}: ${valor}`);
        salida = "Clave=" + clave +  " Valor=" + valor + "<br>" + salida;
    }
    document.getElementById("rta").innerHTML = salida;
}

function listar(event){
    event.preventDefault();
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    let ndoc = document.getElementById("numdoc").value;
    //usuarios?id=user124
         //https://proyectofinaldsws.netlify.app/.netlify/functions/usuarios
    fetch("https://desarrollosf.netlify.app/.netlify/functions/usuarios/usuarios?iden="+ndoc, requestOptions)
      .then((response) =>
        response.text())
      .then((result) =>
        cargar(result))
      .catch((error) =>
        console.error(error));
}