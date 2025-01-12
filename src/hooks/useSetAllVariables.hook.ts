import env from "../settings/env";
import { useAppDispatch } from "../store";

import mockSalesLogs from "../store/app/salesLogs/data.json";
import mockHeadquarters from "../store/app/settings/headquarters/data.json";
import mockPaymentMethods from "../store/app/settings/paymentMehtods/data.json";
import mockEmployees from "../store/app/settings/employees/data.json";
import salesLogsAction from "../store/app/salesLogs/salesLogs.action";
import headquartersAction from "../store/app/settings/headquarters/headquarters.action";
import paymentMethodsAction from "../store/app/settings/paymentMehtods/paymentMethods.action";
import employeesAction from "../store/app/settings/employees/employees.action";


const useSetAllVariables = () => {
  const dispatch = useAppDispatch();


  const setAllVariables = async () => {
    if (env.DATA_MOCK) {
      dispatch(salesLogsAction.setAll(mockSalesLogs));
      dispatch(headquartersAction.setAll(mockHeadquarters));
      dispatch(paymentMethodsAction.setAll(mockPaymentMethods));
      dispatch(employeesAction.setAll(mockEmployees));
    } else {
      alert('No se puede usar el mock en producción')
    }
  }

  return {
    setAllVariables
  }
}

export default useSetAllVariables;