import React,{useRef} from 'react';
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

const Factura = () => {

    const PDFExportComponent=useRef(null);
    const handleExportWithComponent = (event) =>{
        PDFExportComponent.current.save()
    }

    return (

    <div className="page-content container">
    
    <div className="page-header text-blue-d2">
        <h1 className="page-title text-secondary-d1">
            Invoice
            <small className="page-info">
                <i className="fa fa-angle-double-right text-80"></i>
                ID: #111-222
            </small>
        </h1>

        <div className="page-tools">
            <div className="action-buttons">
                <a className="btn bg-white btn-light mx-1px text-95" href="#" onClick={handleExportWithComponent} data-title="PDF">
                    <i className="mr-1 fa fa-file-pdf-o text-danger-m1 text-120 w-2"></i>
                    Export
                </a>
            </div>
        </div>
    </div>
    <PDFExport ref={PDFExportComponent} paperSize="A4">
    <div className="container px-0">
        <div className="row mt-4">
            <div className="col-12 col-lg-10 offset-lg-1">
                <div className="row">
                    <div className="col-12">
                        <div className="text-center text-150">
                            <i className="icon ion-android-boat"></i>
                            <span className="text-default-d3">Transnaval S.A.S</span>
                        </div>
                    </div>
                </div>
                {/*<!-- .row -->*/}

                <hr className="row brc-default-l1 mx-n1 mb-4" />

                <div className="row">
                    <div className="col-sm-6">
                        <div>
                            <span className="text-sm text-grey-m2 align-middle">Cliente:</span>
                            <span className="text-600 text-110 text-blue align-middle"> Alex Doe</span>
                        </div>
        
                    </div>
                    {/*<!-- /.col -->*/}

                    <div className="text-95 col-sm-6 align-self-start d-sm-flex justify-content-end">
                        <hr className="d-sm-none" />
                        <div className="text-grey-m2">
                            <div className="mt-1 mb-2 text-secondary-m1 text-600 text-125">
                                Factura
                            </div>

                            <div className="my-2"><p className="text-600 text-90">ID: #111-222</p></div>

                            <div className="my-2"><p className="text-600 text-90">Fecha: Oct 12, 2019</p></div>

                            <div className="my-2"><p className="text-600 text-90">Estado: Espera</p></div>
                        </div>
                    </div>
                    {/*<!-- /.col -->*/}
                </div>

                <div className="mt-4">
                    <div className="row text-600 text-white bgc-default-tp1 py-25">
                        <div className="d-none d-sm-block col-1">#</div>
                        <div className="col-9 col-sm-5">Description</div>
                        <div className="d-none d-sm-block col-4 col-sm-2">Cantidad</div>
                        <div className="d-none d-sm-block col-sm-2">Valor Milla Nautica</div>
                        <div className="col-2">Total</div>
                    </div>

                    <div className="text-95 text-secondary-d3">
                        <div className="row mb-2 mb-sm-0 py-25">
                            <div className="d-none d-sm-block col-1">1</div>
                            <div className="col-9 col-sm-5">Domain registration</div>
                            <div className="d-none d-sm-block col-2">2</div>
                            <div className="d-none d-sm-block col-2 text-95">$10</div>
                            <div className="col-2 text-secondary-d2">$20</div>
                        </div>
                    </div>

                    <div className="row border-b-2 brc-default-l2"></div>

                   {/*<!-- or use a table instead --> */} 
            {/* 
            <div className="table-responsive">
                <table className="table table-striped table-borderless border-0 border-b-2 brc-default-l1">
                    <thead className="bg-none bgc-default-tp1">
                        <tr className="text-white">
                            <th className="opacity-2">#</th>
                            <th>Description</th>
                            <th>Qty</th>
                            <th>Unit Price</th>
                            <th width="140">Amount</th>
                        </tr>
                    </thead>

                    <tbody className="text-95 text-secondary-d3">
                        <tr></tr>
                        <tr>
                            <td>1</td>
                            <td>Domain registration</td>
                            <td>2</td>
                            <td className="text-95">$10</td>
                            <td className="text-secondary-d2">$20</td>
                        </tr> 
                    </tbody>
                </table>
            </div>
            */}

                    <div className="row mt-3">
                        <div className="col-12 col-sm-7 text-grey-d2 text-95 mt-2 mt-lg-0">
                            Puede pagar de forma virtual o acercandose a un banco.
                        </div>

                        <div className="col-12 col-sm-5 text-grey text-90 order-first order-sm-last">
                            

                            <div className="row my-2 align-items-center bgc-primary-l3 p-2">
                                <div className="col-7 text-right">
                                    Total 
                                </div>
                                <div className="col-5">
                                    <span className="text-150 text-success-d3 opacity-2">$2,475</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    
                </div>
            </div>
        </div>
    </div>
    </PDFExport>
    <div>
        <span className="text-secondary-d1 text-105">Gracias por contar con nosotros </span>
        <a href="#" className="btn btn-info btn-bold px-4 float-right mt-3 mt-lg-0">Pagar</a>
    </div>
</div>
    )
}

export default Factura
