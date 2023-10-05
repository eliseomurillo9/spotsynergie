import { ref } from 'vue';

const actualDate = ref(new Date());
export const dateFormat = ref(
  `${actualDate.value.getFullYear()}-${
    actualDate.value.getMonth() + 1
  }-${actualDate.value.getDate().toLocaleString("en-US", {
    minimumIntegerDigits: 2,
  })}`
);
