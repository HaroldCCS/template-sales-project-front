import { ISalesLog } from '../interfaces/salesLog';
import { useAppDispatch, useAppSelector } from '../store';
import salesLogsAction from '../store/app/salesLogs/salesLogs.action';

function useSalesLogs() {
  const data = useAppSelector(state => state?.salesLogs.salesLogs);
  const dispatch = useAppDispatch();


  const addOne = async (data: ISalesLog) => {
    dispatch(salesLogsAction.addOne(data));
  }

  const editOne = async (data: ISalesLog) => {
    dispatch(salesLogsAction.editOne(data));
  }

  const dropOne = async (id: number) => {
    dispatch(salesLogsAction.dropOne(id));
  }

  return {
    addOne,
    editOne,
    dropOne,
    salesLogs: data
  };
}

export default useSalesLogs;