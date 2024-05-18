<template>
  <q-page class="home-background">
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
            </div>
            <div class="artist">
              <img src="~assets/ANITTA.jpg" alt="ANITTA" />
            </div>
            <div class="artist">
              <img src="~assets/WIZKHALIFA.png" alt="WIZ KHALIFA" />
            </div>
          </div>

          <div class="artist-row">
            <div class="artist">
              <img src="~assets/YEAT.png" alt="YEAT" />
            </div>
            <div class="artist">
              <img src="~assets/ICESPICE.jpg" alt="ICE SPICE" />
            </div>
            <div class="artist">
              <img src="~assets/DONTOLIVER.jpg" alt="DON TOLIVER" />
            </div>
          </div>

          <div class="artist-row">
            <div class="artist">
              <img src="~assets/NLECHOPPA.jpg" alt="NLE CHOPPA" />
            </div>
            <div class="artist">
              <img src="~assets/TRIPPIERED.jpg" alt="TRIPPIE REDD" />
            </div>
            <div class="artist">
              <img src="~assets/CHIEFKEEF.jpg" alt="CHIEF KEEF" />
            </div>
          </div>

          <div class="artist-row">
            <div class="artist">
              <img src="~assets/RICKROSS.jpg" alt="RICK ROSS" />
            </div>
            <div class="artist">
              <img src="~assets/6IX9INE.jpg" alt="6IX9INE" />
            </div>
            <div class="artist">
              <img src="~assets/GUCCIMANE.jpg" alt="GUCCI MANE" />
            </div>
          </div>

          <div class="artist-row">
            <div class="artist">
              <img src="~assets/LILPUMP.jpg" alt="LIL PUMP" />
            </div>
            <div class="artist">
              <img src="~assets/RICHTHEKID.jpg" alt="RICH THE KID" />
            </div>
            <div class="artist">
              <img src="~assets/CITYMORGUE.png" alt="CITY MORGUE" />
            </div>
          </div>

          <h2 class="section-title1">+ MANY MORE TO BE ANNOUNCED</h2>
        </div>
      </div>

      <div class="ticket-row">
        <div
          class="ticket-container"
          @click="redirectToBuyTicketPage"
          @mouseover="zoomOut"
          @mouseleave="resetZoom"
        >
          <div class="ticket">
            <img
              src="~/assets/BEACHPLEASE.png"
              alt="BEACHPLEASE"
              class="ticket-image"
            />
            <div class="ticket-details">
              <p class="ticket-name">General Access</p>
              <p class="ticket-price">$199</p>
              <p class="ticket-description">
                The General Access pass grants you access to the festival for
                the entire duration of the event.
              </p>
              <router-link to="/buy">
                <button class="buy-now-button">BUY NOW</button>
              </router-link>
            </div>
          </div>
        </div>

        <div
          class="ticket-container"
          @click="redirectToBuyTicketPage"
          @mouseover="zoomOut"
          @mouseleave="resetZoom"
        >
          <div class="ticket">
            <img
              src="~/assets/BEACHPLEASE.png"
              alt="BEACHPLEASE"
              class="ticket-image"
            />
            <div class="ticket-details">
              <p class="ticket-name">VIP Pass</p>
              <p class="ticket-price">$329</p>
              <p class="ticket-description">
                The VIP Pass offers “skip-the-line” access to the festival area,
                the possibility to watch the show from an elevated VIP platform,
                the option to reserve a table, separate toilets, and private
                bars on the VIP platform.
              </p>
              <router-link to="/buy">
                <button class="buy-now-button">BUY NOW</button>
              </router-link>
            </div>
          </div>
        </div>

        <div
          class="ticket-container"
          @click="redirectToBuyTicketPage"
          @mouseover="zoomOut"
          @mouseleave="resetZoom"
        >
          <div class="ticket">
            <img
              src="~/assets/BEACHPLEASE.png"
              alt="BEACHPLEASE"
              class="ticket-image"
            />
            <div class="ticket-details">
              <p class="ticket-name">Backstage Lounge Pass</p>
              <p class="ticket-price">$399</p>
              <p class="ticket-description">
                The “Backstage Lounge” Pass offers ultra-fast lane access (the
                quickest access lane in the festival) and the possibility to
                watch the Main Stage show from the artist-dedicated lounge,
                alongside your favorite stars! The lounge is an elevated
                platform with the best view towards the Main Stage, with private
                bars and dedicated toilets. The pass also offers the option to
                reserve a table in the Lounge.
              </p>
              <router-link to="/buy">
                <button class="buy-now-button">BUY NOW</button>
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
        height="155.5"
        allow="autoplay"
        loading="lazy"
      ></iframe>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    redirectToBuyTicketPage() {
      this.$router.push('/buy');
    },
    zoomOut(event) {
      event.currentTarget.style.transform = 'scale(1.05)';
    },
    resetZoom(event) {
      event.currentTarget.style.transform = 'scale(1)';
    },
  },
};
</script>

<style scoped>
.home-background {
  background: linear-gradient(
    135deg,
    #ff6f61,
    #e53170,
    #833ab4,
    #3a86ff,
    #70e9ff,
    #ffd53e
  );
  background-size: 1200% 1200%;
  animation: gradientBG 20s ease infinite;
}

@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.floating-bar {
  position: fixed;
  width: 100%;
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
  height: 122vh;
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

.ticket-row {
  display: flex;
  justify-content: center;
  gap: 40px;
}

.ticket-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  max-width: 15%;
}

.ticket {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 10px;
}

.ticket-image {
  max-width: 80px;
}

.ticket-details {
  margin-top: 10px;
  text-align: center;
}

.ticket-name {
  font-size: 35px;
  font-weight: bold;
}

.ticket-price {
  font-size: 16px;
  font-weight: bold;
}

.ticket-description {
  font-size: 14px;
  margin-top: 5px;
}

.buy-now-button {
  background-color: rgb(154, 221, 54);
  border: none;
  font-weight: 700;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 25px;
  margin-top: 10px;
}

.buy-now-button:hover {
  background-color: #45a049;
}

.buy-now-button:active {
  background-color: #3e8e41;
}

.spotify-container {
  position: fixed;
  bottom: 20px;
  left: 20px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
