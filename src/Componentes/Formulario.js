import React, { Component } from "react";

class Formulario extends Component {
    constructor(){
        super();
        this.state ={
            titulo:"",
            descripcion:"",
            responsable:"",
            numero:0,
            prioridad:"Alta",
            imagen:""

        }
        this.cambio = this.cambio.bind(this);
        this.guardar = this.guardar.bind(this);
    }

    cambio(e){
        //console.log(e.target.value,e.target.name)
        this.setState({
            [e.target.name]:e.target.value

        })
        console.log(this.state);        

    }
    guardar(){
        alert("Guardando...")

    }

    render(){
        return (
            <div className="card w-50 m-auto bg-dark">
                <h1 className="m-auto text-white">Nueva Tarjeta</h1>
                <form className="card-body">
                    <div className="form-group">
                        <input type="text" placeholder="Título Tarjeta" name="titulo" onChange={this.cambio} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Descripción Tarjeta" name="descripcion" className="form-control mt-3"onChange={this.cambio}/>
                    </div>
                    <div className="form-group">
                        <input type="number" placeholder="Tiempo en minutos" name="numero" className="form-control mt-3"onChange={this.cambio}/>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Responsable Tarjeta" name="responsable" className="form-control mt-3"onChange={this.cambio}/>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Imagen Tarjeta" name="imagen" className="form-control mt-3"onChange={this.cambio}/>
                    </div>
                    <h5 className="text-white mt-2 text-center">Prioridad</h5>
                    <div className="form-group">
                        <select name="prioridad" className="form-control mt-3 "onChange={this.cambio}>
                            <option>Baja</option>
                            <option>Media</option>
                            <option>Alta</option>
                        </select>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
                        <button className="btn btn-primary" type="button" onClick={this.guardar}>Guardar</button>
                    </div>                  
                  
                </form>

            </div>

        );
    }
}

export default Formulario;