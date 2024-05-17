<template>
  <div>
    <!-- Invoice Section -->
    <div class="database-section">
      <h1>Invoice List</h1>
      <button class="add-btn" @click="showInvoiceForm = true">Add</button>
    </div>
    <!-- Invoice Form -->
    <form v-if="showInvoiceForm" @submit.prevent="submitInvoice" class="form">
      <h2 v-if="!editModeInvoice">Add Invoice</h2>
      <h2 v-else>Edit Invoice</h2>
      <input
        type="text"
        v-model="invoiceData.user_id"
        placeholder="User ID"
        required
      />
      <input
        type="number"
        v-model="invoiceData.total_price"
        placeholder="Total Price"
        required
      />
      <input type="datetime-local" v-model="invoiceData.created_at" required />
      <div v-for="(quantity, type) in invoiceData.tickets" :key="type">
        <input
          type="number"
          v-model="invoiceData.tickets[type]"
          :placeholder="`Type ${type} Quantity`"
        />
      </div>
      <button type="submit" class="submit-btn">
        {{ editModeInvoice ? 'Save Changes' : 'Add Invoice' }}
      </button>
    </form>
    <!-- Invoice Table -->
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Total Price</th>
            <th>Created At</th>
            <th>Tickets</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="invoice in invoices" :key="invoice.id">
            <td>{{ invoice.user_id }}</td>
            <td>{{ invoice.total_price }}</td>
            <td>{{ invoice.created_at }}</td>
            <td>
              <ul>
                <li v-for="(quantity, type) in invoice.tickets" :key="type">
                  {{ type }} : {{ quantity }}
                </li>
              </ul>
            </td>
            <td>
              <button class="edit-btn" @click="editInvoice(invoice)">
                Edit
              </button>
              <button class="delete-btn" @click="deleteInvoice(invoice.id)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- User Section -->
    <div class="database-section">
      <h1>User List</h1>
      <button class="add-btn" @click="showUserForm = true">Add</button>
    </div>
    <!-- User Form -->
    <form v-if="showUserForm" @submit.prevent="submitUser" class="form">
      <h2 v-if="!editModeUser">Add User</h2>
      <h2 v-else>Edit User</h2>
      <input type="text" v-model="userData.name" placeholder="Name" required />
      <input
        type="text"
        v-model="userData.surname"
        placeholder="Surname"
        required
      />
      <input
        type="email"
        v-model="userData.email"
        placeholder="Email"
        required
      />
      <input
        type="text"
        v-model="userData.phone_number"
        placeholder="Phone Number"
        required
      />
      <button type="submit" class="submit-btn">
        {{ editModeUser ? 'Save Changes' : 'Add User' }}
      </button>
    </form>
    <!-- User Table -->
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.surname }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone_number }}</td>
            <td>
              <button class="edit-btn" @click="editUser(user)">Edit</button>
              <button class="delete-btn" @click="deleteUser(user.id)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Ticket Section -->
    <div class="database-section">
      <h1>Ticket List</h1>
      <button class="add-btn" @click="showTicketForm = true">Add</button>
    </div>
    <!-- Ticket Form -->
    <form v-if="showTicketForm" @submit.prevent="submitTicket" class="form">
      <h2 v-if="!editModeTicket">Add Ticket</h2>
      <h2 v-else>Edit Ticket</h2>
      <input
        type="text"
        v-model="ticketData.name"
        placeholder="Name"
        required
      />
      <input
        type="number"
        v-model="ticketData.price"
        placeholder="Price"
        required
      />
      <input
        type="text"
        v-model="ticketData.description"
        placeholder="Description"
        required
      />
      <button type="submit" class="submit-btn">
        {{ editModeTicket ? 'Save Changes' : 'Add Ticket' }}
      </button>
    </form>
    <!-- Ticket Table -->
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ticket in tickets" :key="ticket.id">
            <td>{{ ticket.name }}</td>
            <td>{{ ticket.price }}</td>
            <td>{{ ticket.description }}</td>
            <td>
              <button class="edit-btn" @click="editTicket(ticket)">Edit</button>
              <button class="delete-btn" @click="deleteTicket(ticket.id)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { db } from '../firebase';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  setDoc,
} from 'firebase/firestore';

