<template>
  <q-page>
    <div
      class="q-pa-md"
      style="
        background-size: cover;
        width: 100%;
        min-height: 100vh;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: 'Open Sans', sans-serif;
        background-attachment: fixed;
      "
      :style="{ 'background-image': `url(${getAsset('buy.png')})` }"
    >
      <div class="row">
        <div class="col-md-6">
          <q-card style="background-color: white; width: 285px">
            <div class="q-pa-md">
              <q-img
                src="~/assets/poster.png"
                alt="Beach Please Poster"
                style="
                  width: 250px;
                  height: 350px;
                  display: block;
                  margin: auto;
                "
              ></q-img>
            </div>
          </q-card>
        </div>
        <div class="col-md-6">
          <q-card style="width: 700px; right: 150px">
            <q-card-section>
              <div>
                <p style="font-size: 36px">BEACH, PLEASE! Festival 2024</p>
                <p style="font-weight: bold; font-size: 16px">Costinești</p>
                <p style="font-size: 16px">10-14 Iulie</p>
              </div>

              <div
                class="q-pt-xl"
                style="
                  display: flex;
                  justify-content: space-between;
                  font-weight: bold;
                  font-size: 20px;
                "
              >
                <p>Cumpără bilete</p>
                <p>No. Tickets</p>
              </div>
              <q-separator style="height: 3px"></q-separator>

              <q-expansion-item
                dense
                dense-toggle
                expand-separator
                label="General Access Passes"
                caption="Biletele GENERAL ACCESS îți oferă acces în festivalul BEACH, PLEASE!"
                :model-value="expandedItems.general"
                @update:model-value="updateExpanded('general', $event)"
              >
                <q-card>
                  <q-card-section>
                    <q-separator style="height: 2px"></q-separator>
                    <q-card-section>
                      <div
                        v-for="(ticket, index) in generalAccessPasses"
                        :key="ticket.name"
                      >
                        <div
                          style="
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                          "
                        >
                          <div style="max-width: 70%">
                            <p
                              style="
                                font-size: 16px;
                                margin-bottom: 0;
                                max-width: 30ch;
                              "
                            >
                              {{ ticket.name }}
                            </p>
                            <p
                              style="
                                font-size: 13px;
                                margin-bottom: 0;
                                font-weight: 20;
                                max-width: 30ch;
                              "
                            >
                              {{ ticket.description }}
                            </p>
                          </div>
                          <p
                            style="
                              font-size: 12px;
                              margin-bottom: 0;
                              font-weight: 20;
                              max-width: 50ch;
                              text-decoration: line-through;
                              margin-right: -15px;
                              margin-left: 20px;
                            "
                          >
                            {{ ticket.old_price }} RON
                          </p>
                          <p
                            style="
                              font-size: 14px;
                              margin-bottom: 0;
                              font-weight: 20;
                              max-width: 50ch;
                            "
                          >
                            {{ ticket.new_price }} RON
                          </p>
                          <div style="display: flex; align-items: center">
                            <q-btn
                              icon="remove"
                              round
                              @click="decreaseQuantity('general', index)"
                            />
                            <q-input
                              v-model="generalQuantities[index]"
                              type="number"
                              :input-style="{ textAlign: 'center' }"
                              style="width: 30px; margin: 0 10px"
                              hide-underline
                              :dense="true"
                              readonly
                            />
                            <q-btn
                              icon="add"
                              round
                              @click="increaseQuantity('general', index)"
                            />
                          </div>
                        </div>
                        <q-separator></q-separator>
                      </div>
                    </q-card-section>
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-separator></q-separator>

              <q-expansion-item
                dense
                dense-toggle
                expand-separator
                label="VIP Passes"
                caption="Biletele VIP oferă acces tip `skip-the-line` în zona de festival,
                posibilitatea de a privi show-ul de pe platforma VIP elevată, posibilitatea
                de rezervare a unei mese, toalete separate și baruri private pe platforma VIP."
                :model-value="expandedItems.vip"
                @update:model-value="updateExpanded('vip', $event)"
              >
                <q-card>
                  <q-card-section>
                    <q-separator style="height: 2px"></q-separator>
                    <q-card-section>
                      <div
                        v-for="(ticket, index) in vipPasses"
                        :key="ticket.name"
                      >
                        <div
                          style="
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                          "
                        >
                          <div style="max-width: 70%">
                            <p
                              style="
                                font-size: 16px;
                                margin-bottom: 0;
                                max-width: 30ch;
                              "
                            >
                              {{ ticket.name }}
                            </p>
                            <p
                              style="
                                font-size: 13px;
                                margin-bottom: 0;
                                font-weight: 20;
                                max-width: 30ch;
                              "
                            >
                              {{ ticket.description }}
                            </p>
                          </div>

                          <p
                            style="
                              font-size: 12px;
                              margin-bottom: 0;
                              font-weight: 20;
                              max-width: 50ch;
                              text-decoration: line-through;
                              margin-right: -15px;
                              margin-left: 20px;
                            "
                          >
                            {{ ticket.old_price }} RON
                          </p>
                          <p
                            style="
                              font-size: 14px;
                              margin-bottom: 0;
                              font-weight: 20;
                              max-width: 50ch;
                            "
                          >
                            {{ ticket.new_price }} RON
                          </p>

                          <div style="display: flex; align-items: center">
                            <q-btn
                              icon="remove"
                              round
                              @click="decreaseQuantity('vip', index)"
                            />
                            <q-input
                              v-model="vipQuantities[index]"
                              type="number"
                              :input-style="{ textAlign: 'center' }"
                              style="width: 50px; margin: 0 10px"
                              hide-underline
                              :dense="true"
                              readonly
                            />
                            <q-btn
                              icon="add"
                              round
                              @click="increaseQuantity('vip', index)"
                            />
                          </div>
                        </div>
                        <q-separator></q-separator>
                      </div>
                    </q-card-section>
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-separator></q-separator>

              <q-expansion-item
                dense
                dense-toggle
                expand-separator
                label="Backstage Lounge (ULTRA VIP) Passes"
                caption="Biletele “Backstage Lounge (Ultra VIP)” oferă acces ultra-fast lane
                (cel mai rapid culoar de acces din festival) și posibilitatea de a privi show-ul
                de pe Main Stage de la lounge-ul dedicat artiștilor, alături de vedetele tale
                preferate! Lounge-ul este o platformă elevată, cu cea mai bună vedere către
                Main Stage, cu baruri private și toalete dedicate. Abonamentul oferă, de asemenea,
                posibilitatea de a rezerva o masă în Lounge."
                :model-value="expandedItems.ultraVip"
                @update:model-value="updateExpanded('ultraVip', $event)"
              >
                <q-card>
                  <q-card-section>
                    <q-separator style="height: 2px"></q-separator>
                    <q-card-section>
                      <div
                        v-for="(ticket, index) in ultraVipPasses"
                        :key="ticket.name"
                      >
                        <div
                          style="
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                          "
                        >
                          <div style="max-width: 70%">
                            <p
                              style="
                                font-size: 16px;
                                margin-bottom: 0;
                                max-width: 30ch;
                              "
                            >
                              {{ ticket.name }}
                            </p>
                            <p
                              style="
                                font-size: 13px;
                                margin-bottom: 0;
                                font-weight: 20;
                                max-width: 30ch;
                              "
                            >
                              {{ ticket.description }}
                            </p>
                          </div>

                          <p
                            style="
                              font-size: 12px;
                              margin-bottom: 0;
                              font-weight: 20;
                              max-width: 50ch;
                              text-decoration: line-through;
                              margin-right: -15px;
                              margin-left: 20px;
                            "
                          >
                            {{ ticket.old_price }} RON
                          </p>
                          <p
                            style="
                              font-size: 14px;
                              margin-bottom: 0;
                              font-weight: 20;
                              max-width: 50ch;
                            "
                          >
                            {{ ticket.new_price }} RON
                          </p>

                          <div style="display: flex; align-items: center">
                            <q-btn
                              icon="remove"
                              round
                              @click="decreaseQuantity('ultraVip', index)"
                            />
                            <q-input
                              v-model="ultraVipQuantities[index]"
                              type="number"
                              :input-style="{ textAlign: 'center' }"
                              style="width: 50px; margin: 0 10px"
                              hide-underline
                              :dense="true"
                              readonly
                            />
                            <q-btn
                              icon="add"
                              round
                              @click="increaseQuantity('ultraVip', index)"
                            />
                          </div>
                        </div>
                        <q-separator></q-separator>
                      </div>
                    </q-card-section>
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-separator></q-separator>

              <q-expansion-item
                dense
                dense-toggle
                expand-separator
                label="Camping"
                caption="Spațiul de camping, poziționat imediat lângă festival,
                include: toalete și dușuri, acces securizat pe baza brățării, pază
                și supraveghere video, lockere și bar dedicat zonei de camping.
                Pentru a avea acces in zona de corturi ai nevoie de bilet valabil la festival!"
                :model-value="expandedItems.camping"
                @update:model-value="updateExpanded('camping', $event)"
              >
                <q-card>
                  <q-card-section>
                    <q-separator style="height: 2px"></q-separator>
                    <q-card-section>
                      <div
                        v-for="(ticket, index) in campingPasses"
                        :key="ticket.name"
                      >
                        <div
                          style="
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                          "
                        >
                          <div style="max-width: 70%">
                            <p
                              style="
                                font-size: 16px;
                                margin-bottom: 0;
                                max-width: 30ch;
                              "
                            >
                              {{ ticket.name }}
                            </p>
                            <p
                              style="
                                font-size: 13px;
                                margin-bottom: 0;
                                font-weight: 20;
                                max-width: 30ch;
                              "
                            >
                              {{ ticket.description }}
                            </p>
                          </div>

                          <p
                            style="
                              font-size: 12px;
                              margin-bottom: 0;
                              font-weight: 20;
                              max-width: 50ch;
                              text-decoration: line-through;
                              margin-right: -15px;
                              margin-left: 20px;
                            "
                          >
                            {{ ticket.old_price }} RON
                          </p>
                          <p
                            style="
                              font-size: 14px;
                              margin-bottom: 0;
                              font-weight: 20;
                              max-width: 50ch;
                            "
                          >
                            {{ ticket.new_price }} RON
                          </p>

                          <div style="display: flex; align-items: center">
                            <q-btn
                              icon="remove"
                              round
                              @click="decreaseQuantity('camping', index)"
                            />
                            <q-input
                              v-model="campingQuantities[index]"
                              type="number"
                              :input-style="{ textAlign: 'center' }"
                              style="width: 50px; margin: 0 10px"
                              hide-underline
                              :dense="true"
                              readonly
                            />
                            <q-btn
                              icon="add"
                              round
                              @click="increaseQuantity('camping', index)"
                            />
                          </div>
                        </div>
                        <q-separator></q-separator>
                      </div>
                    </q-card-section>
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-separator></q-separator>

              <q-expansion-item
                dense
                dense-toggle
                expand-separator
                label="Upgrades"
                caption="Dacă ai deja un bilet cumpărat, poți face upgrade la VIP sau ULTRA VIP,
                plătind diferența! La intrarea în festival, participantul trebuie să prezinte atât
                biletul inițial, cât și upgrade-ul."
                :model-value="expandedItems.upgrades"
                @update:model-value="updateExpanded('upgrades', $event)"
              >
                <q-card>
                  <q-card-section>
                    <q-separator style="height: 2px"></q-separator>
                    <q-card-section>
                      <div
                        v-for="(ticket, index) in upgrades"
                        :key="ticket.name"
                      >
                        <div
                          style="
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                          "
                        >
                          <div style="max-width: 70%">
                            <p
                              style="
                                font-size: 16px;
                                margin-bottom: 0;
                                max-width: 30ch;
                              "
                            >
                              {{ ticket.name }}
                            </p>
                          </div>

                          <p
                            style="
                              font-size: 12px;
                              margin-bottom: 0;
                              font-weight: 20;
                              max-width: 50ch;
                              text-decoration: line-through;
                              margin-right: -15px;
                              margin-left: 20px;
                            "
                          >
                            {{ ticket.old_price }} RON
                          </p>
                          <p
                            style="
                              font-size: 14px;
                              margin-bottom: 0;
                              font-weight: 20;
                              max-width: 50ch;
                            "
                          >
                            {{ ticket.new_price }} RON
                          </p>

                          <div style="display: flex; align-items: center">
                            <q-btn
                              icon="remove"
                              round
                              @click="decreaseQuantity('upgrades', index)"
                            />
                            <q-input
                              v-model="upgradeQuantities[index]"
                              type="number"
                              :input-style="{ textAlign: 'center' }"
                              style="width: 50px; margin: 0 10px"
                              hide-underline
                              :dense="true"
                              readonly
                            />
                            <q-btn
                              icon="add"
                              round
                              @click="increaseQuantity('upgrades', index)"
                            />
                          </div>
                        </div>
                        <q-separator></q-separator>
                      </div>
                    </q-card-section>
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-card-section>

            <div class="q-pa-md row justify-end">
              <q-btn
                :disable="!isAnyTicketGreaterThanOne"
                push
                color="primary"
                label="Cumpără bilete"
                @click="showForm = true"
              />
            </div>
          </q-card>
        </div>
      </div>
    </div>

    <div v-if="showForm" class="q-pa-md">
      <q-card style="width: 700px">
        <q-card-section>
          <div class="text-h6">Completează datele tale</div>
          <q-separator style="height: 2px"></q-separator>
          <q-card-section>
            <q-input outlined v-model="formData.name" label="Nume" />
            <q-input outlined v-model="formData.email" label="Email" />
            <q-input outlined v-model="formData.phone" label="Telefon" />
            <q-input outlined v-model="formData.address" label="Adresă" />
          </q-card-section>
        </q-card-section>

        <div class="q-pa-md row justify-end">
          <q-btn
            push
            color="primary"
            label="Trimite"
            @click="showForm = false"
          />
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { getAsset } from 'src/lib/assets';
import { ref, computed, onMounted } from 'vue';
import useTickets from '../hooks/useTickets';

