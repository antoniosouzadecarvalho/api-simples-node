const ApiService = require("../services/apiService");

class ApiController {
    async controllerGetUser(req, res){
        const { status, response } = await ApiService.getUser(req.params.id)
        res.status(status).json(response);
    }

    async controllerCreateUser(req, res){
        const { status, response} = await ApiService.createUser(req.body)
        res.status(status).json(response);
    }

    async controllerUpdateUser(req, res){
        const { response } = await ApiService.updateUser(req.body, req.params.id)
        res.status(200).json(response);
    }

    async controllerDeleteUser(req, res){
        const { status, response } = await ApiService.deleteUser(req.params.id)
        res.status(status).json(response);
    }
}

module.exports = new ApiController();
