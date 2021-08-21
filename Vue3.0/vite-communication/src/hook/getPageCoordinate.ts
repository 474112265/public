import { reactive, ref, onMounted, onUnmounted } from "vue";
export default function getClickPositon() {
    let x = ref(0);
    let y = ref(1);

    function getPosition(e: MouseEvent) {
        x.value = e.pageX;
        y.value = e.pageY;
    }
    onMounted(() => {
        document.addEventListener("mousemove", getPosition);
    })

    onUnmounted(() => {
        document.removeEventListener("click", getPosition);
    })

    return {
        x,
        y,
    };
}