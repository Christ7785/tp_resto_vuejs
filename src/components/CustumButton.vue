<template>
    <button class="custumButton">
        <slot>Mon Bouton</slot>
    </button>
</template>

<style scoped>
.custumButton {
    background-color: #929292;
    color: white;
    padding: 12px;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    transition: all 0.3s ease;
    box-shadow: 0px 4px 6px rgba(0, 0, 0,0.1);
    cursor: pointer;
}

.custumButton:hover {
    background-color: #424b4c;
    transform: translateY(-2px);
}
</style> 