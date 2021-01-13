<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col class="d-flex justify-center"
            ><router-link to="/">Посты</router-link></v-col
          >
          <v-col class="d-flex justify-center"
            ><router-link to="/add-post">Добавить</router-link></v-col
          >
        </v-row>
      </v-container>
      <router-view />
    </v-main>
  </v-app>
</template>

<script></script>