const {
  generalAccessPasses,
  vipPasses,
  ultraVipPasses,
  campingPasses,
  upgrades,
} = useTickets();

const expandedItems = ref({
  general: false,
  vip: false,
  ultraVip: false,
  camping: false,
  upgrades: false,
});

const formData = ref({
  name: '',
  email: '',
  phone: '',
  address: '',
});

const generalQuantities = ref<number[]>([0, 0, 0, 0, 0, 0]);
const vipQuantities = ref<number[]>([0, 0, 0, 0, 0]);
const ultraVipQuantities = ref<number[]>([0, 0, 0, 0, 0]);
const campingQuantities = ref<number[]>([0, 0]);
const upgradeQuantities = ref<number[]>([0, 0, 0]);

type ExpandedItemsKey = keyof typeof expandedItems.value;

const updateExpanded = (item: ExpandedItemsKey, value: boolean) => {
  Object.keys(expandedItems.value).forEach((key) => {
    expandedItems.value[key as ExpandedItemsKey] = false;
  });
  expandedItems.value[item] = value;
};

const increaseQuantity = (type: string, index: number) => {
  switch (type) {
    case 'general':
      generalQuantities.value[index]++;
      break;
    case 'vip':
      vipQuantities.value[index]++;
      break;
    case 'ultraVip':
      ultraVipQuantities.value[index]++;
      break;
    case 'camping':
      campingQuantities.value[index]++;
      break;
    case 'upgrades':
      upgradeQuantities.value[index]++;
      break;
  }
};

