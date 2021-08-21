<template>
  <form
    action="/upload"
    class="dropzone needsclick dz-clickable"
    id="demo-upload"
  >
    <div class="dz-message needsclick">
      Drop files here or click to upload.<br />
      <span class="note needsclick"
        >(This is just a demo dropzone. Selected files are
        <strong>not</strong> actually uploaded.)</span
      >
    </div>
  </form>
</template>

<script>

export default {
  name: "Dropbox",
  create(){
      
  },
};
</script>

<style>
@import url(../assets/css/dropzone.min.css);
@import url(../assets/css/basic.min.css);
.dropzone {
  border: 2px dashed #0087f7;
  border-radius: 5px;
  background: white;
}
</style>