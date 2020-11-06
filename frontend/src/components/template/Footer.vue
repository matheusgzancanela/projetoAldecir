<template>
    <footer class="footer">
        <span>© Copyright <strong>Matheus</strong> </span>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style>
    .footer {
        grid-area: footer;
        background: linear-gradient(to right, #d30b36, #1d1e1f);
        color: white;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 10px;
    }
</style>
