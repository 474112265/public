<template>
  <div class="home">
    <h3>this is the home page</h3>
    <Librarian msg="This is the home page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Librarian from '@/components/Librarian.vue';

export default {
  name: 'Home',
  components: {
    Librarian
  },
  
}
</script>
