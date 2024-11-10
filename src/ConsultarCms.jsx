import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export function ConsultarCms() {
    const [produtos,setProdutos]=useState([])
    useEffect(()=>{
        axios.post(
            'https://graphql.datocms.com/',
            {
                query: `{
                    allProdutos{
                        linkImage
                        name
                        preco
                    }
                }`
            },
            {
                headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Icaro Jordano d26af1aed529c01033f2abecbcd798`,
          }
    }
)
          .then((res) => {
            console.log(res.data)
            setProdutos(res.data.data['allProdutos'])
            console.log(produtos[0])
          })
          .catch((error) => {
            console.log(error);
          });
    },[])
    return(
    )
}