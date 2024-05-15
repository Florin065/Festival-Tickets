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
            <input
              type="email"
              id="email"
              v-model="formData.email"
              @input="validateEmail"
              required
            />
            <span v-if="!isEmailValid" style="color: red"
              >Email already exists.</span
            >

            <label for="phone_number">Phone number:</label>
            <input
              type="text"
              id="phone_number"
              v-model="formData.phone_number"
              @input="validatePhoneNumber"
              required
            />
            <span v-if="!isPhoneValid" style="color: red"
              >Phone number already exists.</span
            >

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
import { db } from '../firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

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
      isEmailValid: true,
      isPhoneValid: true,
      ticketTypes: [],
    };
  },
  async mounted() {
    const ticketSnapshot = await getDocs(collection(db, 'Ticket'));
    this.ticketTypes = ticketSnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        price: data.price,
        name: data.name,
        description: data.description,
      };
    });
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
    async submitForm() {
      if (!this.isEmailValid || !this.isPhoneValid) {
        console.error('Error: Invalid email or phone number.');
        return;
      }

      try {
        const userRef = await addDoc(collection(db, 'User'), this.formData);
        console.log('Document written with ID: ', userRef.id);

        const invoiceData = {
          user_id: userRef.id,
          tickets: this.selectedTickets,
          total_price: this.totalPrice,
          created_at: new Date(),
        };
        await addDoc(collection(db, 'Invoice'), invoiceData);
        console.log('Invoice created successfully.');

        this.resetForm();
        this.resetTickets();
        this.showForm = false;
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    },
    resetForm() {
      this.formData.name = '';
      this.formData.surname = '';
      this.formData.email = '';
      this.formData.phone_number = '';
      this.isEmailValid = true;
      this.isPhoneValid = true;
    },
    resetTickets() {
      for (let type in this.quantity) {
        this.quantity[type] = 0;
      }
    },
    async validateEmail() {
      const usersRef = collection(db, 'User');
      const queryByEmail = await getDocs(
        query(usersRef, where('email', '==', this.formData.email))
      );

      if (!queryByEmail.empty) {
        this.isEmailValid = false;
      } else {
        this.isEmailValid = true;
      }
    },
    async validatePhoneNumber() {
      const usersRef = collection(db, 'User');
      const queryByPhone = await getDocs(
        query(usersRef, where('phone_number', '==', this.formData.phone_number))
      );

      if (!queryByPhone.empty) {
        this.isPhoneValid = false;
      } else {
        this.isPhoneValid = true;
      }
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
