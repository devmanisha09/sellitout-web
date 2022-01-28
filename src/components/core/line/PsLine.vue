<template>
    <div class="border border-t-0 border-gray-500 dark:border-dark-200" />
</template>

<script lang='ts'>
export default {
    name : 'PsLine',
    props: {
        textColor : {
            type: String,               
            default: 'text-primary-500 dark:text-textdark-500',            
        }        
    }
}
</script>
