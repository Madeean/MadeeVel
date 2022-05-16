import React,{useState} from 'react'

import LayoutAdmin from '../../../layouts/Admin'

import Api from '../../../api'

import {useHistory} from 'react-router-dom'
//import js cookie
import Cookies from "js-cookie";

//import toats
import toast from "react-hot-toast";

function CategoryCreate(){

    document.title="add new category - admin Madeevel"

    const [name,setName] = useState("")
    const [image,setImage] = useState("")

    const [validation,setValidation]=useState({})

    const token = Cookies.get("token")

    const history = useHistory()

    const handleFileChange = (e) =>{
        const imageData = e.target.files[0]

        if(!imageData.type.match('image.*')){
            setImage("")
            toast.error("format file not supported",{
                duration: 4000,
                position: "top-right",
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            })
            return
        }

        setImage(imageData)

    }

    const storeCategory = async(e) =>{
        e.preventDefault()

        const formData = new FormData()

        formData.append('image',image)
        formData.append('name',name)

        await Api.post('/api/admin/categories',formData,{
            headers: {
                //header Bearer + Token
                Authorization: `Bearer ${token}`,
            }
        })
        .then(()=>{
            toast.success("Data Saved Successfully!", {
                duration: 4000,
                position: "top-right",
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            });

            history.push("/admin/categories");
        })
        .catch((error)=>{
            setValidation(error.response.data)
        })
    }


    return (
        <React.Fragment>
            <LayoutAdmin>
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-success">
                            <div className="card-header">
                                <span className="font-weight-bold"><i className="fa fa-folder"></i> ADD NEW CATEGORY</span>
                            </div>
                            <div className="card-body">
                                <form onSubmit={storeCategory}>
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
                                        <button type="submit" className="btn btn-md btn-success me-2"><i className="fa fa-save"></i> SAVE</button>
                                        <button type="reset" className="btn btn-md btn-warning"><i className="fa fa-redo"></i> RESET</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAdmin>
        </React.Fragment>
    )
}
export default CategoryCreate