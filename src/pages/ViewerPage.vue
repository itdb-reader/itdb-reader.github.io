<template>
  <q-layout>
    <q-header elevated>
      <q-toolbar>
        <q-input
          v-model="searchQuery"
          placeholder="Search..."
          class="q-mx-md"
          clearable
          style="flex: 1;"
        />
      </q-toolbar>
    </q-header>

    <q-page class="viewer" padding>
      <div v-if="loading" class="text-center">
        <q-spinner color="primary" />
      </div>

      <div v-if="error" class="text-center text-negative">
        <p>{{ error }}</p>
      </div>

      <div v-if="!loading && !error">
        <q-card v-for="(question, index) in filteredQuestions" :key="index" class="my-2">
          <q-card-section>
            <q-expansion-item
              :label="question.name"
              expand-separator
              :default-opened="false"
            >
              <template #header>
                <div>
                  <strong>Question:</strong> {{ question.name }}<br />
                  <span v-html="truncateHtml(question.text)"></span>
                </div>
              </template>

              <template #default>
                <div>
                  <strong>Answers:</strong>
                  <ul>
                    <li 
                      v-for="(answer, idx) in question.answers" 
                      :key="idx" 
                      :style="{ color: isCorrect(question.correct, idx) ? 'green' : 'red' }"
                    >
                      {{ answer }}
                    </li>
                  </ul>
                </div>
              </template>
            </q-expansion-item>
          </q-card-section>
        </q-card>
      </div>
    </q-page>
  </q-layout>
</template>


<script lang="ts" setup>

import { ref, computed } from 'vue';

const loading = ref(true);
const error = ref<string | null>(null);
const searchQuery = ref('');
const cachedFile = localStorage.getItem('cachedFile');

interface Question {
  name: string;
  group: number;
  text: string;
  type: number;
  correct: number;
  answers: string[];
}

interface Group {
  id: number;
  name: string;
}

interface DatabaseInfo {
  keys: Map<string, string>;
  groups: Group[];
  questions: Question[];
}

const dbInfo = ref<DatabaseInfo>({
  keys: new Map<string, string>(),
  groups: [],
  questions: [],
});

const parseFile = (fileContent: string) => {
  const lines = fileContent.split('\n');
  let currentSection = '';
  let index = -1;

  for (let line of lines) {
    console.log(`line=${line}`)
    index++;
    line = line.trim();

    if (line === '[SESSION]') break;

    if (line.startsWith('[') && line.endsWith(']')) {
      currentSection = line.slice(1, -1);
      continue;
    }

    switch (currentSection) {
      case 'ITEST_VERSION':
      case 'ITEST_DB_VERSION':
      case 'DB_NAME':
      case 'DB_DATE':
        console.log(`${currentSection} -> ${line}`)
        dbInfo.value.keys.set(currentSection, line);
        break;

      case 'DB_F0':
      case 'DB_F1':
      case 'DB_F2':
      case 'DB_F3':
      case 'DB_F4':
      case 'DB_F5':
      case 'DB_F6':
      case 'DB_F7':
      case 'DB_F8':
      case 'DB_F9':
      case 'DB_F10':
      case 'DB_F11':
      case 'DB_F12':
      case 'DB_F13':
      case 'DB_F14':
      case 'DB_F15':
      case 'DB_F16':
      case 'DB_F17':
      case 'DB_F18':
      case 'DB_F19': {
        let id = parseInt(currentSection.substring(4), 10);
        dbInfo.value.groups.push({ id: id, name: line})
        break;
      }

      case 'Q_NAME':
        dbInfo.value.questions.push({ name: line, group: 0, text: '', type: 0, correct: 0, answers: [] });
        break;

      case 'Q_GRP':
        dbInfo.value.questions[dbInfo.value.questions.length - 1].group = parseInt(line);
        break;

      case 'Q_TEXT': {
        const html = line.replace(/(<style[\w\W]+style>)/g, '').replace(/(s*)style="[^"]*"/g, '');
        console.log(html)
        dbInfo.value.questions[dbInfo.value.questions.length - 1].text = html;
        break;
      }

      case 'Q_ANS': {
        dbInfo.value.questions[dbInfo.value.questions.length - 1].type = parseInt(lines[index]);
        dbInfo.value.questions[dbInfo.value.questions.length - 1].correct = parseInt(lines[index + 1]);
        
        const answersCount = parseInt(lines[index + 2]);
        for (var i = 0; i < answersCount; i++) {
          dbInfo.value.questions[dbInfo.value.questions.length - 1].answers.push(lines[index + 3 + i]);
        }

        currentSection = ''
        break;
      }
    }
  }

  loading.value = false;
};

const isCorrect = (correctBinary: number, index: number): boolean => {
  return ((correctBinary >> index) & 1) === 1;
};

const truncateHtml = (html: string, maxLines: number = 3): string => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;

  const lines = tempDiv.innerText.split('n');
  
  if (lines.length > maxLines) {
    return lines.slice(0, maxLines).join('n') + '...';
  }

  return html;
};

const filteredQuestions = computed(() => {
  const searchTerm = searchQuery.value.toLowerCase();

  return dbInfo.value.questions.filter(question => {
    const nameMatch = question.name.toLowerCase().includes(searchTerm);
    const textMatch = question.text.toLowerCase().includes(searchTerm);

    return nameMatch || textMatch;
  });
});

if (cachedFile) {
  try {
    parseFile(cachedFile);
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : String(e);
    error.value = errorMessage;
    loading.value = false;
  }
}

</script>

<style scoped>
.viewer {
  max-width: 800px;
  margin: auto;
}

.q-card-section {
  max-height: 200px;
  overflow: hidden;
}

.q-header {
  z-index: 10;
}

.q-header {
  z-index: 10;
}

.q-page {
  padding-top: 64px;
}
</style>
