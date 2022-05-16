import React, { useEffect,useState } from "react";

import LayoutAdmin from "../../../layouts/Admin";

import Api from '../../../api'

import { useHistory, useParams } from "react-router-dom";

//import js cookie
import Cookies from "js-cookie";

//import toats
import toast from "react-hot-toast";

function CategoryEdit(){

    document.title="edit category - admin MadeeVel"

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    //state validation
    const [validation, setValidation] = useState({});

    //token
    const token = Cookies.get("token");

    //history
    const history = useHistory();

    //get ID from parameter URL
    const { id } = useParams();

    const getCategoryById = async () =>{
        const response = await Api.get(`/api/admin/categories/${id}`,{
            headers: {
                //header Bearer + Token
                Authorization: `Bearer ${token}`,
            }
        })

        const data = response.data.data

        setName(data.name)
    }

    useEffect(()=>{
        getCategoryById()
    },[])


    const handleFileChange = (e) =>{
        const imageData = e.target.files[0]

        //check validation file
        if (!imageData.type.match('image.*')) {

            //set state "image" to null
            setImage('');

            //show toast
            toast.error("Format File not Supported!", {
                duration: 4000,
                position: "top-right",
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            });

            return
        }

        //assign file to state "image"
        setImage(imageData);
    }

    //function "updateCategory"
    const updateCategory = async (e) => {
        e.preventDefault();

        //define formData
        const formData = new FormData();

        //append data to "formData"
        formData.append('image', image);
        formData.append('name', name);
        formData.append('_method', 'PATCH');

        await Api.post(`/api/admin/categories/${id}`, formData, {

                //header
                headers: {
                    //header Bearer + Token
                    Authorization: `Bearer ${token}`,
                }

            }).then(() => {

                //show toast
                toast.success("Data Updated Successfully!", {
                    duration: 4000,
                    position: "top-right",
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                });

                //redirect dashboard page
                history.push("/admin/categories");

            })
            .catch((error) => {

                //set state "validation"
                setValidation(error.response.data);
            })

    }

    return (
        <React.Fragment>
            <LayoutAdmin>
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-success">
                            <div className="card-header">
                                <span className="font-weight-bold"><i className="fa fa-folder"></i> EDIT CATEGORY</span>
                            </div>
                            <div className="card-body">
                                <form onSubmit={updateCategory}>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Image</label>
                                        <input type="file" className="form-control" onChange={handleFileChange}/>
                                    </div>
                                    {validation.image && (
                                        <div className="alert alert-danger">
                                            {validation.image[0]}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Category Name</label>
                                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Category Name"/>
                                    </div>
                                    {validation.name && (
                                        <div className="alert alert-danger">
                                            {validation.name[0]}
                                        </div>
                                    )}
                                    <div>
                                        <button type="submit" className="btn btn-md btn-success me-2"><i className="fa fa-save"></i> UPDATE</button>
                                        <button type="reset" className="btn btn-md btn-warning"><i className="fa fa-redo"></i> RESET</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAdmin>
        </React.Fragment>
    );
}
export default CategoryEdit
