<script>
export default {
  data() {
    return {
      jogadores: [
        { id: 1, nome: "Caio", timeid: "001", acao: "Atacante" },
        { id: 2, nome: "Afonso", timeid: "002", acao: "Zagueiro" },
        { id: 3, nome: "Pedro", timeid: "003", acao: "Goleiro" },
      ],
    };
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de Jogadores</h2>
    </div>
    <div class="form-input">
      <input type="text" placeholder="Nome do Jogador" />
      <input type="text" placeholder="Nome do time" />
      <button>Salvar</button>
    </div>
    <div class="list-times">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Time-Id</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="jogador in jogadores" :key="jogador.id">
            <td>
              {{ jogador.id }}
            </td>
            <td>
              {{ jogador.nome }}
            </td>
            <td>
              {{ jogador.timeid }}
            </td>
            <td>
              {{ jogador.acao }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
