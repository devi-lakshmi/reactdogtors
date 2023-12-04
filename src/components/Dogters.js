
const Dogters = (props) =>{

    return(
        <div clasName = "dogtor">
        <h1>{props.dogtor}</h1>
        
            <img src= {props.imageUrl} alt="oops no " ></img>
            
                { props.onDuty ? "OnDuty":"OffDuty"}
           
        
        </div>
    );
};
export default Dogters;