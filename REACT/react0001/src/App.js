import React, { Component } from 'react';
import './App.css';
import './logo.svg'
// import Login from  './login'
class App extends Component{
  // Manejo de estados + eventos
  constructor(){
    // Habilitamos el extends del Component
    super();
    // setState({})
        this.state = {
          numero : 'No hay numeros cargados',
          usuarios : [
            {
              id : 1,
              nombre : 'franco',
              mail : 'dileo.francoj@gmail.com'
            },
            {
              id : 2,
              nombre : 'yael',
              mail : 'yalerosenfeld@gmail.com'
            }
          ]
        }

  }

  // this (referencia propia del elemento)
  // 
  sumar(e) {
    // e
    console.log(e);
    let n1 = parseInt(e.target.valor1.value);
    let n2 = parseInt(e.target.valor2.value);
    alert(n1+n2);
  }

  showMessage(dato) {
    console.log("Dato : "+dato);
    return (
      <h1>{dato}</h1>
    )
    
  }

  random(e){
    let n =   Math.floor(Math.random() * (100 - 1)) + 1;
    //let b = Math.trunc(Math.random()*100)

    this.setState({
      numero : n
    })
  }

    render() {
    const nombre = 'Franco';
    var caracteristicas = {
      apellido : 'di leo',
      edad : 25
    }
    return (
      <div>

        <h5>Numero aleatorio : {this.state.numero} </h5>
        <button type="button" onClick={this.random.bind(this)}>Random number</button>

        <input type="text" />
        <hr />
        {nombre}
        <b>{caracteristicas.apellido}</b>
        {this.showMessage('prueba de funcion que retorna un JSX')}
        {/* Bind : crea una funcion copia */}
        <form onSubmit={this.sumar.bind(this)}>
            <input type="number" name="valor1" />
            <input type="number" name="valor2" />
            <button type="submit" >Sumar numeros</button>
        </form>
        <table>
          <thead>

          <tr>
            <th>Id</th>
            <th>Nombre</th>
          </tr>

          </thead>
          <tbody>
            {this.state.usuarios.map(e=> {
              return (
                <tr>
                 <td> {e.id}</td>
                </tr>
              )
            })}
          </tbody>
        </table>

        {/* map */}

        {/* <form onSubmit={this.restar()}>
            <input type="number" name="valor1" />
            <input type="number" name="valor2" />
            <button type="submit" >Sumar numeros</button>
        </form> */}
        
      </div>
    );
  }
}

export default App;
