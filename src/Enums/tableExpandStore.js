import { reactive } from "vue";

export const employeeStore = reactive({
  // khởi tạo các giá trị mặc định cho menu expand
  selectedEmployeeId: null,
  isOpenExpandedList: false,
  expandedListPos: {
    left: 0,
    top: 0,
  },
});
