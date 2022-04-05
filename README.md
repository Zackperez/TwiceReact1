# TwiceReact1

CSS 
.contenedor-testimonio{
    width: auto;
    height: 368px;
    display: flex;
    margin: 10px 10px 50px;
    align-items: center;
    justify-content: center;
    background-color: #ffffff; 
    box-shadow: 0 3px 13px 1px rgb(0 0 0 / 9%);
}
.contenedor-texto{
    text-align: center;
    padding: 40px;
    font-family: Lato, sans-serif;
    font-weight: 400;
    line-height: 1.5rem;
}

.nombre-testimonio{
    font-size: 18px;
}

@media (max-width: 800px){
    .imagen-twice{
        width: 300px;
    }
}

@media (max-width: 700px){

    .contenedor-testimonio{
        display: inline-block;
        height: auto;
        width: auto;
    }

    .imagen-twice{
        width: auto;
    }

    .nombre-testimonio{
        font-size: 22px;
    }

    .contenedor-texto{
        font-size: 20px;
        padding: 10px 30px 10px 30px;
    }
}

