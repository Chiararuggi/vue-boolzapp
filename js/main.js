const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts: [
        {
          name: "Michele",
          avatar: "./img/avatar_1.jpg",
          visible: true,
          //true = received , false = sent
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: false,
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di stendere i panni",
              status: false,
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: true,
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "./img/avatar_2.jpg",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: false,
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: true,
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: false,
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "./img/avatar_3.jpg",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: true,
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: false,
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: true,
            },
          ],
        },
        {
          name: "Alessandro B.",
          avatar: "./img/avatar_4.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: false,
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: true,
            },
          ],
        },
        {
          name: "Alessandro L.",
          avatar: "./img/avatar_5.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ricordati di chiamare la nonna",
              status: false,
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Va bene, stasera la sento",
              status: true,
            },
          ],
        },
        {
          name: "Claudia",
          avatar: "./img/avatar_6.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao Claudia, hai novità?",
              status: false,
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Non ancora",
              status: true,
            },
            {
              date: "10/01/2020 15:51:00",
              message: "Nessuna nuova, buona nuova",
              status: false,
            },
          ],
        },
        {
          name: "Federico",
          avatar: "./img/avatar_7.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Fai gli auguri a Martina che è il suo compleanno!",
              status: false,
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Grazie per avermelo ricordato, le scrivo subito!",
              status: true,
            },
          ],
        },
        {
          name: "Davide",
          avatar: "./img/avatar_8.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao, andiamo a mangiare la pizza stasera?",
              status: true,
            },
            {
              date: "10/01/2020 15:50:00",
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: false,
            },
            {
              date: "10/01/2020 15:51:00",
              message: "OK!!",
              status: true,
            },
          ],
        },
      ],
      activeChat: 0,
      userInput: "",
      searchUserInput: "",
    };
  },
  methods: {
    showChat(i) {
      this.activeChat = i;
    },

    addNewMessage() {
      this.contacts[this.activeChat].messages.push({ message: this.userInput });
      this.sendMessageAfterDelay();
    },

    sendMessageAfterDelay() {
      console.log(this.contacts[this.activeChat]);
      setTimeout(() => {
        this.contacts[this.activeChat].messages.push({ message: "ok" });
      }, 1000);
    },

    searchChat() {
        for (let i = 0; i < this.contacts.length; i++) {
          if (!(this.contacts[i].name.toLowerCase().includes(this.searchUserInput.toLowerCase()))) {
            this.contacts[i].visible = false;
          }
        }
      

    },
  },
  mounted() {},
}).mount("#app");
