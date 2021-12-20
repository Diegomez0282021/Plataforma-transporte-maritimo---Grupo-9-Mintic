import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getUserId } from "../../services/orden.services";
import { useAuth } from "../../hooks/user.hook";
import DataTable from "react-data-table-component";

export default function Consultar({ informacion }) {
    const [datos, setDatos] = useState([])
    const auth = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        let datos1 = informacion.filter(e => e.nombre === data.nombre)
        if (datos1) {
            setDatos(...datos1);
        }
        else {
            setDatos(...[])
        }

    }
    const listaOrders = () => {
        getUserId(auth?.user?.data.id).then(({ data }) => {
            setDatos(data.items);
            console.log(data.items)
        });
    }
    useEffect(() => {
        listaOrders();
    }, []);
    const columns = [
        {
            name: "Codigo",
            selector: (row) => row._id,
            sortable: true,
        },
        {
            name: "Nombre",
            selector: (row) => row.nombre,
            sortable: true,
        },
        {
            name: "Descripcion",
            selector: (row) => row.descripcion,
            sortable: true,
        },
        {
            name: "Dimensiones",
            selector: (row) => "Largo: " + row.product.Long + " ancho: " + row.product.Width + " alto: " + row.product.Hight + " peso: " + row.product.Weight,
            sortable: true,
        },
        {
            name: "Origen",
            selector: (row) => row.ports.idPortDeparture.name,
            sortable: true,
        },
        {
            name: "Destino",
            selector: (row) => row.ports.idPortDestination.name,
            sortable: true,
        },
        {
            name: "Estado",
            selector: (row) => row.stateOrder.state,
            sortable: true,
        }
    ];
    return (
        <>
            <section className="contact-clean">
                <h1 className="text-center">Consultar orden de despacho</h1>
                <form className="search-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-group"><span className="input-group-text"><i className="fa fa-search"></i>
                    </span><input className="form-control" type="text" placeholder="Codigo" name="codigo" {...register("codigo", { required: true })} />
                        <button className="btn btn-light" type="submit">Buscar</button></div>
                    {errors.codigo && errors.codigo.type === "required" && <span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
                    {datos === undefined && <span className="text-danger text-small d-block mb-2">No se encontro el codigo</span>}

                </form>
            </section>
            <section>
                <div>
                    <DataTable
                        title=""
                        columns={columns}
                        data={datos}
                        pagination
                    />
                </div>
            </section>
        </>
    )
    // return (
    //     <section className="contact-clean">
    //         <h1 className="text-center">Consultar orden de despacho</h1>
    //         <form className="search-form" onSubmit={handleSubmit(onSubmit)}>
    //             <div className="input-group"><span className="input-group-text"><i className="fa fa-search"></i>
    //             </span><input className="form-control" type="number" placeholder="Codigo" name="codigo" {...register("codigo", { required: true })} />
    //                 <button className="btn btn-light" type="submit">Buscar</button></div>
    //             {errors.codigo && errors.codigo.type === "required" && <span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
    //             {datos === undefined && <span className="text-danger text-small d-block mb-2">No se encontro el codigo</span>}

    //         </form>
    //         <div className="table-responsive">
    //             <table className="table">
    //                 <thead>
    //                     <tr>
    //                         <th>Codigo</th>
    //                         <th>Nombre</th>
    //                         <th>Descripcion</th>
    //                         <th>Dimensiones</th>
    //                         <th>Origen</th>
    //                         <th>Destino</th>
    //                         <th>Estado</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>

    //                     {datos &&
    //                         <tr>
    //                             <td>{datos.id_orden}</td>
    //                             <td>{datos.nombre}</td>
    //                             <td>{datos.descripcion}</td>
    //                             <td>{datos.dimensiones}</td>
    //                             <td>{datos.origen}</td>
    //                             <td>{datos.destino}</td>
    //                             <td>{datos.estado}</td>
    //                         </tr>
    //                     }


    //                 </tbody>
    //             </table>
    //         </div>
    //     </section>
    // )
}