const decreaseQuantity = (type: string, index: number) => {
  switch (type) {
    case 'general':
      if (generalQuantities.value[index] > 0) generalQuantities.value[index]--;
      break;
    case 'vip':
      if (vipQuantities.value[index] > 0) vipQuantities.value[index]--;
      break;
    case 'ultraVip':
      if (ultraVipQuantities.value[index] > 0)
        ultraVipQuantities.value[index]--;
      break;
    case 'camping':
      if (campingQuantities.value[index] > 0) campingQuantities.value[index]--;
      break;
    case 'upgrades':
      if (upgradeQuantities.value[index] > 0) upgradeQuantities.value[index]--;
      break;
  }
};

const isAnyTicketGreaterThanOne = computed(() => {
  return [
    ...generalQuantities.value,
    ...vipQuantities.value,
    ...ultraVipQuantities.value,
    ...campingQuantities.value,
    ...upgradeQuantities.value,
  ].some((quantity) => quantity > 0);
});

const showForm = ref(false);

onMounted(() => {
  console.log(generalQuantities.value);
  console.log(vipQuantities.value);
  console.log(ultraVipQuantities.value);
  console.log(campingQuantities.value);
  console.log(upgradeQuantities.value);
  console.log(isAnyTicketGreaterThanOne);
});
</script>

<style scoped></style>
