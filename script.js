function executar () {
    const nome = document.querySelector("#nome").value;

    switch (nome) {
        case "bruno":
            alert("Nuada")
            break;

        case "gabriela":
            alert("Gabi")
            break;

        case "eduardo":
           alert("Du")
           break;

        default:
            alert("NGM")
            break;
    }

    //ou eu posso escrever assim:

    /* if(nome =="bruno") {
        alert("Nuada");
    } else if (nome == "gabriela") {
        alert("Gabi");
    } else if (nome == "eduardo"){
        alert("Du");
    } else{
        alert("NGM")
    } */

  //ou eu posso escrever assim:
  
  /*  if(nome =="bruno") {
        alert("Nuada");
        return;
    } 
    if (nome == "gabriela") {
        alert("Gabi");
        return;
    } 
     if (nome == "eduardo"){
        alert("Du");
        return;
    } 
     alert("NGM") */

   // todas as opções vão se comportar da mesma forma.



}

function repete() {
    //string
    const txt = "nome"

    //numb
    const numb = 200;

    //array
    const arr = [];
    //array string
    const arrString = ["bruno", "gabi", "du", "qm n veio"];

    let vezes = 0;

    while (arrString.length != vezes) {
        alert(arrString[vezes]);

        vezes = vezes + 1;
    }

    /* for (let vezes = 0; vezes <arrString.length; vezes ++) {
        alert (arrString[vezes]);
    } */

  // ou posso fazer assim:

    /* arrString.map (function (nome){
        console.log(nome);
        if (nome == "bruno") {
            return nome;
        }
    }); */

  // ou posso fazer assim:

    /* arrString.forEach(function(nome) {
        arrString.push ("garrafa");
    }) */

    console.log(arrString);

    // alert(arrString [0]);
    //alert(arrString [1]);
    //alert(arrString [2]);

   //array number
   const arrNumber = [23, 20, 23];
   //array object
   const arrObj = [
       {
           nome: "bruno",
           idade: 23,
           cidades: ["avare", "jau"],
       },
   ];

   //object
   const objBruno = {
       nome: "bruno",
       idade: 23,
       cidades: ["avare", "jau"]
   };
}