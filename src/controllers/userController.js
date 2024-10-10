const userService = require("../services/userService");

const userController = {
    create: async (req, res) => {
        try {
            const user = await userService.create(req.body);
            return res.status(201).json({
                msg: 'Usuário criado com sucesso',
                user
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao tentar criar usuário'
            });
        }
    },

    update: async (req, res) => {
        try {
            const { id } = req.params;
            const updatedUser = await userService.update(id, req.body);
            if (!updatedUser) {
                return res.status(404).json({ msg: 'Usuário não encontrado' });
            }
            return res.status(200).json({
                msg: 'Usuário atualizado com sucesso',
                updatedUser
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao tentar atualizar usuário'
            });
        }
    },

    getOne: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await userService.getById(id);
            if (!user) {
                return res.status(404).json({ msg: 'Usuário não encontrado' });
            }
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao tentar buscar o usuário'
            });
        }
    },

    getAll: async (req, res) => {
        try {
            const users = await userService.getAll();
            return res.status(200).json({
                msg: 'Todos os usuarios!',
                users
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao tentar buscar os usuários'
            });
        }
    },

    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedUser = await userService.delete(id);
            if (!deletedUser) {
                return res.status(404).json({ msg: 'Usuário não encontrado' });
            }
            return res.status(200).json({
                msg: 'Usuário deletado com sucesso'
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao tentar deletar o usuário'
            });
        }
    }
};

module.exports = userController;