<template>
    <div id="welcome">
        <h1> Welcome {{name}} sur Steam Market Notifier</h1>
        <h2> The best market place for cs:go items</h2>
    </div>
  
 
</template>

<script>
export default {
    name : 'Welcome',
    props : ['name']

}
</script>

<style>
h1{
    color: red;
    font-size: 3em;
}
#welcome{
    text-align: center;
}
</style>