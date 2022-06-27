<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      editoras: [
        {
          id: "630c1d03-cb59-460a-89b8-cca1d42c1bc6",
          nome: "Companhia das Letras",
          site_lf: "https://www.companhiadasletras.com.br",
          site_nlf: "www.companhiadasletras.com.br",
        },
        {
          id: "597ceef8-36ac-4b0e-859e-77551c9818c0",
          nome: "Editora Rocco",
          site_lf: "https://www.rocco.com.br/",
          site_nlf: "www.rocco.com.br",
        },
        {
          id: "8ecb8a1e-5114-496d-9bee-1308dccf4b87",
          nome: "Editora Arqueiro",
          site_lf: "https://www.editoraarqueiro.com.br",
          site_nlf: "www.editoraarqueiro.com.br",
        },
      ],
      nova_editora: "",
      novo_site: "",
    };
  },
  methods: {
    salvar() {
      if (this.nova_editora !== "" && this.novo_site !== "") {
        const novo_id = uuidv4();
        this.editoras.push({
          id: novo_id,
          nome: this.nova_editora,
          site_nlf: this.novo_site,
          site_lf: "https://" + this.novo_site,
        });
        this.novo_editora = "";
      }
    },
    excluir(editora) {
      const indice = this.editoras.indexOf(editora);
      this.editoras.splice(indice, 1);
    },
    editar(editora) {
      const novo_nome = prompt("Editar Nome do editora");
      if (novo_nome !== "") {
        editora.nome = novo_nome;
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de Editoras</h2>
    </div>
    <div class="form-input">
      <input
        @keyup.enter="salvar"
        v-model="nova_editora"
        type="text"
        placeholder="Nome do editora"
        class="input-maior"
      />
      <input
        @keyup.enter="salvar"
        v-model="novo_site"
        type="text"
        placeholder="Nome do site"
        class="input-maior"
      />
      <button @click="salvar">Adicionar</button>
    </div>
    <div class="list-editoras">
      <table>
        <thead>
          <tr>
            <th>ID-Editora</th>
            <th>Nome</th>
            <th>Site</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="editora in editoras" :key="editora.id">
            <td>
              {{ editora.id }}
            </td>
            <td>
              {{ editora.nome }}
            </td>
            <td>
              <a target="blank" :href="editora.site_lf">
                {{ editora.site_nlf }}</a
              >
            </td>
            <td>
              <button @click="editar(editora)">Editar</button>
              <button @click="excluir(editora)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
