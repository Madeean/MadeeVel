import React, {useState, useEffect} from 'react'

import LayoutAdmin from "../../../layouts/Admin"

import Api from '../../../api'

import Cookies from 'js-cookie'

function Dashboard(){
    document.title = "Dashboard - Admin MadeeVel";

    const [categories, setCategories] = useState(0)
    const [places, setPlaces] = useState(0);
    const [sliders, setSliders] = useState(0);
    const [users, setUsers] = useState(0);

    const token = Cookies.get('token')

    const fetchData = async ()=>{
        const response = await Api.get('/api/admin/dashboard',{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });

        const data = await response.data.data
        setCategories(data.categories)
        setPlaces(data.places);
        setSliders(data.sliders);
        setUsers(data.users);
    }

    useEffect(()=>{
        fetchData();
    },[])

    return (
        <React.Fragment>
            <LayoutAdmin>
                <div className="row mt-4">
                    <div className="col-12 col-lg-3 mb-4">
                    <div className="card border-0 shadow-sm overflow-hidden">
                        <div className="card-body p-0 d-flex align-items-center">
                            <div className="bg-primary py-4 px-5 mfe-3" style={{ width: "130px" }}>
                                <i className="fas fa-folder fa-2x text-white"></i>
                            </div>
                            <div>
                                <div className="text-value text-primary">{categories}</div>
                                <div className="text-muted text-uppercase font-weight-bold small">
                                    CATEGORIES
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-12 col-lg-3 mb-4">
                    <div className="card border-0 rounded shadow-sm overflow-hidden">
                        <div className="card-body p-0 d-flex align-items-center">
                            <div className="bg-success py-4 px-5 mfe-3" style={{ width: "130px" }}>
                                <i className="fas fa-map-marked-alt fa-2x text-white"></i>
                            </div>
                            <div>
                                <div className="text-value text-success">{places}</div>
                                <div className="text-muted text-uppercase font-weight-bold small">
                                    PLACES
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-12 col-lg-3 mb-4">
                    <div className="card border-0 rounded shadow-sm overflow-hidden">
                        <div className="card-body p-0 d-flex align-items-center">
                            <div className="bg-warning py-4 px-5 mfe-3" style={{ width: "130px" }}>
                                <i className="fas fa-images fa-2x text-white"></i>
                            </div>
                            <div>
                                <div className="text-value text-warning">{sliders}</div>
                                <div className="text-muted text-uppercase font-weight-bold small">
                                    SLIDERS
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-12 col-lg-3 mb-4">
                    <div className="card border-0 rounded shadow-sm overflow-hidden">
                        <div className="card-body p-0 d-flex align-items-center">
                            <div className="bg-danger py-4 px-5 mfe-3" style={{ width: "130px" }}>
                                <i className="fas fa-users fa-2x text-white"></i>
                            </div>
                            <div>
                                <div className="text-value text-danger">{users}</div>
                                <div className="text-muted text-uppercase font-weight-bold small">
                                    USERS
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </LayoutAdmin>
        </React.Fragment>
    )
}
export default Dashboard