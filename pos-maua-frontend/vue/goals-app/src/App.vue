<script setup>
import { computed, ref, watch } from 'vue';
import Input from './components/Input.vue'
import Button from './components/Button.vue'

const goals = ref([])
const goalInput = ref('')

const pendingGoals = computed(() => goals.value.filter(goal => !goal.done))
const doneGoals = computed(() => goals.value.filter(goal => goal.done))

const progressLabel = computed(() => `${doneGoals.value.length}/${goals.value.length}`)

const showDoneGoals = ref(false)
const showDoneGoalsLabel = computed(() => showDoneGoals.value ? 'Ocultar' : 'Mostrar')

watch(doneGoals, (newDoneGoals, oldDoneGoals) => {
  if (newDoneGoals.length < oldDoneGoals.length || newDoneGoals.length === 0) {
    return
  }

  if (newDoneGoals.length == goals.value.length) {
    setTimeout(() => {
      alert('Parabéns, você completou todos os seus objetivos!')
    }, 100)
  }
})

function addGoal(event) {
  console.log(event)
  
  if (goalInput.value.trim() === '') {
    return
  }

  goals.value.push({
    id: Date.now(),
    title: goalInput.value.trim(),
    done: false
  })
  goalInput.value = ''
}

function deleteGoal(id) {
  goals.value = goals.value.filter(goal => goal.id != id) 
}
</script>

<template>
  <header class="goals-header">
    <h1>Meus Objetivos</h1>
  </header>
  <main class="goals-container">
    <form @submit.prevent class="goals-form">
      <!-- <input v-model="goalInput" @input="setGoalInput" type="text" placeholder="Digite um objetivo" @keyup.enter="addGoal"> -->
      <Input v-model="goalInput" type="text" placeholder="Digite um objetivo" @enter="addGoal"></Input>
      <!-- <Input :modelValue="goalInput" @update:modelValue="newValue => goalInput = newValue"/> -->
      <!-- <button @click="addGoal">Adicionar</button> -->
      <Button @click="addGoal" label="Adicionar"></Button>
    </form>
    <div class="goals-progress">
      <progress id="goals_progress" :value="doneGoals.length" :max="goals.length">70%</progress>
      <label for="goals_progress">{{ progressLabel }}</label>
    </div>
    <ul class="goals">
      <li class="goals-item" v-for="goal in pendingGoals" :key="goal.id">
        <input v-model="goal.done" type="checkbox">
        <span>{{ goal.title }}</span>
        <button @click="deleteGoal(goal.id)">&#128465</button>
      </li>
    </ul>
    <section class="done-goals">
      <a v-if="doneGoals.length > 0" @click="showDoneGoals = !showDoneGoals">
        {{showDoneGoalsLabel }} objetivos concluídos
      </a>
      <ul class="goals" v-show="showDoneGoals">
        <li class="goals-item goals-item-done" v-for="goal in doneGoals" :key="goal.id">
          <input v-model="goal.done" type="checkbox">
          <span>{{ goal.title }}</span>
          <button @click="deleteGoal(goal.id)">&#128465</button>
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
.goals-header {
  text-align: center;
  margin-bottom: 1rem;
}

.goals-header h1 {
  font-weight: 700;
  color: #42b883;
}

.goals-container {
  text-align: center;
}

.goals-form {
  margin-bottom: 1rem;
}

.goals-progress {
  display: flex;
  margin-bottom: 1rem;
}

.goals-progress progress {
  width: 100%;
  margin-right: 1rem;
  height: 2rem;
  accent-color: #213547;
}

.goals-empty {
  font-weight: 300;
  font-style: italic;
}

.goals {
  list-style: none;
  text-align: center;
}

.goals-item {
  display: flex;
  place-items: center;
  margin-bottom: 1rem;
  padding: .5rem 1.25rem;
  color: rgba(255, 255, 255, .87);
  background-color: #42b883;
  border-radius: 24px;
  transition: background-color 300ms ease-in-out;
}

.goals-item:hover,
.goals-item:active {
  background-color: #33a06f;
}

.goals-item input[type=checkbox] {
  width: 2rem;
  height: 2rem;
  accent-color: #636363;
}

.goals-item span {
  width: calc(100% - 4rem);
  padding-inline: 1rem;
  font-size: 1.25rem;
}

.goals-item button {
  width: 2rem;
  height: 2rem;
  padding: .25rem;
  font-size: 1.25rem;
  line-height: 1;
  border-radius: 4px;
  border: 0;
  color: #fff;
  background-color: #636363;
  transition: background-color 300ms ease-in-out;
}

.goals-item button:hover {
  background-color: #484848;
}

.goals-item-done {
  background-color: #213547;
}

.goals-item-done:hover,
.goals-item-done:active {
  background-color: #304b64;
}

.goals-item-done span {
  text-decoration: line-through;
}

.done-goals {
  text-align: right;
}

.done-goals a {
  font-weight: 300;
  font-style: italic;
  text-decoration: underline;
  transition: font-weight 100ms ease-in-out;
}

.done-goals a:hover {
  font-weight: 400;
}
</style>