export default {
  data() {
    return {
      invoices: [], // Stores the list of invoices
      invoiceData: {
        user_id: '',
        total_price: '',
        created_at: '',
        tickets: {
          type1: '',
          type2: '',
          type3: '',
          type4: '',
          type5: '',
          type6: '',
        },
      },
      editModeInvoice: false, // Tracks if in edit mode for invoices
      editIdInvoice: null, // ID of the invoice being edited
      showInvoiceForm: false, // Controls visibility of the invoice form

      users: [], // Stores the list of users
      userData: {
        name: '',
        surname: '',
        email: '',
        phone_number: '',
      },
      editModeUser: false, // Tracks if in edit mode for users
      editIdUser: null, // ID of the user being edited
      showUserForm: false, // Controls visibility of the user form

      tickets: [], // Stores the list of tickets
      ticketData: {
        name: '',
        price: '',
        description: '',
      },
      editModeTicket: false, // Tracks if in edit mode for tickets
      editIdTicket: null, // ID of the ticket being edited
      showTicketForm: false, // Controls visibility of the ticket form
    };
  },
  async created() {
    // Fetch initial data when component is created
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      // Fetches data for invoices, users, and tickets from Firestore
      const invoiceQuerySnapshot = await getDocs(collection(db, 'Invoice'));
      this.invoices = invoiceQuerySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const userQuerySnapshot = await getDocs(collection(db, 'User'));
      this.users = userQuerySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const ticketQuerySnapshot = await getDocs(collection(db, 'Ticket'));
      this.tickets = ticketQuerySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    },
    async submitInvoice() {
      // Filter out ticket types with empty quantities
      const filteredTickets = Object.fromEntries(
        Object.entries(this.invoiceData.tickets).filter(
          ([, quantity]) => quantity
        )
      );

      // Create a new invoice object with filtered tickets
      const newInvoiceData = {
        ...this.invoiceData,
        tickets: filteredTickets,
      };

      // Adds or updates an invoice in Firestore
      if (!this.editModeInvoice) {
        await addDoc(collection(db, 'Invoice'), newInvoiceData);
      } else {
        await setDoc(doc(db, 'Invoice', this.editIdInvoice), newInvoiceData);
        this.editModeInvoice = false;
        this.editIdInvoice = null;
      }
      this.resetInvoiceForm();
      this.showInvoiceForm = false;
      await this.fetchData();
    },
    editInvoice(invoice) {
      // Populates the form with the selected invoice data for editing
      this.invoiceData = { ...invoice };
      this.editModeInvoice = true;
      this.editIdInvoice = invoice.id;
      this.showInvoiceForm = true;
    },
    async deleteInvoice(id) {
      // Deletes the selected invoice from Firestore
      await deleteDoc(doc(db, 'Invoice', id));
      await this.fetchData();
    },
    resetInvoiceForm() {
      // Resets the invoice form fields
      this.invoiceData = {
        user_id: '',
        total_price: '',
        created_at: '',
        tickets: {
          type1: '',
          type2: '',
          type3: '',
          type4: '',
          type5: '',
          type6: '',
        },
      };
    },
    async submitUser() {
      // Adds or updates a user in Firestore
      if (!this.editModeUser) {
        await addDoc(collection(db, 'User'), this.userData);
      } else {
        await setDoc(doc(db, 'User', this.editIdUser), this.userData);
        this.editModeUser = false;
        this.editIdUser = null;
      }
      this.resetUserForm();
      this.showUserForm = false;
      await this.fetchData();
    },
    editUser(user) {
      // Populates the form with the selected user data for editing
      this.userData = { ...user };
      this.editModeUser = true;
      this.editIdUser = user.id;
      this.showUserForm = true;
    },
    async deleteUser(id) {
      // Deletes the selected user from Firestore
      await deleteDoc(doc(db, 'User', id));
      await this.fetchData();
    },
    resetUserForm() {
      // Resets the user form fields
      this.userData = {
        name: '',
        surname: '',
        email: '',
        phone_number: '',
      };
    },
    async submitTicket() {
      // Adds or updates a ticket in Firestore
      if (!this.editModeTicket) {
        await addDoc(collection(db, 'Ticket'), this.ticketData);
      } else {
        await setDoc(doc(db, 'Ticket', this.editIdTicket), this.ticketData);
        this.editModeTicket = false;
        this.editIdTicket = null;
      }
      this.resetTicketForm();
      this.showTicketForm = false;
      await this.fetchData();
    },
    editTicket(ticket) {
      // Populates the form with the selected ticket data for editing
      this.ticketData = { ...ticket };
      this.editModeTicket = true;
      this.editIdTicket = ticket.id;
      this.showTicketForm = true;
    },
    async deleteTicket(id) {
      // Deletes the selected ticket from Firestore
      await deleteDoc(doc(db, 'Ticket', id));
      await this.fetchData();
    },
    resetTicketForm() {
      // Resets the ticket form fields
      this.ticketData = {
        name: '',
        price: '',
        description: '',
      };
    },
  },
};
</script>

<style scoped>
.database-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1em 0;
}

.add-btn {
  background-color: #4caf50;
  color: white;
  padding: 0.5em 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-btn:hover {
  background-color: #45a049;
}

.form {
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
}

.form input,
.form button {
  margin: 0.5em 0;
  padding: 0.5em;
}

.submit-btn {
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #45a049;
}

.table-container {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2em;
}

th,
td {
  padding: 0.5em;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.edit-btn,
.delete-btn {
  background-color: #4caf50;
  color: white;
  padding: 0.3em 0.6em;
  margin-right: 0.2em;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.delete-btn {
  background-color: #f44336;
}

.edit-btn:hover {
  background-color: #45a049;
}

.delete-btn:hover {
  background-color: #e53935;
}
</style>
