<template>
    <div class="app-root">
        <header class="top-hero">
            <img src="/banner.png" alt="WizFit Banner" class="banner" />
        </header>

        <main class="container">
            <section class="intro">
                <div class="intro-header">
                    <h2>What is WizFit Challenge?</h2>
                    <button class="btn-video">Watch Video</button>
                </div>
            </section>


            <section class="card">
                <h3 class="card-title">Are you ready to take the challenge?</h3>
                <div class="download-row">
                    <img src="/goolge-store.png" alt="Get it on Google Play" class="store-btn" />
                </div>

                <school-list />
            </section>
        </main>

        <footer class="footer">
            Built for the WizFit Challenge API Integration Task
        </footer>
    </div>
</template>

<script>
import SchoolList from './components/SchoolList.vue'
export default {
    name: 'App',
    components: { SchoolList }
}
</script>

<style scoped>
.intro {
    margin: 2rem 0;
    text-align: center;
}

/* Flex container for heading + button in one line */
.intro-header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    /* keeps it responsive on small screens */
}

/* Heading style */
.intro-header h2 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #333;
    margin: 0;
}

/* Pink video button */
.btn-video {
    background-color: #e74c6b;
    color: #fff;
    border: none;
    border-radius: 30px;
    padding: 10px 20px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.25s ease;
    box-shadow: 0 2px 6px rgba(231, 76, 107, 0.3);
}

.btn-video:hover {
    background-color: #ff6b8b;
    transform: translateY(-2px);
}
</style>
