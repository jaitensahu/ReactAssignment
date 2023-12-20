import './QuoteCard.css'
 export default (props)=>{
    return (
        
    <div className="card">
        <h1>{props.quote}</h1>
        <p>{props.author}</p>
    </div>
    )
 }