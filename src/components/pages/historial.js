import React from 'react'
import DataTable from "react-data-table-component";
import  { useEffect, useState } from "react";
import {  getOrders } from "../../services/orden.services";
import { getUser } from "../../services/user.service";
import { getPort } from "../../services/puerto.services";
import { useAuth } from "../../hooks/user.hook";
import { Link } from 'react-router-dom';
 const explanable= ({data}) =>{
    return (
        
        <section className="contact-clean">
              <div className="col-8">
        <table className="table">
          <thead>           
            <tr>              
              <th>Valor factura</th>
              <th>Fecha factura</th>
              <th>Estado</th>
              <th>Fecha estado</th>     
              <th>Ver</th>                        
            </tr>
          </thead>
          <tbody>

                  <tr>
                    <td>{data.invoice.value}</td>
                    <td>{data.invoice.Date}</td>
                    <td>{data.stateOrder.state}</td> 
                    <td>{data.stateOrder.date}</td>
                    <td><Link to={`/Factura/${data._id}`}  >Ver</Link></td>                   

                  </tr>
          </tbody>
        </table>
      </div>     
        {/* <h1 className="text-center">Historial de ordenes de despacho</h1>
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Dimensiones</th>
                        <th>Origen</th>
                        <th>Destino</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                        
                <tbody>
                    {datos.ordenes.map(e=>(
                        <tr>
                        <td>{e.id_orden}</td>
                        <td>{e.nombre}</td>
                        <td>{e.descripcion}</td>
                        <td>{e.dimensiones}</td>
                        <td>{e.origen}</td>
                        <td>{e.destino}</td>
                        <td>{e.estado}</td>
                    </tr>
                    ))}
                    
                    
                </tbody>
                
                
            </table>
        </div> */}
    </section>
    )
};

const Historial = () => {
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState();
    const [ports, setPort] = useState();
    const auth = useAuth();
    const idUser=auth.user.data?.id   
    // const [products, setProducts] = useState([]);
const columns = [
    {
      name: "Puerto Origen",
      selector: (row) => row.ports.idPortDeparture.name,
      sortable: true,
    },
    {
      name: "Puerto Destino",
      selector: (row) => row.ports.idPortDestination.name,
      sortable: true,
    },
    {
      name: "Usuario",
      selector: (row) => row.idUser.name,
      sortable: true,
    },
    {
        name: "Estado",
        selector: (row) => row.stateOrder.state,
        sortable: true,
      },
      {
        name: "Fecha",
        selector: (row) => row.Date,
        sortable: true,
      }
  ];
  const listProducts = () => {
    getOrders().then(({ data }) => {
      if(auth?.user?.data?.role==="Admin"){
        setProducts(data.items)
      }
      else{
      let datos=data.items;
      let datos_filtrados=datos.filter(e=>e.idUser._id===idUser)
      setProducts(datos_filtrados);
    }
    });
  };
  useEffect(() => {
    getUser().then(({ data }) => {
        setUsers(data.items);
    });
    getPort().then(({ data }) => {
        setPort(data.items);
    });
    listProducts();
  }, []);
return(
    <>
        <section>
        <div>   
        <DataTable
        title="Lista de ordenes"
        columns={columns}
        data={products}
        pagination
        expandableRows
        expandableRowsComponent={explanable}
        />
        </div>
        </section>
    </>
    )
}

//  }
export default Historial;
