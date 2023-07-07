<script>
export default {
  data() {
    return {
      contact: {
        name: this.$store.getters.getContact.name,
        phoneNumber: this.$store.getters.getContact.number,
        firstName: this.$store.getters.getContact.name,
        firstPhoneNumber: this.$store.getters.getContact.number,
      },
    };
  },
  watch: {
    "contact.phoneNumber"(value, oldValue) {
      if (isNaN(value)) return (this.contact.phoneNumber = oldValue);
    },
  },
  methods: {
    SaveEdit() {
      if (this.contact.phoneNumber === "" || this.contact.name === "") {
        return this.emitter.emit("PutNotification", {
          application: "Contacts",
          description: "Nu poti salva daca ai campurile goale !",
        });
      }
      if(this.$store.getters.getContacts.find((con) => con.number === parseInt(this.contact.phoneNumber))) {
        return this.emitter.emit("PutNotification", {
          application: "Contacts",
          description: "Acest numar de telefon exista deja !",
        });
      }

      this.$store.commit('CHANGE_PAGE', this.$store.getters.getBeforePage);
      this.$store.commit('CHANGE_CONTACTS', this.contact)
    },
    deleteContact() {
      this.$store.commit('DELETE_CONTACT', this.contact.phoneNumber)
      this.$store.commit('CHANGE_PAGE', this.$store.getters.getBeforePage);
      this.emitter.emit("PutNotification", {
          application: "Contacts",
          description: "Contactul a fost sters !",
        });
    },
  },
};
</script>

<template>
  <div class="app contacts">
    <div class="container">
      <div class="control-bar">
        <div
          class="control back"
          @click="
            this.$store.commit('CHANGE_PAGE', this.$store.getters.getBeforePage)
          "
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
        <div
          class="control"
          @click="SaveEdit()"
          v-if="
            this.contact.phoneNumber !== this.contact.firstPhoneNumber ||
            this.contact.name !== this.contact.firstName
          "
        >
          Save
        </div>
      </div>
      <div class="contact-info">
        <div class="basic-info">
          <div class="icon">{{ contact.name.charAt(0).toUpperCase() }}</div>
          <input class="name" v-model="contact.name" />
        </div>
      </div>
      <div class="workspace">
        <div class="info-row">
          <div class="title">Telephone</div>
          <input class="value editNumber" v-model="contact.phoneNumber" />
        </div>
        <div class="info-row clickable" @click="deleteContact()">
          <div class="button" style="color: red">Delete the contact</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="../../assets/css/calls/detailscontact.css"></style>
<style scoped src="../../assets/css/calls/contacts.css"></style>
