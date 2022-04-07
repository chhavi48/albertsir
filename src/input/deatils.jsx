import card from "./card"
const data={
    name:"chhavi",
    quli:"ddiploma",
    imgURL:"https://pbs.twimg.com/profile_images/1451523037040283651/iDf18qJ2_400x400.jpg"
}
function deatils (){
    return(
        <>
           {/* <card {...data}/> */}
       <card  {...data}/>
           </>
    )
}
export default deatils