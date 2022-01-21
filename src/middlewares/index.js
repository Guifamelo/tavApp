const middlewares = {


    //verifica se o ID que esta vindo pelo HEADER eh o mesmo dos PARAMETROS, ao inves de usar o JSON WEB TOKEN
    authenticate(req , res , next){

        const { authentication } = req.headers
        const { user_id } = req.params

        if(!authentication) return res.status(400).json({ message: 'Sem Token' })
        if(authentication !== user_id) return res.status(400).json({ message: 'Nao Permitido' })

        next() //metodo do express.  ou seja, se tudo der certo nas linhas acima, prossegue o baile
    }

}

module.exports = middlewares