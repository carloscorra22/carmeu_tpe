"use strict";
const url = 'https://62b9acbaff109cd1dc9818c3.mockapi.io/productos';
const tabladom = document.querySelector("#tabla");
document.getElementById("valor").value="";
document.getElementById("producto").value="";
tabladom.innerHTML="";
let tablas = [];
let id = 0;


async function subir__datos(){
    let productos = document.querySelector("#producto").value;
    console.log(productos);
    let valor = document.querySelector("#valor").value;
    console.log(valor);
    let items_nuevos = 
    {
        nombre:productos,
        valor:valor
    };
    try {
        let res = await fetch (url,{
                "method":"post",
                "headers":{"content-type":"application/json"},
                "body":JSON.stringify(items_nuevos)
        })
        if(res.status==201){
            document.querySelector("#msg").innerHTML="cargado";
        }
    } catch (error) {
        
    }
}

async function cargar__api(){
    try{
        let res = await fetch(url);
        let json = await res.json();
        console.log(json);
        for (const productos of json) {
        let nombre= productos.nombre;
        let valor= productos.valor;
        id = productos.id;
        tabladom.innerHTML += `<tr> <td> ${nombre} </td>
                                    <td>$${valor}</td>
                                </tr>`;
        }  
    }catch(error){
        console.log(error);
    }     
}

async function borrarUltimo() {
    try {
        let res = await fetch ( `${url}/${id}`,{
                "method":"DELETE",
        })
        if(res.status==200){
            document.querySelector("#msg").innerHTML="borrado";
        }
    } catch (error) {
        console.log(error)
        
    }
  }
  async function modificar(){
    let productos = document.querySelector("#producto").value;
    console.log(productos);
    let valor = document.querySelector("#valor").value;
    console.log(valor);
    let items_nuevos = 
    {
        nombre:productos,
        valor:valor
    };
    try {
        let res = await fetch ( `${url}/${id}`,{
                "method":"put",
                "headers":{"content-type":"application/json"},
                "body":JSON.stringify(items_nuevos)
        })
        if(res.status==200){
            document.querySelector("#msg").innerHTML="modificado";
        }
    } catch (error) {
        console.log(error)
        
    }
  }
  

document.querySelector("#btn__agregar").addEventListener("click", subir__datos);
document.querySelector("#btn__borrar__ultimo").addEventListener("click", borrarUltimo);
document.querySelector("#btn__modificar").addEventListener("click", modificar);
cargar__api();

