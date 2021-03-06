var app = new Vue(
    {
        el: "#root",
        data: {
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    activity: 'Ultimo accesso oggi alle 02:18',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    activity: 'Ultimo accesso oggi alle 12:02',
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },     
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    activity: 'Online',
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luis',
                    avatar: '_4',
                    visible: true,
                    activity: 'Ultimo accesso 12/01/2021 alle 19:00',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Anastasia',
                    avatar: '_6',
                    visible: true,
                    activity: 'Ultimo accesso oggi alle 17.30',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Si non ti preoccupare',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Pluto',
                    avatar: '_7',
                    visible: true,
                    activity: 'Ultimo accesso oggi alle 07:30',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Si sto tornando a casa ora!',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Paperino',
                    avatar: '_8',
                    visible: true,
                    activity: 'Online',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Come stai?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Bene tu?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Disastro totale',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Genoveffa',
                    avatar: '_io',
                    visible: true,
                    activity: 'Ultimo accesso oggi alle 21:47',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Sono stanco',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Dormi',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Lo far?? dopo aver terminato i compiti',
                            status: 'sent'
                        }
                    ],
                },
            ],
            activeIndex: 0,
            newMessage: "",
            messageData: "",
            option: false,
            msgIndex: 0
        },
        methods: {
            getContactImg: function(contactIndex) {
                let { avatar } = this.contacts[contactIndex];
                return `img/avatar${avatar}.jpg`;
            },
            getData: function(contactIndex) {
                let lastData = this.contacts[contactIndex].messages.length -1;
                return this.contacts[contactIndex].messages[lastData].date;
            },
            getLastMessage: function(contactIndex) {
                let lastMessage = this.contacts[contactIndex].messages.length -1;
                return this.contacts[contactIndex].messages[lastMessage].text.substr(0, 30) + "...";
            },
            getChatContactImg: function() {
                let contactImg = this.contacts[this.activeIndex].avatar;
                return `img/avatar${contactImg}.jpg`
            },
            getChatContactName: function() {
                let contactName = this.contacts[this.activeIndex].name;
                return contactName;
            },
            setActive: function(newIndex) {
                this.activeIndex = newIndex;
            },
            getContactActivity: function() {
                let contactActivity = this.contacts[this.activeIndex].activity;
                return contactActivity;
            },
            sendMessage: function() {

                this.messageData = dayjs().format('DD/MM/YY HH:mm:ss');

                let msgSended = {
                    date: this.messageData,
                    text: this.newMessage,
                    status: 'sent'
                };
                let msgReceive = {
                    date: this.messageData,
                    text: "ok!",
                    status: 'received'
                };
                if (this.newMessage.trim().length > 0){
                    this.contacts[this.activeIndex].messages.push(msgSended);
                    setTimeout(()=>{ 
                        this.contacts[this.activeIndex].messages.push(msgReceive);
                    }, 1000);
                };
                this.newMessage = "";
            },
            searchChat: function(event) {
                let searchInput = event.target.value;
                return this.contacts.map(contact => {
                  if (contact.name.toLowerCase().includes(searchInput.toLowerCase())) {
                      contact.visible = true;
                  } else {
                      contact.visible = false;
                  }
                })
            },
            dropdownOpen: function(index) {
                this.msgIndex = index;
                this.option = !this.option;
            },
            deleteMessage: function(msgIndex) {
                this.contacts[this.activeIndex].messages.splice(msgIndex, 1);
                if (this.contacts[this.activeIndex].messages.length == 0) { 
                    this.contacts.splice(this.activeIndex, 1);
                }
                this.option = false;
            },
            fixMsgDown: function() {
                let chatList = document.querySelectorAll('.message');
                if (chatList.length != 0) {
                    chatList[chatList.length -1].scrollIntoView();
                }        
            }
        },
        updated () {
            this.fixMsgDown();
        }
    }
) 