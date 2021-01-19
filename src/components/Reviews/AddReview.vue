<template>
  <div class="reviewCard">
    <div class="reviewHeader">Добавление отзыва</div>
    <div class="stepPart" v-if="step == 1">
      <div class="formPart">
        <div class="partHeader">
          <img class="icon" src="../../assets/icons/review/fishing.svg" /> Здесь
          клюёт?
        </div>
        <div class="inputs radiobuttons">
          <div
            class="radioBlock"
            :class="{ 'radioBlock selected': review.isBaiting == 1 }"
          >
            <input
              type="radio"
              id="yes"
              value="1"
              v-model="review.isBaiting"
              v-show="false"
            />
            <label for="yes">Да 👍</label>
          </div>
          <div
            class="radioBlock"
            :class="{ 'radioBlock selected': review.isBaiting == 0 }"
          >
            <input
              type="radio"
              id="no"
              value="0"
              v-model="review.isBaiting"
              v-show="false"
            />
            <label for="no">Нет 🙁</label>
          </div>
          <!-- isBaiting: {{ review.isBaiting }} -->
        </div>
      </div>
      <div class="formPart">
        <div class="partHeader">
          Добавьте информацию об улове
          <i
            class="fas fa-question-circle"
            @mouseover="help"
            @mouseleave="help"
          ></i>
        </div>
        <p class="description" v-show="showTip">
          Сначала выберите метод ловли и используемую наживку, а затем рыбу,
          пойманную на эту комбинацию. Если вы использовали несколько наживок
          и/или ловили рыбу разными способами, можно добавить несколько
          комбинаций. Даже если Вы ничего не поймали, предусмотрен и такой
          вариант!
        </p>
        <table class="factsTable">
          <tr>
            <th>
              <img class="icon" src="../../assets/icons/review/rod.svg" />
            </th>
            <th>
              <img class="icon" src="../../assets/icons/review/bait.svg" />
            </th>
            <th>
              <img class="icon" src="../../assets/icons/review/bucket.svg" />
            </th>
            <th></th>
          </tr>
          <tr v-for="(fact, index) in facts" :key="index">
            <td>
              <Multiselect
                class="multiselect methods"
                v-model="fact.method"
                :options="allMethods"
                :multiple="false"
                :close-on-select="true"
                :clear-on-select="false"
                :preserve-search="true"
                placeholder="Выберите способ"
                label="name"
                track-by="id"
                :preselect-first="false"
              />
            </td>
            <td>
              <Multiselect
                class="multiselect baits"
                v-model="fact.baits"
                :options="allBaits"
                :multiple="false"
                :close-on-select="true"
                :clear-on-select="false"
                :preserve-search="true"
                placeholder="Выберите приманку"
                label="name"
                track-by="id"
                :preselect-first="false"
              />
            </td>
            <td>
              <Multiselect
                class="multiselect fishes"
                v-model="fact.fishes"
                :options="allFishes"
                :multiple="true"
                :close-on-select="false"
                :clear-on-select="false"
                :preserve-search="true"
                placeholder="Выберите рыбу или начните вводить название"
                label="name"
                track-by="id"
                :preselect-first="false"
                :taggable="false"
                @tag="addTag"
              />
            </td>
            <td>
              <button
                class="iconButton delete"
                v-show="facts.length > 1"
                @click="deleteFact(index)"
              >
                <i class="fas fa-times"></i>
              </button>
            </td>
          </tr>
        </table>

        <button class="iconButton add" @click="addFact">
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
    <div class="stepPart" v-if="step == 2">Шаг 2</div>
    <div class="stepPart" v-if="step == 3">Шаг 3</div>
    <div class="progressContainer"></div>
    <div class="reviewButtons">
      <div class="stepButtons stepOne" v-if="step == 1">
        <button class="navButton" @click="next()">Далее</button>
      </div>
      <div class="stepButtons" v-if="step == 2">
        <button class="navButton" @click="back()">Назад</button>
        <button class="navButton" @click="next()">Далее</button>
      </div>
      <div class="stepButtons" v-if="step == 3">
        <button class="navButton" @click="back()">Назад</button>
        <button>Опубликовать</button>
      </div>
      <button class="cancel">Отмена</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";

import Multiselect from "vue-multiselect";

