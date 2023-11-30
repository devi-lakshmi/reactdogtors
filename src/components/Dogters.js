
const Dogters = (props) =>{

    return(
        <div clasName = "dogtor">
        <h1>{props.dogtor}</h1>
        
            <img src= {props.imageUrl} alt="oops no " ></img>
            <p>{props.onDuty ? "OnDuty":"OffDuty"}</p>
        
        </div>
    );
};
export default Dogters;