<template>
    <div class="reviewCard">
        <div class="reviewHeader">Добавление отзыва</div>
        <div class="stepPart" v-if="step == 1">
            <div class="formPart">
                <div class="partHeader"><img class="icon" src="../../assets/icons/review/fishing.svg"> Здесь клюёт?</div>
                <div class="inputs radiobuttons">
                    <div class="radioBlock" :class="{ 'radioBlock selected' : review.isBaiting == 1}">
                        <input type="radio" id="yes" value="1" v-model="review.isBaiting" v-show="false">
                        <label for="yes">Да 👍</label>
                    </div>
                    <div class="radioBlock" :class="{ 'radioBlock selected' : review.isBaiting == 0}">
                        <input type="radio" id="no" value="0" v-model="review.isBaiting" v-show="false">
                        <label for="no">Нет 🙁</label>
                    </div>
                    <!-- isBaiting: {{ review.isBaiting }} -->
                </div>    
            </div>
            <div class="formPart">
                <div class="partHeader"> Добавьте информацию об улове <i class="fas fa-question-circle" @mouseover="help" @mouseleave="help"></i> </div>
                <p class="description" v-show="showTip" > Сначала выберите метод ловли и используемую наживку, а затем рыбу, пойманную на эту комбинацию. Если вы использовали несколько наживок
                    и/или ловили рыбу разными способами, можно добавить несколько комбинаций. Даже если Вы ничего не поймали, предусмотрен и такой вариант!
                </p>
                <table class="factsTable">
                    <tr>
                        <th>
                            <img class="icon" src="../../assets/icons/review/rod.svg">
                        </th>
                        <th>
                            <img class="icon" src="../../assets/icons/review/bait.svg">
                        </th>
                        <th>
                            <img class="icon" src="../../assets/icons/review/bucket.svg">
                        </th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>
                            <select name="method" v-model="fact.method">
                                <option v-for="method in allMethods" :key="method.id" :value="method.id">{{ method.name }}</option>
                            </select>
                        </td>
                        <td>
                            <select name="bait" v-model="fact.bait">
                                <option v-for="bait in allBaits" :key="bait.id" :value="bait.id">{{ bait.name }}</option>
                            </select>
                        </td>
                        <td>
                            <Multiselect class="multiselect"
                                v-model="fact.fishes" 
                                :options="options" 
                                :multiple="true"
                                :close-on-select="false" 
                                :clear-on-select="false" 
                                :hide-selected="true" 
                                :preserve-search="true"
                                placeholder="Выберите рыбу"
                            />
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="stepPart"  v-if="step == 2">
            Шаг 2
        </div>
        <div class="stepPart" v-if="step == 3">
            Шаг 3
        </div>
        <div class="progressContainer">

        </div>
        <div class="reviewButtons">
            <div class="stepButtons" v-if="step == 1">
                <button @click="next()">Далее</button>
            </div>
            <div class="stepButtons" v-if="step == 2">
                <button @click="back()">Назад</button>
                <button @click="next()">Далее</button>
            </div>
            <div class="stepButtons" v-if="step == 3">
                <button @click="back()">Назад</button>
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

import Multiselect from 'vue-multiselect'

export default {
    components: { Multiselect },
    data() {
        return {
            step: 1,
            showTip: false,
            review: {
                isBaiting: null
            },
            facts: [],
            fact: {
                method: "",
                bait: "",
                fishes: []
            },
            options: ['Карась', 'Щука', 'Налим']
        }
    },
    computed: mapGetters(['allFishes', 'allBaits', 'allMethods']),
    methods: {
        ...mapActions(['fetchFishesNoPagination', 'fetchBaitsNoPagination', 'fetchMethodsNoPagination']),
        ...mapMutations(['changeFormView']),
        next() {
            if (this.step < 3) this.step++
        },
        back() {
            if (this.step > 1) this.step--
        },
        help() {
            this.showTip = !this.showTip
        }
    },
    created() {
        this.fetchFishesNoPagination()
        this.fetchBaitsNoPagination()
        this.fetchMethodsNoPagination()
    }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style> 

<style scoped>
    .reviewCard {
        background-color: #fff;
        border-radius: 5px;
        padding: 10px;
        box-shadow: 0 0 60px rgba(14,42,71,.25);
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

    .radioBlock  {
        /* border: 1px solid #000; */
        
        width: 80px;
        height: 40px;
        /* box-shadow: 0px 2px #000; */
        box-shadow: 0 0 5px rgba(14,42,71,.25);
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
        color: #fff
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
        box-shadow: 0 0 40px rgba(14,42,71,.25);
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
    .multiselect {
        width: 200px;
    }
</style>