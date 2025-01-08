import { IPaymentMethod } from '../interfaces/paymentMethods';
import { useAppDispatch, useAppSelector } from '../store';
import paymentMethodsAction from '../store/app/settings/paymentMehtods/paymentMethods.action';

function usePaymentMethods() {
  const data = useAppSelector(state => state?.paymentMethods.paymentMethods);
  const dispatch = useAppDispatch();

  const addOne = async (data: IPaymentMethod) => {
    dispatch(paymentMethodsAction.addOne(data));
  }

  const editOne = async (data: IPaymentMethod) => {
    dispatch(paymentMethodsAction.editOne(data));
  }

  const dropOne = async (id: number) => {
    dispatch(paymentMethodsAction.dropOne(id));
  }

  return {
    addOne,
    editOne,
    dropOne,
    paymentMethods: data
  };
}

export default usePaymentMethods;