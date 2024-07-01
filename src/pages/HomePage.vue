<template>
  <q-page class="home-background">
    <q-bar class="floatingBar">
      <q-img
        src="~/assets/BEACHPLEASE.png"
        alt="Beach Please Logo"
        style="width: 55px; height: 40px; cursor: pointer"
        @click="redirectToHomePage"
      ></q-img>

      <q-btn
        class="glossy"
        rounded
        size="12px"
        color="green"
        label="Buy Tickets"
        to="/buy"
      ></q-btn>
    </q-bar>

    <br />

    <q-container class="q-pa-md">
      <div class="video-container">
        <video autoplay loop muted>
          <source
            src="~/assets/BEACH, PLEASE! 2024 — Official Date Announcement.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <br />

      <div class="section">
        <h2 class="section-title text-h5 q-my-md">Line-up</h2>
        <br />
        <br />
        <br />
        <br />

        <div class="row">
          <div
            v-for="(artist, index) in artists"
            :key="index"
            class="col-sm-6 artist-card col-lg-3 col-md-4 col-xs-12"
          >
            <q-card>
              <q-img :src="getAsset(artist.image)" :alt="artist.name">
                <div class="absolute-bottom-right text-color subtitle-box">
                  <div class="text-h6 text-bold">{{ artist.name }}</div>
                  <div class="text-h6">{{ artist.date }}</div>
                </div>
              </q-img>
            </q-card>
          </div>
        </div>

        <h2 class="section-title1 text-h5 q-my-md q-px-md q-pt-md">
          + MANY MORE TO BE ANNOUNCED
        </h2>
      </div>

      <h2 class="section-title text-h5 q-my-md q-px-md">Bilete</h2>
      <br />
      <br />
      <br />
      <div class="ticket-row">
        <div
          v-for="(ticket, index) in tickets"
          :key="index"
          class="ticket-container"
          @click="redirectToBuyTicketPage"
          @mouseover="zoomOut"
          @mouseleave="resetZoom"
        >
          <q-card class="ticket">
            <q-img
              src="~/assets/BEACHPLEASE.png"
              :alt="ticket.name"
              class="ticket-image"
            ></q-img>
            <div class="ticket-details">
              <div class="ticket-name">{{ ticket.name }}</div>
              <div class="ticket-price">{{ ticket.price }}</div>
              <div class="ticket-description">{{ ticket.description }}</div>
            </div>
            <q-btn class="buy-now-button">BUY NOW</q-btn>
          </q-card>
        </div>
      </div>
    </q-container>

    <div class="spotify-container">
      <q-btn
        icon="minimize"
        flat
        dense
        class="minimize-btn"
        @click="toggleSpotify"
      ></q-btn>
      <iframe
        v-show="isSpotifyVisible"
        src="https://open.spotify.com/embed/playlist/3iJBNJPjV1XTaGrj7o2A4V?utm_source=generator"
        width="100%"
        height="155.5"
        allow="autoplay"
        loading="lazy"
      ></iframe>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAsset } from 'src/lib/assets';
const router = useRouter();

const redirectToHomePage = () => {
  router.push('/');
};

const redirectToBuyTicketPage = () => {
  router.push('/buy');
};

const zoomOut = (event: MouseEvent) => {
  (event.currentTarget as HTMLElement).style.transform = 'scale(1.05)';
};

const resetZoom = (event: MouseEvent) => {
  (event.currentTarget as HTMLElement).style.transform = 'scale(1)';
};