export default {
  components: { Multiselect },
  data() {
    return {
      step: 1,
      showTip: false,
      review: {
        isBaiting: null,
      },
      facts: [
        {
          method: "",
          bait: "",
          fishes: [],
        },
      ],
      // fact: {
      //     method: "",
      //     bait: "",
      //     fishes: []
      // },
    };
  },
  computed: mapGetters(["allFishes", "allBaits", "allMethods"]),
  methods: {
    ...mapActions([
      "fetchFishesNoPagination",
      "fetchBaitsNoPagination",
      "fetchMethodsNoPagination",
    ]),
    ...mapMutations(["changeFormView"]),
    next() {
      const data = {
        facts: this.facts,
      };
      console.log(data);
      if (this.step < 3) this.step++;
    },
    back() {
      if (this.step > 1) this.step--;
    },
    help() {
      this.showTip = !this.showTip;
    },
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.options.push(tag);
      this.value.push(tag);
    },
    addFact() {
      const fact = {
        method: "",
        bait: "",
        fishes: [],
      };
      this.facts.push(fact);
      alert(JSON.stringify(this.facts));
    },
    deleteFact(index) {
      this.facts.splice(index, 1);
    },
  },
  created() {
    this.fetchFishesNoPagination();
    this.fetchBaitsNoPagination();
    this.fetchMethodsNoPagination();
  },
  mounted() {},
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped>
.reviewCard {
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 0 60px rgba(14, 42, 71, 0.25);
  /* box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px; */
  /* border-radius: 3px;  */
  --color-violet: rgb(91, 21, 148);
  --color-yellow: rgb(255, 230, 0);
}

.stepPart {
  /* border: 1px solid rgb(245, 245, 245); */
  padding: 5px;
}

.reviewHeader {
  color: #000;
  font-size: 36px;
}

.formPart {
  /* border: 1px solid rgb(245, 245, 245); */
  padding: 5px;
  margin-bottom: 20px;
}

.partHeader {
  color: var(--color-violet);
  font-size: 24px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.radiobuttons {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.radioBlock {
  /* border: 1px solid #000; */

  width: 80px;
  height: 40px;
  /* box-shadow: 0px 2px #000; */
  box-shadow: 0 0 5px rgba(14, 42, 71, 0.25);
  /* box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px; */
  border-radius: 3px;
}

.radioBlock label {
  /* display:inline-block; */
  width: 100%;
  height: 100%;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.radioBlock label:hover {
  cursor: pointer;
}

.radioBlock:hover {
  background-color: var(--color-violet);
  color: #fff;
}

.selected {
  /* border: 1px solid var(--color-violet); */
  background-color: var(--color-violet);
  color: #fff;
}

.description {
  width: 400px;
  text-align: justify;
  font-size: 16px;

  background-color: #fff;
  border-radius: 3px;
  padding: 10px;
  box-shadow: 0 0 40px rgba(14, 42, 71, 0.25);
  /* box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px; */

  position: absolute;
  right: 200px;
  top: 450px;
  /* margin: auto; */
  /* margin-top: 50px; */
  z-index: 2;
}

.icon {
  height: 40px;
  width: 40px;
  margin-right: 10px;
}

.fa-question-circle {
  margin-left: 5px;
  font-size: 18px;
}

.fa-question-circle:hover {
  cursor: pointer;
}
.fishes {
  width: 500px;
}

.baits,
.methods {
  width: 250px;
}
</style>

<style>
.multiselect__tag {
  position: relative;
  display: inline-block;
  padding: 4px 26px 4px 10px;
  border-radius: 5px;
  margin-right: 10px;
  color: #fff;
  line-height: 1;
  background: var(--color-violet);
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  text-overflow: ellipsis;
  font-size: 16px;
}

.multiselect__tag-icon:after {
  content: "\D7";
  color: var(--color-yellow);
  font-size: 16px;
}

.multiselect__tag-icon:focus,
.multiselect__tag-icon:hover {
  background: var(--color-violet);
}

.multiselect__tag-icon:focus:after,
.multiselect__tag-icon:hover:after {
  color: var(--color-violet);
}

.multiselect__option--highlight {
  background: var(--color-violet);
  outline: none;
  color: #fff;
}

.multiselect__option--highlight:after {
  content: attr(data-select);
  background: var(--color-violet);
  color: rgb(150, 0, 0);
  display: none;
}

.multiselect__option--selected:after {
  content: attr(data-selected);
  color: var(--color-yellow);
  display: none;
}

.multiselect__option--selected {
  background: var(--color-violet);
  color: var(--color-yellow);
  font-weight: 700;
}

.delete {
  font-size: 16px;
  color: rgb(94, 94, 94);
  margin-left: 5px;
  border: none;
  background-color: transparent;
}

.add {
  color: rgb(94, 94, 94);
  font-size: 16px;
  margin-top: 15px;
  border: none;
  background-color: transparent;
}

.delete:hover,
.add:hover {
  cursor: pointer;
  color: var(--color-violet);
}

.stepOne {
    
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
   
}
button {
      border: none;
        background-color: transparent;
         
    font-size: 20px;
}

button:hover {
    cursor: pointer;
}

.navButton {
    color: var(--color-violet);
}

</style>
