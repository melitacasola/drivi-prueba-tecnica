import CardDetails from "@/app/components/CardDetails";


const pageDetails = ({ params }) => {
    //page en next toma cualquier parametro de la url con solo pasar la palabra reservada ´params
    console.log(params.id);
    //ese id le paso como prop a cardDetails para qe reciba el componete imdbID asi hace fetch con ese id
    return(
    <CardDetails imdbID= {params.id} />
    )
}

export default pageDetails;
