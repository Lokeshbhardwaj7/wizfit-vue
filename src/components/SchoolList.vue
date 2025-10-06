<template>
    <div class="school-list-root">
        <div class="search-row">
            <input v-model="query" @input="onInput" placeholder="Search schools..." class="search-input" />
        </div>

        <div class="status-row" v-if="loading">Loading...</div>
        <div class="status-row error" v-if="error">
            <div>{{ error }}</div>
            <button class="btn" @click="loadSchools">Retry</button>
        </div>

        <div v-if="!loading && schools.length === 0 && !error" class="empty">
            No schools found for "{{ lastQuery }}"
        </div>

        <ul class="schools" v-if="schools.length">
            <li v-for="school in schools" :key="school.id" class="school-item">
                <div class="school-left">
                    <img v-if="school.logo" :src="school.logo" alt="School Logo" class="school-logo"
                        @error="(e) => e.target.style.display = 'none'" />
                    <div>
                        <div class="school-name">{{ school.name || school.school_name }}</div>
                        <div class="school-meta">{{ school.city || school.address }}</div>
                    </div>
                </div>
                <button class="btn small">Join Campaign</button>
            </li>
        </ul>

    </div>
</template>

<script>
import { ref } from 'vue'
import { fetchSchools } from '../services/api'

function debounce(fn, delay = 400) {
    let t
    return (...args) => {
        clearTimeout(t)
        t = setTimeout(() => fn(...args), delay)
    }
}

export default {
    setup() {
        const query = ref('')
        const lastQuery = ref('')
        const schools = ref([])
        const loading = ref(false)
        const error = ref('')

        async function loadSchools(q = '') {
            loading.value = true
            error.value = ''
            try {
                const result = await fetchSchools(q)
                schools.value = result
                lastQuery.value = q
            } catch (e) {
                error.value = e.message
            } finally {
                loading.value = false
            }
        }

        const debouncedLoad = debounce((v) => loadSchools(v), 350)
        function onInput() {
            debouncedLoad(query.value.trim())
        }

        loadSchools()
        return { query, schools, loading, error, onInput, lastQuery, loadSchools }
    }
}
</script>

<style scoped>
.search-row {
    text-align: center;
    margin: 1rem 0;
}

.search-input {
    width: 100%;
    max-width: 400px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 6px;
}

.schools {
    list-style: none;
    padding: 0;
}

.school-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    padding: 10px;
    margin: 8px 0;
    border-radius: 8px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
}

.school-name {
    font-weight: 600;
}

.school-meta {
    font-size: 12px;
    color: #555;
}

.btn {
    background: #e74c6b;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 6px 10px;
    cursor: pointer;
}

.btn.small {
    font-size: 12px;
    padding: 4px 8px;
}

.status-row {
    text-align: center;
    margin-top: 10px;
}

.error {
    color: red;
}

.empty {
    text-align: center;
    color: #777;
    margin-top: 10px;
}

.school-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.school-logo {
  width: 50px;
  height: 50px;
  border-radius: 6px;
  object-fit: cover;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  background: #f7f7f7;
}

</style>
