<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      jogadores: [
        {
          jogadorid: "7313422d-7fa3-403f-aa3c-a14d3196991b",
          nome: "Caio",
          timeid: "8ecb8a1e-5114-496d-9bee-1308dccf4b87",
        },
        {
          novo_time: "",
          jogadorid: "736c8f35-b5cf-43bf-a9ee-e4d8950ee0a5",
          nome: "Afonso",
          timeid: "597ceef8-36ac-4b0e-859e-77551c9818c0	",
        },
        {
          jogadorid: "519d6a87-60c2-465a-aa2f-1b8d0ef079cf",
          nome: "Pedro",
          timeid: "630c1d03-cb59-460a-89b8-cca1d42c1bc6",
        },
      ],
      novo_jogador: "",
    };
  },
  methods: {
    salvar() {
      const novo_idjogador = uuidv4();
      const novo_idtime = uuidv4();
      this.jogadores.push({
        jogadorid: novo_idjogador,
        timeid: novo_idtime,
        nome: this.novo_jogador,
        acao: "???",
      });
      this.novo_jogador = "";
    },
    excluir(jogador) {
      const indice = this.jogadores.indexOf(jogador);
      this.jogadores.splice(indice, 1);
    },
    editar(jogador) {
      const novo_nome = prompt("Editar Nome do jogador");
      if (novo_nome !== "") {
        jogador.nome = novo_nome;
      }
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de Jogadores</h2>
    </div>
    <div class="form-input">
      <input
        v-model="novo_jogador"
        type="text"
        placeholder="Nome do Jogador"
        class="input-maior"
      />
      <input type="text" placeholder="Id do Time" class="input-menor" />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-times">
      <table>
        <thead>
          <tr>
            <th>ID-Jogador</th>
            <th>Nome</th>
            <th>Time-Id</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="jogador in jogadores" :key="jogador.id">
            <td>
              {{ jogador.jogadorid }}
            </td>
            <td>
              {{ jogador.nome }}
            </td>
            <td>
              {{ jogador.timeid }}
            </td>
            <td>
              <button @click="editar(jogador)">Editar</button>
              <button @click="excluir(jogador)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
