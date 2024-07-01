import { ref, onMounted } from 'vue';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

interface Ticket {
  name: string;
  description?: string;
  new_price: number;
  old_price: number;
}
const useTickets = () => {
  const generalAccessPasses = ref<Ticket[]>([]);
  const vipPasses = ref<Ticket[]>([]);
  const ultraVipPasses = ref<Ticket[]>([]);
  const campingPasses = ref<Ticket[]>([]);
  const upgrades = ref<Ticket[]>([]);

  const fetchTickets = async () => {
    const generalAccessSnapshot = await getDocs(
      collection(db, 'General Access Passes')
    );
    generalAccessPasses.value = generalAccessSnapshot.docs.map(
      (doc) => doc.data() as Ticket
    );

    const vipSnapshot = await getDocs(collection(db, 'VIP Passes'));
    vipPasses.value = vipSnapshot.docs.map((doc) => doc.data() as Ticket);

    const ultraVipSnapshot = await getDocs(
      collection(db, 'Backstage Lounge (ULTRA VIP) Passes')
    );
    ultraVipPasses.value = ultraVipSnapshot.docs.map(
      (doc) => doc.data() as Ticket
    );

    const campingSnapshot = await getDocs(collection(db, 'Camping'));
    campingPasses.value = campingSnapshot.docs.map(
      (doc) => doc.data() as Ticket
    );

    const upgradesSnapshot = await getDocs(collection(db, 'Upgrades'));
    upgrades.value = upgradesSnapshot.docs.map((doc) => doc.data() as Ticket);
  };

  onMounted(() => {
    fetchTickets();
  });

  return {
    generalAccessPasses,
    vipPasses,
    ultraVipPasses,
    campingPasses,
    upgrades,
  };
};

export default useTickets;
