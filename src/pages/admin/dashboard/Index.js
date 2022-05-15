import React from 'react'

import LayoutAdmin from "../../../layouts/Admin"

function Dashboard(){
    document.title = "Dashboard - Admin MadeeVel";

    return(
        <React.Fragment>
            <LayoutAdmin>
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-success">
                            <div className="card-header">
                                <span className="font-weight-bold"><i className="fa fa-tachometer-alt"></i> DASHBOARD</span>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAdmin>
        </React.Fragment>
    )
}
export default Dashboard