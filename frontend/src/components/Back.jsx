import { FaArrowLeft } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const Back = ()=>{
    const navigate = useNavigate()
    return(
        <button
        type="button"
        className="btn btn-light border shadow-sm rounded-pill px-3 mb-3"
        onClick={() => navigate(-1)}
        style={{margin:'30px'}}
    >
        <FaArrowLeft className="me-2" />
        Back
    </button>
    )
}

export default Back