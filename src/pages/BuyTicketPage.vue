<template>
  <div class="container">
    <router-link to="/buy" class="back-link">
      <div class="logo">
        <img src="~/assets/BEACHPLEASE.png" alt="logo" />
      </div>
    </router-link>
    <div class="rows">
      <div class="poster-image">
        <img src="~/assets/poster.png" alt="poster" />
      </div>
      <div class="info-container">
        <div class="info">
          <p class="name">BEACH, PLEASE! Festival 2024</p>
          <p class="place">Costinești</p>
          <p class="period">10-14 July</p>
        </div>
        <div class="tickets">
          <p class="no_tickets">No. Tickets</p>
        </div>
        <div v-for="type in ticketTypes" :key="type.id" class="type">
          <div class="type-info">
            <p class="name">{{ type.name }}</p>
            <p class="description">{{ type.description }}</p>
            <p class="price">Price: {{ type.price }} EUR</p>
          </div>
          <div class="quantity-control">
            <button @click="decrement(type.id)">-</button>
            <input type="text" :value="quantity[type.id]" readonly />
            <button @click="increment(type.id)">+</button>
          </div>
        </div>
        <div class="buy-button">
          <button :disabled="!isTicketSelected()" @click="showForm = true">
            Buy tickets
          </button>
        </div>
      </div>
    </div>
    <div v-if="showForm" class="overlay">
      <div class="form-container">
        <div class="form">
          <form @submit.prevent="submitForm">
            <h2>Buy Tickets</h2>
            <p>You have selected the following tickets:</p>
            <ul>
              <li v-for="(count, type) in selectedTickets" :key="type.id">
                {{ count }} x
                {{ ticketTypes.find((t) => t.id === type).name }} -
                {{ ticketTypes.find((t) => t.id === type).price }} EUR
              </li>
            </ul>
            <p>Total price: {{ totalPrice }} EUR</p>
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="formData.name" required />

            <label for="surname">Surname:</label>
            <input
              type="text"
              id="surname"
              v-model="formData.surname"
              required
            />

            <label for="email">Email:</label>
            <input type="email" id="email" v-model="formData.email" required />

            <label for="phone_number">Phone number:</label>
            <input
              type="text"
              id="phone_number"
              v-model="formData.phone_number"
              required
            />

            <div class="button-group">
              <button type="submit">Submit</button>
              <button type="button" @click="showForm = false">Close</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: {
        type1: 0,
        type2: 0,
        type3: 0,
        type4: 0,
        type5: 0,
        type6: 0,
      },
      showForm: false,
      formData: {
        name: '',
        surname: '',
        email: '',
        phone_number: '',
      },
      ticketTypes: [
        {
          id: 'type1',
          price: 199,
          name: 'General Access — 5 Days Pass',
          description:
            'The General Access pass grants you access to the festival for the entire duration of the event. It includes the 189 EUR ticket price and a 10 EUR issuing fee.',
        },
        {
          id: 'type2',
          price: 329,
          name: 'VIP Access — 5 Days Pass',
          description:
            "The VIP Pass offers 'skip-the-line' access to the festival area, the possibility to watch the show from an elevated VIP platform, the option to reserve a table, separate toilets, and private bars on the VIP platform. It includes the ticket price of 319 EUR lei and a 10 EUR issuing fee.",
        },
        {
          id: 'type3',
          price: 399,
          name: 'VIP Access — 5 Days Pass',
          description:
            "The 'Backstage Lounge' Pass offers ultra-fast lane access (the quickest access lane in the festival) and the possibility to watch the Main Stage show from the artist-dedicated lounge, alongside your favorite stars! The lounge is an elevated platform with the best view towards the Main Stage, with private bars and dedicated toilets. The pass also offers the option to reserve a table in the Lounge. It includes the 389 EUR ticket price and a 10 EUR issuing fee.",
        },
        {
          id: 'type4',
          price: 150,
          name: 'UPGRADE: General Access —> VIP (5 Days Pass)',
          description:
            "ATTENTION: THIS IS NOT A TICKET, but an UPGRADE to VIP for participants who have already purchased a General Access (5 Days Pass). Upon festival entry, the participant must present both the General Access ticket and the Upgrade, and the name on both must match the participant's ID. It includes the 140 EUR ticket price and a 10 EUR issuing fee.",
        },
        {
          id: 'type5',
          price: 220,
          name: 'UPGRADE: General Access —> Backstage Lounge (5 Days Pass)',
          description:
            "ATTENTION: THIS IS NOT A TICKET, but an UPGRADE to Backstage Lounge for participants who have already purchased a General Access (5 Days Pass). Upon festival entry, the participant must present both the General Access ticket and the Upgrade, and the name on both must match the participant's ID. It includes the 210 EUR ticket price and a 10 EUR issuing fee.",
        },
        {
          id: 'type6',
          price: 70,
          name: 'UPGRADE: VIP —> Backstage Lounge (5 Days Pass)',
          description:
            "ATTENTION: THIS IS NOT A TICKET, but an UPGRADE to Backstage Lounge for participants who have already purchased a VIP (5 Days Pass). Upon festival entry, the participant must present both the VIP ticket and the Upgrade, and the name on both must match the participant's ID. It includes the 60 EUR ticket price and a 10 EUR issuing fee.",
        },
      ],
    };
  },
  methods: {
    increment(type) {
      this.quantity[type]++;
    },
    decrement(type) {
      if (this.quantity[type] > 0) {
        this.quantity[type]--;
      }
    },
    submitForm() {
      console.log('Form submitted:', this.formData);

      this.resetForm();
      this.showForm = false;
    },
    resetForm() {
      this.formData.name = '';
      this.formData.surname = '';
      this.formData.email = '';
      this.formData.phone_number = '';
    },
    isTicketSelected() {
      return Object.values(this.quantity).some((quantity) => quantity > 0);
    },
  },
  computed: {
    selectedTickets() {
      return this.ticketTypes.reduce((selected, type) => {
        if (this.quantity[type.id] > 0) {
          selected[type.id] = this.quantity[type.id];
        }
        return selected;
      }, {});
    },
    totalPrice() {
      return Object.entries(this.selectedTickets).reduce(
        (total, [type, count]) => {
          const ticket = this.ticketTypes.find((t) => t.id === type);
          return total + ticket.price * count;
        },
        0
      );
    },
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url('assets/buy.png');
  background-size: 100vw 300vh;
  background-position: center;
  background-repeat: no-repeat;
}

