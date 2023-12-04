'use strict';

const { createApp } = Vue;

createApp({
  data() {
    return {
      //currents
      currentContact: 0,
      currentClickMessage: 0,
      // visibles
      visibleChevron: false,
      visibleDropdown: false,

      newMessage: '',
      keyContact: '',
      userChoice: '',
      currentTime: null,
      lastAccess: '',
      isDark: false,

      botAnswer: [
        'Mai confondere una singola sconfitta con una sconfitta definitiva',
        'Se non riesci a spiegarlo a un bambino di 6 anni, non l’hai capito nemmeno tu',
        'Non fingere di essere saggio, ma sii saggio davvero: non abbiamo bisogno di apparire sani, ma di esserlo veramente',
        'Per ogni minuto che passi arrabbiato perdi sessanta secondi di felicità',
        'Di fronte agli sciocchi e agli imbecilli esiste un modo solo per rivelare la propria intelligenza: quello di non parlare con loro',
        'È assurdo dividere le persone in buone o cattive. Le persone o sono affascinanti o sono noiose',
        'Supera te stesso e supererai il mondo',
        'Più piccola è la mente più grande è la presunzione',
        'Ci sono molte persone nel mondo, ma ci sono ancora più volti, perché ognuno ne ha diversi',
        'Colui che sorride quando le cose vanno male, ha già trovato qualcuno cui dare la colpa',
      ],

      contacts: [
        {
          name: 'Michele',
          avatar: './img/avatar_1.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Hai portato a spasso il cane?',
              status: 'sent',
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Ricordati di stendere i panni',
              status: 'sent',
            },
            {
              date: '10/01/2020 16:15:22',
              message: 'Tutto fatto!',
              status: 'received',
            },
          ],
        },

        {
          name: 'Valde',
          avatar: './img/avatar_2.jpg',
          visible: true,
          messages: [
            {
              date: '20/03/2020 16:30:00',
              message: 'Ciao come stai?',
              status: 'sent',
            },
            {
              date: '20/03/2020 16:30:55',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received',
            },
            {
              date: '20/03/2020 16:35:00',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent',
            },
          ],
        },
        {
          name: 'Omay',
          avatar: './img/avatar_3.jpg',
          visible: true,
          messages: [
            {
              date: '28/03/2020 10:10:40',
              message: 'La Marianna va in campagna',
              status: 'received',
            },
            {
              date: '28/03/2020 10:20:10',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent',
            },
            {
              date: '28/03/2020 16:15:22',
              message: 'Ah scusa!',
              status: 'received',
            },
          ],
        },
        {
          name: 'Alessandro B.',
          avatar: './img/avatar_4.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent',
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received',
            },
          ],
        },
        {
          name: 'Alessandro L.',
          avatar: './img/avatar_5.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ricordati di chiamare la nonna',
              status: 'sent',
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Va bene, stasera la sento',
              status: 'received',
            },
          ],
        },
        {
          name: 'Valeria',
          avatar: './img/avatar_io.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao Claudia, hai novità?',
              status: 'sent',
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Non ancora',
              status: 'received',
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'Nessuna nuova, buona nuova',
              status: 'sent',
            },
          ],
        },
        {
          name: 'Federico',
          avatar: './img/avatar_7.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent',
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received',
            },
          ],
        },
        {
          name: 'Davide',
          avatar: './img/avatar_8.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received',
            },
            {
              date: '10/01/2020 15:50:00',
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: 'sent',
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'OK!!',
              status: 'received',
            },
          ],
        },
      ],
    };
  },
  methods: {
    closeWindows() {
      this.visibleChevron = false;
      this.visibleDropdown = false;
    },

    changeContact(index) {
      this.currentContact = index;
      console.log(`Contatto[${index}]`);
    },
    addMessage() {
      if (this.newMessage.trim().length != '') {
        this.contacts[this.currentContact].messages.push({
          date: this.currentTime,
          message: this.newMessage,
          status: 'sent',
        });

        this.newMessage = '';
        setTimeout(this.answerMessage, 1_000);
      }
    },
    answerMessage() {
      this.contacts[this.currentContact].messages.push({
        date: this.currentTime,
        message:
          this.botAnswer[Math.floor(Math.random() * this.botAnswer.length) + 1],
        status: 'received',
      });
    },

    filteredContact() {
      this.contacts.forEach((element) => {
        if (element.name.includes(this.keyContact)) {
          element.visible = true;
        } else {
          element.visible = false;
        }
      });
    },

    showChevron() {
      this.visibleChevron = true;
    },

    showDropdownChevron(index) {
      if (this.visibleDropdown && this.currentClickMessage === index) {
        this.visibleDropdown = false;
      } else {
        this.visibleDropdown = true;
        this.currentClickMessage = index;
      }
    },

    deleteMessage() {
      this.contacts[this.currentContact].messages.splice(
        this.currentClickMessage,
        1
      );
      this.currentClickMessage = undefined;
    },

    deleteAllMessages() {
      this.contacts[this.currentContact].messages = [];
    },

    deleteContact() {
      this.contacts.splice(this.contactIndex, 1);
      this.contactIndex = 0;
      this.visibleDropdown = false;
    },

    //Time with LUXON
    updateCurrentTime() {
      this.currentTime = luxon.DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss');
    },

    // Time format
    onlyTime(time) {
      return luxon.DateTime.fromFormat(time, 'dd/MM/yyyy HH:mm:ss').toFormat(
        'HH:mm'
      );
    },

    toggleDark() {
      this.isDark = !this.isDark;
    },
  },
  mounted() {
    // Update Time every 1 second
    this.updateCurrentTime();
    setInterval(() => {
      this.updateCurrentTime();
    }, 1_000);
  },
}).mount('#app');
