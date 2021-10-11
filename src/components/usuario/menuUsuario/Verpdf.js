const Verpdf = ({datos}) => {
       
    return(
        <>
           <div>
          <object
                data ={require({datos})}
                       type='aplication/pdf'
                       width="100%"
                       height="100%"

                     >
                           
                     </object>
                     </div>
        </>
    )
    }

export default Verpdf