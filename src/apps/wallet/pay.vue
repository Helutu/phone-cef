<script>
import request from "./request.vue";

export default {
    components: { request },

    data() {
        return {
            page: "Main",
            id: "",
            requests: [
                { id: 1, name: "Helutu", description: "da ba banii", sum: 1000000 },
                { id: 2, name: "dustyhawk", description: "te pup varu", sum: 100000 },
                { id: 4, name: "Ahmed", description: "salut", sum: 10000 },
            ],
        };
    },

    methods: {
        wallet() {
            this.$store.commit("CHANGE_PAGE", "Wallet");
        },
        openRequest(id) {
            this.page = "Request";
            this.id = id;
        },
    },

    created() {
        this.emitter.on("changePageRequest", (evt) => {
            this.page = evt;
        });
    }
};
</script>

<template>
    <div class="app wallet" v-if="page === 'Main'">
        <div class="container">
            <div class="control-bar" style="margin-top: 10px;">
                <div class="control" @click="wallet()" style="color: #fff;">
                    <svg width="25" height="25" fill="none" viewBox="0 0 25 25">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.25 6.75L4.75 12L10.25 17.25"></path>
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.25 12H5"></path>
                    </svg>                      
                </div>
                <div class="title" style="color: #fff; margin-top: 2px;">Pay</div>
            </div>

            <div class="main" style="margin-top: -30px; margin-left: 0px;">
                <div class="transactions" style="height: 495px;">
                    <div class="transaction" style="margin-bottom: 10px;"
                        v-for="item in requests"
                        v-bind:key="item"    
                    >

                        <div class="emoji">👨</div>
                        <div class="info-main">
                            <h3>{{ item.name }}</h3>
                            <p>wants ${{ Number(item.sum).toLocaleString() }}</p>
                        </div>
                        <div class="info-request">
                            <svg width="25" height="25" fill="none" viewBox="0 0 25 25" @click="openRequest(item.id)">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V15"></path>
                                <circle cx="12" cy="9" r="1" fill="currentColor"></circle>
                                <circle cx="12" cy="12" r="7.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></circle>
                            </svg>                              
                        </div>
                    </div>

                    <div style="margin-top: -13px;"></div>
                </div>
            </div>
        </div>
    </div>

    <request :id="id" :data="requests" v-if="page === 'Request'" />
</template>

<style scoped src="../../assets/css/wallet.css"></style>

