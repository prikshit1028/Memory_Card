function checkClick(name,setarr,arr,setcount,count,topscore,settopscore){
   let answer = arr.some(function(element){
        return (name == element)
    });

    if(answer){
        setcount(0);
        setarr([]);
        if(!(count<=topscore)){settopscore(count)}

    }
    else{
        setcount(++count);
        setarr([...arr,name])
    }
    

}


function Card({title,link,setarra,arra,setcounT,counT,topscor,settopscor}){
    return(

   <div  className="cardd" onClick={function(){checkClick(title,setarra,arra,setcounT,counT,topscor,settopscor)}}>
    <img src={link} alt={title} className="images"/>
    <h3 className="names">{title}</h3>
   </div>
   
    )
}

export default Card;