import React from 'react'
import DataTable from "react-data-table-component";
import  { useEffect, useState } from "react";
import {  getOrders } from "../../services/orden.services";
import { getUser } from "../../services/user.service";
import { getPort } from "../../services/puerto.services";

// export default function aceptarOrden() {
//     return (
//     <div>
//         <section className="contact-clean">
//             <h1 className="text-center">Aceptar ordenes</h1>
//             <div className="table-responsive" style={{margintop: '30px'}}>
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th>Codigo</th>
//                             <th>Nombre</th>
//                             <th>Descripcion</th>
//                             <th>Dimensiones</th>
//                             <th>Origen</th>
//                             <th>Destino</th>
//                             <th>¿Aceptar?</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td>Cell 1</td>
//                             <td>Cell 2</td>
//                             <td>Cell 3</td>
//                             <td>Cell 4</td>
//                             <td>Cell 5</td>
//                             <td>Cell 6</td>
//                             <td><a href="#">Aceptar</a>&nbsp;/&nbsp;<a href="#">Rechazar</a></td>
//                         </tr>
//                         <tr>
//                             <td>Cell 1</td>
//                             <td>Cell 2</td>
//                             <td>Cell 3</td>
//                             <td>Cell 4</td>
//                             <td>Cell 5</td>
//                             <td>Cell 6</td>
//                             <td><a href="#">Aceptar</a>&nbsp;/&nbsp;<a href="#">Rechazar</a></td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </section>
//     </div>
//     )
// }
const AceptarOrden = () => {
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState();
    const [ports, setPort] = useState();
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
      setProducts(data.items);
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
        // expandableRowsComponent={explanable}
        />
        </div>
        </section>
    </>
    )
}

export default AceptarOrden;