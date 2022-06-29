<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      cartegorias: [
        {
          id_cartegoria: "16390338-fb77-4e4c-84f9-da9d1a1bdee7",
          descricao: "Drama",
        },
        {
          id_cartegoria: "933f3ba7-0a49-4e63-80c3-134600987018",
          descricao: "Medo",
        },
        {
          id_cartegoria: "ed4a44b6-720b-4b7b-a4fa-a2ff27ec3d17",
          descricao: "Ficção",
        },
      ],
      nova_cartegoria: "",
    };
  },
  methods: {
    salvar() {
      if (this.nova_cartegoria !== "") {
        const novo_id_cartegoria = uuidv4();
        this.cartegorias.push({
          id_cartegoria: novo_id_cartegoria,
          descricao: this.nova_cartegoria,
        });
        this.nova_cartegoria = "";
      }
    },
    excluir(cartegoria) {
      const indice = this.cartegorias.indexOf(cartegoria);
      this.cartegorias.splice(indice, 1);
    },
    editar(cartegoria) {
      const novo_nome = prompt("Editar Descrição da cartegoria");
      if (novo_nome !== "") {
        cartegoria.nome = novo_nome;
      }
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de cartegorias</h2>
    </div>
    <div class="form-input">
      <input
        @keyup.enter="salvar"
        v-model="nova_cartegoria"
        type="text"
        placeholder="Descrição da cartegoria"
        class="input-maior"
      />

      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-editoras">
      <table>
        <thead>
          <tr>
            <th>ID-cartegoria</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cartegoria in cartegorias" :key="cartegoria.id">
            <td>
              {{ cartegoria.id_cartegoria }}
            </td>
            <td>
              {{ cartegoria.descricao }}
            </td>
            <td>
              <button @click="editar(cartegoria)">Editar</button>
              <button @click="excluir(cartegoria)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
