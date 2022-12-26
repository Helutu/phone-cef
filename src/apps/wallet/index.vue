<script>
export default {
  data() {
    return { };
  },
  methods: {
    switchPage(page) {
        switch(page) {
            case 'payPage': {
                this.$store.commit("CHANGE_PAGE", "WalletPayPage");
            } break;

            case 'transferPage': {
                this.$store.commit("CHANGE_PAGE", "WalletTransferPage");
            } break;

            case 'requestPage': {
                this.$store.commit("CHANGE_PAGE", "WalletRequestPage");
            } break;
        }
    },
  },
};
</script>

<template>
    <div class="app wallet">
        <div class="container">
            <div class="main">

                <div class="balance">
                    <h3>Account balance (USD)</h3>
                    <p>$13.043</p>
                </div>

                <div class="row">
                    <div>
                        <button class="btn-dusty" @click="switchPage('payPage')">
                            <svg width="25" height="25" fill="none" viewBox="0 0 25 25">
                                <circle cx="12" cy="12" r="7.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.25 8.75H11.375C10.4775 8.75 9.75 9.47754 9.75 10.375V10.375C9.75 11.2725 10.4775 12 11.375 12H12.625C13.5225 12 14.25 12.7275 14.25 13.625V13.625C14.25 14.5225 13.5225 15.25 12.625 15.25H9.75"/>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 7.75V8.25"/>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15.75V16.25"/>
                            </svg><br>Pay
                        </button>
                    </div>

                    <div>
                        <button class="btn-dusty" @click="switchPage('transferPage')">
                            <svg width="25" height="25" fill="none" viewBox="0 0 25 25">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.25 11.5V19.25M5.75 19.25V11.5M9.75 19.25V11.5M14.25 19.25V11.5"></path>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.75L19.25 11.25H4.75L12 4.75Z"></path>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 19.25H19.25"></path>
                            </svg><br>Transfer
                        </button>
                    </div>

                    <div>
                        <button class="btn-dusty" @click="switchPage('requestPage')">
                            <svg width="25" height="25" fill="none" viewBox="0 0 25 25">
                                <circle cx="12" cy="12" r="7.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></circle>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.25 12C15.25 16.5 13.2426 19.25 12 19.25C10.7574 19.25 8.75 16.5 8.75 12C8.75 7.5 10.7574 4.75 12 4.75C13.2426 4.75 15.25 7.5 15.25 12Z"></path>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12H12H19"></path>
                            </svg><br>Request
                        </button>
                    </div>
                </div>

                <div class="transactions">
                    <div class="transaction">
                        <div class="emoji">👨</div>
                        <div class="info-main">
                            <h3>dustyhawk</h3>
                            <p>-100$</p>
                        </div>
                    </div>

                    <div class="transaction">
                        <div class="emoji" style="background-color: #e4d76242;">🏡</div>
                        <div class="info-main">
                            <h3>Workplace</h3>
                            <p>+300$</p>
                        </div>
                    </div>

                    <div class="transaction">
                        <div class="emoji" style="background-color: #e462d342;">🏪</div>
                        <div class="info-main">
                            <h3>General Store</h3>
                            <p>-127$</p>
                        </div>
                    </div>

                    <div class="transaction">
                        <div class="emoji">👨</div>
                        <div class="info-main">
                            <h3>Helutu</h3>
                            <p>+1,000,000$</p>
                        </div>
                    </div>

                    <div class="transaction">
                        <div class="emoji" style="background-color: #62e47342;">🚗</div>
                        <div class="info-main">
                            <h3>Dealership</h3>
                            <p>-10,000,000$</p>
                        </div>
                    </div>

                    <div class="transaction">
                        <div class="emoji" style="background-color: #62e47342;">🚗</div>
                        <div class="info-main">
                            <h3>Dealership</h3>
                            <p>-10,000,000$</p>
                        </div>
                    </div>

                    <div class="transaction">
                        <div class="emoji" style="background-color: #62e47342;">🚗</div>
                        <div class="info-main">
                            <h3>Dealership</h3>
                            <p>-10,000,000$</p>
                        </div>
                    </div>

                    <div class="transaction">
                        <div class="emoji" style="background-color: #62e47342;">🚗</div>
                        <div class="info-main">
                            <h3>Dealership</h3>
                            <p>-10,000,000$</p>
                        </div>
                    </div>

                    <div class="transaction">
                        <div class="emoji" style="background-color: #62e47342;">🚗</div>
                        <div class="info-main">
                            <h3>Dealership</h3>
                            <p>-10,000,000$</p>
                        </div>
                    </div>

                    <div class="transaction">
                        <div class="emoji" style="background-color: #62e47342;">🚗</div>
                        <div class="info-main">
                            <h3>Dealership</h3>
                            <p>-10,000,000$</p>
                        </div>
                    </div>

                    <div class="transaction">
                        <div class="emoji" style="background-color: #62e47342;">🚗</div>
                        <div class="info-main">
                            <h3>Dealership</h3>
                            <p>-10,000,000$</p>
                        </div>
                    </div>

                    <div class="transaction">
                        <div class="emoji" style="background-color: #62e47342;">🚗</div>
                        <div class="info-main">
                            <h3>Dealership</h3>
                            <p>-10,000,000$</p>
                        </div>
                    </div>

                    <div class="transaction">
                        <div class="emoji" style="background-color: #62e47342;">🚗</div>
                        <div class="info-main">
                            <h3>Dealership</h3>
                            <p>-10,000,000$</p>
                        </div>
                    </div>

                    <div style="margin-top: -13px;"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped src="../../assets/css/wallet.css"></style>