const artists = ref([
  {
    image: 'TRAVIS.jpg',
    name: 'TRAVIS SCOTT',
    date: '14 Iulie',
  },
  {
    image: 'ANITTA.jpg',
    name: 'ANITTA',
    date: '12 Iulie',
  },
  {
    image: 'WIZKHALIFA.png',
    name: 'WIZ KHALIFA',
    date: '13 Iulie',
  },
  {
    image: 'YEAT.png',
    name: 'YEAT',
    date: '11 Iulie',
  },
  {
    image: 'ICESPICE.jpg',
    name: 'ICE SPICE',
    date: '11 Iulie',
  },
  {
    image: 'DONTOLIVER.jpg',
    name: 'DON TOLIVER',
    date: '12 Iulie',
  },
  {
    image: 'NLECHOPPA.jpg',
    name: 'NLE CHOPPA',
    date: '13 Iulie',
  },
  {
    image: 'TRIPPIEREDD.jpg',
    name: 'TRIPPIE REDD',
    date: '12 Iulie',
  },
  {
    image: 'CHIEFKEEF.jpg',
    name: 'CHIEF KEEF',
    date: '11 Iulie',
  },
  {
    image: 'LILTJAY.jpg',
    name: 'LIL TJAY',
    date: '12 Iulie',
  },
  {
    image: 'SWAELEE.jpg',
    name: 'SWAE LEE',
    date: '14 Iulie',
  },
  {
    image: 'RICKROSS.jpg',
    name: 'RICK ROSS',
    date: '13 Iulie',
  },
  {
    image: '6IX9INE.jpg',
    name: '6IX9INE',
    date: '13 Iulie',
  },
  {
    image: 'GUCCIMANE.jpg',
    name: 'GUCCI MANE',
    date: '12 Iulie',
  },
  {
    image: 'FRENCHMONTANA.jpg',
    name: 'FRENCH MONTANA',
    date: '14 Iulie',
  },
  {
    image: 'RICHTHEKID.jpg',
    name: 'RICH THE KID',
    date: '13 Iulie',
  },
  {
    image: 'LILPUMP.jpg',
    name: 'LIL PUMP',
    date: '13 Iulie',
  },
  {
    image: 'CITYMORGUE.png',
    name: 'CITY MORGUE',
    date: '11 Iulie',
  },
  {
    image: 'RICHAMIRI.png',
    name: 'RICH AMIRI',
    date: '12 Iulie',
  },
]);

const tickets = ref([
  {
    name: 'General Access',
    price: '$199',
    description:
      'The General Access pass grants you access to the festival for the entire duration of the event.',
  },
  {
    name: 'VIP Pass',
    price: '$329',
    description:
      'The VIP Pass offers “skip-the-line” access to the festival area, the possibility to watch the show from an elevated VIP platform, the option to reserve a table, separate toilets, and private bars on the VIP platform.',
  },
  {
    name: 'Backstage Lounge Pass',
    price: '$399',
    description:
      'The “Backstage Lounge” Pass offers ultra-fast lane access (the quickest access lane in the festival) and the possibility to watch the Main Stage show from the artist-dedicated lounge, alongside your favorite stars! The lounge is an elevated platform with the best view towards the Main Stage, with private bars and dedicated toilets. The pass also offers the option to reserve a table in the Lounge.',
  },
]);

const isSpotifyVisible = ref(true);

const toggleSpotify = () => {
  isSpotifyVisible.value = !isSpotifyVisible.value;
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
  height: 395vh;
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

.floatingBar {
  position: fixed;
  height: 40px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
}

.text-color {
  color: rgb(255, 255, 255);
}

.section-title {
  font-family: 'Roboto', sans-serif;
  position: absolute;
  font-size: 50px;
  font-weight: 700;
  position: absolute;
}

.section-title1 {
  font-family: 'Roboto', sans-serif;
  font-size: 30px;
  font-weight: 700;
}

.video-container video {
  width: 100%;
  max-height: 100%;
}

.artist-card {
  padding: 15px 40px;
}

.subtitle-box {
  background-color: rgba(0, 0, 0, 0);
}

.ticket-row {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .ticket-row {
    flex-direction: column;
    align-items: center;
  }

  .ticket-container {
    max-width: 80%;
    margin-bottom: 20px;
  }
}

.ticket-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #ddd;
  max-width: 15%;
  height: 700px;
  transition: max-width 0.3s ease, height 0.3s ease;
}

@media (max-width: 768px) {
  .ticket-container {
    max-width: 80%;
    height: auto;
  }
}

.ticket {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  background-color: rgba(255, 255, 255, 0.1);
}

.q-card {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.ticket-image {
  max-width: 80px;
}

.ticket-details {
  margin-top: 10px;
  text-align: center;
}

.ticket-name {
  font-size: 20px;
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
  margin-top: auto;
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
  padding: 10px;
}

.minimize-btn {
  position: absolute;
  top: 0px;
  right: 5px;
  z-index: 1;
  background: rgba(235, 6, 6, 0.8);
  width: 0px;
  height: 1%;
}
</style>
