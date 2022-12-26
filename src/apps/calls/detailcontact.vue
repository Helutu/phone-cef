<script>
export default {
  methods: {
    Message() {
      // GET ID FROM CONTACT FROM GAME
      this.$store.commit("SET_BEFORE_PAGE", [
        "Messages",
        this.$store.getters.getPageState,
      ]);
      this.$store.commit("CHANGE_PAGE", "Messages");
      setTimeout(() => {
        this.emitter.emit('PutIdSMS', this.contact.phoneNumber)
      }, 10);
    },
    Call() {
      this.$store.commit("SET_BEFORE_PAGE", [
        "Contacts",
        this.$store.getters.getPageState,
      ]);
      this.$store.commit("CHANGE_PAGE", "Contacts");
      this.$store.commit("CHANGE_NUMBER", this.contact.phoneNumber); 
      return;
    },
  },  
    data() {
        return {
            contact: {
                name: this.$store.getters.getContact.name,
                phoneNumber: this.$store.getters.getContact.number
            }
        }
    }
};
</script>

<template>
  <div class="app contacts">
    <div class="container">
      <div class="control-bar">
        <div
          class="control back"
          @click="this.$store.commit('CHANGE_PAGE', 'Recents')"
        >
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 10 17"
            >
              <path
                d="M9.619,2.1A1.214,1.214,0,0,0,9.66.378,1.229,1.229,0,0,0,7.929.336Q.371,7.61.351,7.631a1.254,1.254,0,0,0,.04,1.78l7.537,7.251a1.229,1.229,0,0,0,1.732-.039A1.214,1.214,0,0,0,9.622,14.9L3.373,8.786a.4.4,0,0,1,0-.57Z"
              ></path>
            </svg>
          </div>
          <div class="title">Contacts</div>
        </div>
        <div class="control" @click="this.$store.commit('CHANGE_PAGE', 'EditContact')">Edit</div>
      </div>
      <div class="contact-info">
        <div class="basic-info">
          <div class="icon">{{contact.name.charAt(0).toUpperCase()}}</div>
          <div class="name">{{contact.name}}</div>
        </div>
        <div class="controls">
          <button @click="Message()">
            <div class="icon-wrapper">
              <div class="icon">
                <img src="../../assets/icons/message_icon.svg" alt="" />
              </div>
            </div>
            <div class="title">Message</div>
          </button>
          <button @click="Call()">
            <div class="icon-wrapper">
              <div class="icon">
                <img src="../../assets/icons/phone_icon.svg" alt="" />
              </div>
            </div>
            <div class="title">Call</div>
          </button>
        </div>
      </div>
      <div class="workspace">
        <div class="info-row">
          <div class="title">Telephone</div>
          <div class="value">{{contact.phoneNumber}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="../../assets/css/calls/detailscontact.css"></style>
<style scoped src="../../assets/css/calls/contacts.css"></style>