.logo {
  margin-right: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.logo img {
  width: 300px;
}

.rows {
  display: flex;
  justify-content: center;
  align-items: top;
  flex-direction: row;
  gap: 30px;
}

.info-container {
  background-color: white;
  padding: 30px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  width: 40%;
  position: relative;
}

.poster-image {
  height: 700px;
  overflow: hidden;
  position: relative;
}

.poster-image img {
  width: 100%;
  height: 50%;
  border: 20px solid white;
  border-radius: 20px;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.info .name {
  font-size: 30px;
}

.info .place,
.info .period {
  font-size: 18px;
}

.tickets {
  font-weight: bold;
  border-bottom: 2px solid rgb(146, 140, 140);
  text-align: right;
}

.type {
  margin-top: 20px;
  border-bottom: 1px solid rgb(146, 140, 140);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.type-info {
  width: calc(100% - 120px);
}

.quantity-control {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.quantity-control button {
  cursor: pointer;
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  background-color: #030447;
  font-weight: bold;
  color: #ffffff;
  border-radius: 5px;
}

.quantity-control input {
  width: 40px;
  text-align: center;
  font-weight: bold;
}

.buy-button {
  margin-top: 10px;
  text-align: right;
}

.buy-button button {
  cursor: pointer;
  padding: 10px 20px;
  border: none;
  background-color: #030447;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  border-radius: 5px;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-container {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  max-width: 80%;
}

.form {
  max-width: 500px;
  margin: auto;
}

.form h2 {
  margin-bottom: 20px;
}

.form label {
  display: block;
  margin-bottom: 10px;
}

.form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
}

.form button {
  background-color: #030447;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.form button:hover {
  background-color: #001f3f;
}

.button-group {
  display: flex;
  justify-content: space-between;
}
</style>
