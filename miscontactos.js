let contactos = [{nombre:'Harun',apellido:'Meraga',tel:'646464877',direccion:'calle Fluvia'},
        {nombre:'Adam',apellido:'Montesinos',tel:'65437821',direccion:'Santa Coloma'},
        {nombre:'Sergio',apellido:'Lence',tel:'112',direccion:'Manchester'},
        {nombre:'Ankit',apellido:'Kumar',tel:'51515102',direccion:'Amazon'},
        {nombre:'Victor',apellido:'Uy',tel:'646467677',direccion:'Su casa'}];
html();
createTable(contactos);

function html(){
    document.body.innerHTML= ` <div class="buscador">
    <h3 class="title">Mis Contactos <input id="lupa" type="text" placeholder="Buscar contacto..."><button onclick="Search()">Buscar</button><button id="buttonadd" onclick="Insert()">Añadir</button></h3>
</div>
<div>
    <table id="tabla">
    </table>
</div>
<footer>
    <p>(C)Harun Meraga & Adam Montesinos</p>
</footer>`
}

function Search() {
    let arrBusqueda=[]
    input = document.getElementById("lupa").value;
    if (input == null){createTable(contactos)}
    else{
        contactos.filter((e)=>{
            if((e.nombre.toLowerCase().match(input.toLowerCase())) || e.apellido.toLowerCase().match(input.toLowerCase())|| e.tel.toLowerCase().match(input.toLowerCase())||e.direccion.toLowerCase().match(input.toLowerCase())){
                arrBusqueda.push(e);
            }
        })
        createTable(arrBusqueda);
    }
}

function Insert(){
    nombre = prompt("Introduce un nombre:");
    if(nombre == ""){
        alert("No se puede dejar en blanco");
        Insert();
    }else if(nombre.length>20){
        alert("El máximo són 20 letras");
        Insert();
    }else{
        apellido = prompt("Introduce un apellido:");
        if(apellido == ""){
            alert("No se puede dejar en blanco");
            Insert();
        }else if(apellido.length>20){
            alert("El máximo són 20 letras");
            Insert();
        }else{
            parseInt(tel = prompt("Introduce un teléfono:"));
            if(tel == ""){
                alert("No se puede dejar en blanco");
                Insert();
            }else if(tel.length>12 ){
                alert("El máximo són 12 dígitos");
                Insert();
            }else if(isNaN(tel)){
                alert("En el teléfono solo se deben introducir dígitos");
                Insert();
            }
            else if(!ComparaTel(tel)){
                Insert();
            }else{
                direccion = prompt("Introduce un dirección:");
                if(direccion == ""){
                    alert("No se puede dejar en blanco");
                    Insert();
                }else if(direccion.length>30){
                    alert("El máximo són 30 dígitos");
                    Insert();
                }
                    let contacto={
                        nombre:nombre,
                        apellido:apellido,
                        tel:tel,
                        direccion:direccion,
                    };
                    contactos.push(contacto);
                    createTable(contactos);
                    console.log(contactos);
            }
        }
    }
}

function Mod(pos){
    nombre = prompt("Introduce un nuevo nombre:");
    if(nombre == ""){
        alert("No se puede dejar en blanco");
        Mod();
    }else if(nombre.length>20){
        alert("El máximo són 20 letras");
        Mod();
    }else{
        apellido = prompt("Introduce un nuevo apellido:");
        if(apellido == ""){
            alert("No se puede dejar en blanco");
            Mod();
        }else if(apellido.length>20){
            alert("El máximo són 20 letras");
            Mod();
        }else{
            parseInt(tel = prompt("Introduce un nuevo teléfono:"));
            if(tel == ""){
                alert("No se puede dejar en blanco");
                Mod();
            }else if(tel.length>12){
                alert("El máximo són 12 dígitos");
                Mod();
            }else if(isNaN(tel)){
                alert("En el teléfono solo se deben introducir dígitos");
                Mod();
            }else if(!ComparaTel(tel)){
                Insert();
            }else{
                direccion = prompt("Introduce una nueva dirección:");
                if(direccion == ""){
                    alert("No se puede dejar en blanco");
                    Mod();
                }else if(direccion.length>30){
                    alert("El máximo són 30 dígitos");
                    Mod();
                }
                    contactos[pos].nombre=nombre;
                    contactos[pos].apellido=apellido;
                    contactos[pos].tel = tel;
                    contactos[pos].direccion = direccion;    

                    createTable(contactos);
                    console.log(contactos);
            }
        }
    }
}

function Borrar(pos){
    contactos.splice(pos,1);
    createTable(contactos);
}

function ComparaTel(tel){
    let validacion=true;
    for (i=0; i<contactos.length; i++){
        if(tel == contactos[i].tel){
            alert("Numero existente");
            validacion=false;
            break;
        }
    }
    return validacion;
}

function createTable(arr){
    if(arr.length==0){
        document.getElementById('tabla').innerHTML = "<tr><th>NO HAY CONTACTOS</th>";
    }
    else{
        document.getElementById('tabla').innerHTML = "";
        document.getElementById('tabla').innerHTML = "<tr><th>NOMBRE</th><th>APELLIDO</th><th>TELÉFONO</th><th>DIRECCIÓN</th></tr>";
        //Crear row por cada elemento del array
        for(i=0;i<arr.length;i++){
            let tabla = document.getElementById('tabla').insertRow();
            let col1 = tabla.insertCell(0);
            let col2 = tabla.insertCell(1);
            let col3 = tabla.insertCell(2);
            let col4 = tabla.insertCell(3);
            let col5 = tabla.insertCell(4);
            let col6 = tabla.insertCell(5);
            col1.innerHTML = arr[i].nombre;
            col2.innerHTML = arr[i].apellido;
            col3.innerHTML = arr[i].tel;
            col4.innerHTML = arr[i].direccion;
            col5.innerHTML = `<button id="buttonmod" onclick="Mod(${i})">Modificar</button>`;
            col6.innerHTML = `<button id="buttondelete" onclick="Borrar(${i})">Eliminar</button>`;        
        }
    }
}
