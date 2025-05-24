const Colaboradores = require('../Models/ColaboradoresModel');

module.exports = {
  async list(req, res) {
    try {
      const colaboradores = await Colaboradores.findAll();
      res.json(colaboradores);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar colaboradores' });
    }
  },

  async get(req, res) {
    try {
      const { id } = req.params;
      const colaborador = await Colaboradores.findByPk(id);
      if (!colaborador) return res.status(404).json({ error: 'Colaborador não encontrado' });
      res.json(colaborador);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar colaborador' });
    }
  },

  async insert(req, res) {
    try {
      const { nome, cargo, email } = req.body;
      const novoColaborador = await Colaboradores.create({ nome, cargo, email });
      res.status(201).json(novoColaborador);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao inserir colaborador' });
    }
  }
};
