<template>
    <div>
        <H2>{{ title }}</H2>
        <nav>
            <router-link :to="{name: 'LinksHome'}">Home</router-link> |
            <router-link :to="{name: 'Short-links'}">Short-links</router-link> |
            <router-link :to="{name: 'Qr-code'}">Qr-code</router-link>
        </nav>
        <h2>COMING SOON !!</h2>
        
        <router-view />
    </div>
</template>



<script>
export default {
    data() {
    return {
      title: 'Short-links / Qr-code'
      
    };
    }
}
</script>
