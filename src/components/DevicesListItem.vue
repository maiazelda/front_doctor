<template>

    <tr>
        <td>{{device.id}}</td>
        <td>{{device.name}}</td>
        <td>{{device.patient}}</td>
    </tr>

</template>

<script>

export default {
    name: "DevicesListItem",
    props: {
        device: {
            type: Object,
            required: true
        }
    }

}
</script>