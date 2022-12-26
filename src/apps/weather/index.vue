<script>
export default { };
</script>

<template>
  <div class="app weather">
    <div class="container">
        <div class="main">
            <h3>Switzerland</h3>
            <h4>5°</h4>
            <p>Snow</p>
            <p class="maxmin">Max: 15° Min: 4°</p>
        </div>
        <div class="forecast">
            <div class="items">
                <div class="item">
                    <h3>Now</h3>
                    <img src="https://static.vecteezy.com/system/resources/previews/001/194/562/original/snowflake-png.png">
                    <p>5°</p>
                </div>
                <div class="item">
                    <h3>22</h3>
                    <img src="https://static.vecteezy.com/system/resources/previews/001/194/562/original/snowflake-png.png">
                    <p>5°</p>
                </div>
                <div class="item">
                    <h3>23</h3>
                    <img src="https://static.vecteezy.com/system/resources/previews/001/194/562/original/snowflake-png.png">
                    <p>5°</p>
                </div>
                <div class="item">
                    <h3>00</h3>
                    <img src="https://static.vecteezy.com/system/resources/previews/001/194/562/original/snowflake-png.png">
                    <p>5°</p>
                </div>
                <div class="item">
                    <h3>01</h3>
                    <img src="https://static.vecteezy.com/system/resources/previews/001/194/562/original/snowflake-png.png">
                    <p>5°</p>
                </div>
            </div>
        </div>
        <div class="grid">
            <div class="card">
                <p>Feels Like</p>
                <h3>5°</h3>
            </div>
            <div class="card">
                <p>Humidity</p>
                <h3>13%</h3>
            </div>
            <div class="card">
                <p>Visibility</p>
                <h3>10 mi</h3>
            </div>
            <div class="card">
                <p>Rainfall</p>
                <h3>0''<br><font style="font-size: 12px;">in the last 24hrs</font></h3>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped src="../../assets/css/weather.css"></style>

