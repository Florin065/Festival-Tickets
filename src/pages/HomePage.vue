<template>
  <q-page>
    <div class="floating-bar">
      <router-link to="/">
        <img src="~/assets/BEACHPLEASE.png" alt="Logo" class="logo" />
      </router-link>
      <router-link to="/buy">
        <button class="buy-tickets-button">TICKETS</button>
      </router-link>
    </div>
    <q-container class="q-pa-md">
      <div class="video-container">
        <video autoplay loop muted>
          <source
            src="~assets/BEACH, PLEASE! 2024 — Official Date Announcement.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div class="section">
        <h2 class="section-title">Line-up</h2>
        <div class="artist-gallery">
          <div class="artist-row">
            <div class="artist">
              <img src="~assets/TRAVIS.jpg" alt="TRAVIS SCOTT" />
              <div class="overlay">TRAVIS SCOTT</div>
            </div>
            <div class="artist">
              <img src="~assets/ANITTA.jpg" alt="ANITTA" />
              <div class="overlay">ANITTA</div>
            </div>
            <div class="artist">
              <img src="~assets/WIZKHALIFA.png" alt="WIZ KHALIFA" />
              <div class="overlay">WIZ KHALIFA</div>
            </div>
          </div>
          <div class="artist-row">
            <div class="artist">
              <img src="~assets/YEAT.png" alt="YEAT" />
              <div class="overlay">YEAT</div>
            </div>
            <div class="artist">
              <img src="~assets/ICESPICE.jpg" alt="ICE SPICE" />
              <div class="overlay">ICE SPICE</div>
            </div>
            <div class="artist">
              <img src="~assets/DONTOLIVER.jpg" alt="DON TOLIVER" />
              <div class="overlay">DON TOLIVER</div>
            </div>
          </div>
          <div class="artist-row">
            <div class="artist">
              <img src="~assets/NLECHOPPA.jpg" alt="NLE CHOPPA" />
              <div class="overlay">NLE CHOPPA</div>
            </div>
            <div class="artist">
              <img src="~assets/TRIPPIERED.jpg" alt="TRIPPIE REDD" />
              <div class="overlay">TRIPPIE REDD</div>
            </div>
            <div class="artist">
              <img src="~assets/CHIEFKEEF.jpg" alt="CHIEF KEEF" />
              <div class="overlay">CHIEF KEEF</div>
            </div>
          </div>
          <div class="artist-row">
            <div class="artist">
              <img src="~assets/RICKROSS.jpg" alt="RICK ROSS" />
              <div class="overlay">RICK ROSS</div>
            </div>
            <div class="artist">
              <img src="~assets/6IX9INE.jpg" alt="6IX9INE" />
              <div class="overlay">6IX9INE</div>
            </div>
            <div class="artist">
              <img src="~assets/GUCCIMANE.jpg" alt="GUCCI MANE" />
              <div class="overlay">GUCCI MANE</div>
            </div>
          </div>
          <div class="artist-row">
            <div class="artist">
              <img src="~assets/LILPUMP.jpg" alt="LIL PUMP" />
              <div class="overlay">LIL PUMP</div>
            </div>
            <div class="artist">
              <img src="~assets/RICHTHEKID.jpg" alt="RICH THE KID" />
              <div class="overlay">RICH THE KID</div>
            </div>
            <div class="artist">
              <img src="~assets/CITYMORGUE.png" alt="CITY MORGUE" />
              <div class="overlay">CITY MORGUE</div>
            </div>
          </div>
          <h2 class="section-title1">+ MANY MORE TO BE ANNOUNCED</h2>
        </div>
      </div>
      <div class="section">
        <h2 class="section-title">Tickets</h2>
        <div class="bilete-gallery">
          <div class="bilete-row">
            <div class="bilete">
              <router-link to="/buy">
                <img src="~assets/General.png" class="bilet-image" />
              </router-link>
              <router-link to="/buy">
                <button class="buy-now-button1">BUY NOW</button>
              </router-link>
            </div>
            <div class="bilete">
              <router-link to="/buy">
                <img src="~assets/VIP.png" class="bilet-image" />
              </router-link>
              <router-link to="/buy">
                <button class="buy-now-button2">BUY NOW</button>
              </router-link>
            </div>
            <div class="bilete">
              <router-link to="/buy">
                <img src="~assets/Lounge.png" class="bilet-image" />
              </router-link>
              <router-link to="/buy">
                <button class="buy-now-button3">BUY NOW</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </q-container>
    <div class="spotify-container">
      <iframe
        src="https://open.spotify.com/embed/playlist/3iJBNJPjV1XTaGrj7o2A4V?utm_source=generator"
        width="100%"
        height="352"
        frameborder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
.floating-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
}

.logo {
  max-height: 40px;
}

.buy-tickets-button {
  background-color: rgb(154, 221, 54);
  border: none;
  font-weight: 700;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 25px;
}

.buy-tickets-button:hover {
  background-color: #45a049;
}

.buy-tickets-button:active {
  background-color: #3e8e41;
}

.section-title {
  font-family: 'Roboto', sans-serif;
  font-size: 50px;
  font-weight: 700;
  margin-left: 390px;
}

.section-title1 {
  font-family: 'Roboto', sans-serif;
  font-size: 30px;
  font-weight: 700;
  margin-left: 390px;
}

.video-container {
  position: relative;
  width: 100%;
  height: 127vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-container video {
  width: 100%;
  max-height: 100%;
}

.artist-gallery {
  display: grid;
  gap: 20px;
}

.artist-row {
  display: flex;
  justify-content: center;
}

.artist img {
  max-width: 95%;
  height: 250px;
  object-fit: cover;
  border: 10px solid green;
  border-radius: 10px;
}

.bilete-gallery {
  display: grid;
  gap: 20px;
}

.bilete-row {
  display: flex;
  justify-content: center;
}

.bilet-image {
  max-width: 80%;
  height: auto;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.bilet-image:hover {
  transform: scale(1.05);
}

.buy-now-button1 {
  background-color: rgb(154, 221, 54);
  border: none;
  font-weight: 700;
  padding: 7px 86px; /* Ajustează dimensiunea butonului */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 0px; /* Face butonul dreptunghiular */
  position: absolute;
  bottom: 179px;
  left: 22.75%;
}

.buy-now-button2 {
  background-color: rgb(154, 221, 54);
  border: none;
  font-weight: 700;
  padding: 7px 86px; /* Ajustează dimensiunea butonului */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 0px; /* Face butonul dreptunghiular */
  position: absolute;
  bottom: 145px;
  left: 41.6%;
}

.buy-now-button3 {
  background-color: rgb(154, 221, 54);
  border: none;
  font-weight: 700;
  padding: 7px 86px; /* Ajustează dimensiunea butonului */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 0px; /* Face butonul dreptunghiular */
  position: absolute;
  bottom: 52.5px;
  left: 60.5%;
}

.buy-now-button1:hover {
  background-color: #45a049;
}

.buy-now-button1:active {
  background-color: #3e8e41;
}

.buy-now-button2:hover {
  background-color: #45a049;
}

.buy-now-button2:active {
  background-color: #3e8e41;
}

.buy-now-button3:hover {
  background-color: #45a049;
}

.buy-now-button3:active {
  background-color: #3e8e41;
}

.spotify-container {
  position: fixed;
  bottom: 20px;
  left: 20px;
  border-radius: 12px;
  overflow: hidden; /* Asigură că conținutul iframe este tăiat în cazul în care depășește containerul */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Adaugă o umbră sub container */
}

.overlay {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  padding: 5px 10px;
  border-radius: 0 0 10px 0;
}
</style>
