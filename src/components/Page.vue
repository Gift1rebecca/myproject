<template>
    <div>
        PAGE
    </div>
</template>


<script>
    export default {
        destroyed(){
            console.log('destroyed')
        },
        activated(){
            console.log('activated')
        },
        deactivated(){
            console.log('de-activated')
        }
    }