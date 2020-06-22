const axios = require('./axios')
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
 
axios.get(url).then(resp => {  
    const funcionariosM = resp.data
    
    const funcionariosChina = funcionariosM.map((e) => {
        if(e.pais == 'China'){
            return e
        }
    }).filter((e) => e != undefined)
    
    const funcionariosChinaFamele = funcionariosChina.map((e) => {
        if(e.genero == 'F'){
            return e
        }
    }).filter((e) => e != undefined)

    const maniorSalFemeleChinese = funcionariosChinaFamele.reduce((aft,bfor) => {
        if(aft.salario > bfor.salario){return aft}
        else{return bfor}
    })

    console.log(maniorSalFemeleChinese)
     
})
