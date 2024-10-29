<template>
  <q-page class="upload" @dragover.prevent @drop.prevent="handleDrop">
    <div class="top-space"></div>
    <q-card class="drop-zone" @drop="handleDrop" @dragover.prevent @click="triggerFileInput">
      <q-card-section>
        <p >Drag and drop your ITDB file here, or click to select a file.</p>
        
        <q-file 
          v-model="fileInput" 
          v-on:update:model-value="processFile"
          style="display: none;" 
          accept=".itdb" 
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>


<script lang="ts" setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const fileInput = ref<File | null>(null);

const handleDrop = (event: DragEvent) => {
  const files = event.dataTransfer?.files;

  if (files && files.length > 0) {
    processFile(files[0]);
  }
};

const processFile = (file: File) => {
  if (file.type === 'application/octet-stream' || file.name.endsWith('.itdb')) {
    localStorage.setItem('currentFileName', file.name);

    const reader = new FileReader();

    reader.onload = () => {
      const fileContent = reader.result as string;
      localStorage.setItem('cachedFile', fileContent);
      localStorage.setItem('fileTimestamp', Date.now().toString());
    };
    reader.readAsText(file);
    
    router.push('/viewer');
  } else {
    alert('Please upload a valid .itdb file.');
  }
};

const triggerFileInput = () => {
  const input = document.querySelector('input[type=file]') as HTMLInputElement;

  if (input) {
    input.click();
  }
};
</script>

<style scoped>
.upload {
  max-width: 600px;
  margin: auto;
}

.top-space {
  height: 20px; /* Adjust the height as needed for spacing */
}

.drop-zone {
  border: 2px dashed #007bff;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
}

.drop-zone:hover {
  background-color: #f0f8ff;
}
</style>
