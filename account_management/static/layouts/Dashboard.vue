<template>
    <div class="dashboard-content">
            <info></info>
            <social-networks></social-networks>
            <traffic-chart></traffic-chart>

    </div>
</template>

<script>
    import Info from '../dashboard/Info.vue';
    import Traffic from '../dashboard/Traffic.vue';
    import Socials from '../dashboard/Socials.vue';

    export default {
        components: {
                Info,
                SocialNetworks: Socials,
                TrafficChart: Traffic
        }
    }
</script>

<style>
</style>