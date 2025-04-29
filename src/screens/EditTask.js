
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function EditarTarefa({ tarefaId }) {
  const [tarefa, setTarefa] = useState({
    nome_tarefas: '',
    status: '',
    prioridade: '',
    data_inicial: '',
    data_final: '',
  });

  useEffect(() => {

    axios.get(`http://localhost:3000/api/tarefas/${tarefaId}`)
      .then((res) => setTarefa(res.data))
      .catch((err) => console.error('Erro ao buscar tarefa', err));
  }, [tarefaId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTarefa({ ...tarefa, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/tarefas/${tarefaId}`, tarefa);
      alert('Tarefa atualizada com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar tarefa', error);
      alert('Erro ao atualizar tarefa');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar Tarefa</h2>

      <label>Nome:</label>
      <input
        type="text"
        name="nome_tarefas"
        value={tarefa.nome_tarefas}
        onChange={handleChange}
        required
      />

      <label>Status:</label>
      <select name="status" value={tarefa.status} onChange={handleChange} required>
        <option value="">Selecione</option>
        <option value="pendente">Pendente</option>
        <option value="em_andamento">Em andamento</option>
        <option value="concluida">Concluída</option>
      </select>

      <label>Prioridade:</label>
      <input
        type="text"
        name="prioridade"
        value={tarefa.prioridade}
        onChange={handleChange}
      />

      <label>Data Inicial:</label>
      <input
        type="date"
        name="data_inicial"
        value={tarefa.data_inicial}
        onChange={handleChange}
        required
      />

      <label>Data Final:</label>
      <input
        type="date"
        name="data_final"
        value={tarefa.data_final}
        onChange={handleChange}
        required
      />

      <button type="submit">Salvar Alterações</button>
    </form>
  );
}
