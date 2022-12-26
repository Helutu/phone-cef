<script>
export default {
    props: [
        "id", 
        "data"
    ],

    computed: {
        req() {
            return this.data.find(item => item.id === this.id);
        }
    }
};
</script>

<template>
    <div class="app wallet">
        <div class="container">
            <div class="control-bar" style="margin-top: 10px;">
                <div class="control" @click="this.emitter.emit('changePageRequest', 'Main')" style="color: #fff;">
                    <svg width="25" height="25" fill="none" viewBox="0 0 25 25">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.25 6.75L4.75 12L10.25 17.25"></path>
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.25 12H5"></path>
                    </svg>                      
                </div>
            </div>
            <div class="main" style="margin-top: -10px; margin-left: 0px;">
                <div class="dataForRequest">


                    <div class="emoji">👨</div>
                    <h3>{{ req.name }}</h3>

                    <p>is asking you for</p>

                    <h2>${{ Number(req.sum).toLocaleString() }}</h2>

                    <h2 style="margin-top: 50px; font-size: 16px; margin-bottom: 19px;">description</h2>
                    <p>{{ req.description }}</p>

                    <div style="position: fixed; bottom: 55px; right: 0; left: 0;">
                        <button type="submit" class="btn-dusty-small">
                            <svg width="25" height="25" fill="none" viewBox="0 0 25 25">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75V4.75C16.0041 4.75 19.25 7.99594 19.25 12V12C19.25 16.0041 16.0041 19.25 12 19.25V19.25C7.99594 19.25 4.75 16.0041 4.75 12V12Z"></path>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 12.75L10.1837 13.6744C10.5275 14.407 11.5536 14.4492 11.9564 13.7473L14.25 9.75"></path>
                            </svg><br>Accept
                        </button> 
                        <button type="submit" class="btn-dusty-small">
                            <svg width="25" height="25" fill="none" viewBox="0 0 25 25">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75V4.75C16.0041 4.75 19.25 7.99594 19.25 12V12C19.25 16.0041 16.0041 19.25 12 19.25V19.25C7.99594 19.25 4.75 16.0041 4.75 12V12Z"></path>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 9.75L14.25 14.25"></path>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.25 9.75L9.75 14.25"></path>
                            </svg><br>Refuse
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped src="../../assets/css/wallet.css"></style>