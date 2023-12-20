import './ColorContainer.css'
export default function ColorContainer(props){
    // console.log(props);
    
    return (
        <div className="colorContainer">
            <div className="color"  style={{
                backgroundColor:props.colorCode,
                width:"150px",
                height:"200px"
            }}></div>
            <h3>{props.color}</h3>
            <p  style={{
                color:props.colorCode,
                fontWeight:"bold"
            }}>{props.colorCode}</p>
        </div>
    )
}