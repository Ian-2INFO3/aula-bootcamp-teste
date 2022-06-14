<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      times: [
        { id: "630c1d03-cb59-460a-89b8-cca1d42c1bc6", nome: "Time 1" },
        { id: "597ceef8-36ac-4b0e-859e-77551c9818c0", nome: "Time 2" },
        { id: "8ecb8a1e-5114-496d-9bee-1308dccf4b87", nome: "Time 3" },
      ],
      novo_time: "",
    };
  },
  methods: {
    salvar() {
      if (this.novo_time !== "") {
        const novo_id = uuidv4();
        this.times.push({
          id: novo_id,
          nome: this.novo_time,
        });
        this.novo_time = "";
      }
    },
    excluir(time) {
      const indice = this.times.indexOf(time);
      this.times.splice(indice, 1);
    },
    editar(time) {
      const novo_nome = prompt("Editar Nome do Time");
      if (novo_nome !== "") {
        time.nome = novo_nome;
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de Times</h2>
    </div>
    <div class="form-input">
      <input
        @keyup.enter="salvar"
        v-model="novo_time"
        type="text"
        placeholder="Nome do Time"
        class="input-maior"
      />
      <button @click="salvar">Adicionar</button>
    </div>
    <div class="list-times">
      <table>
        <thead>
          <tr>
            <th>ID-Time</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="time in times" :key="time.id">
            <td>
              {{ time.id }}
            </td>
            <td>
              {{ time.nome }}
            </td>
            <td>
              <button @click="editar(time)">Editar</button>
              <button @click="excluir(time)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
