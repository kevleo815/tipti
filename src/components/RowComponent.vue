<template>
    <div class="row">
        <slot></slot>
    </div>
</template>
  
<script setup lang="ts"/>
  
<style>
.row {
    display: flex;
    flex-wrap: wrap;
    margin: -10px;
    /* Puedes ajustar el margen según tus necesidades */
}
</style>