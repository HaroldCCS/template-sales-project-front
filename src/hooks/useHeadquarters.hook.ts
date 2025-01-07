import { useAppDispatch, useAppSelector } from '../store';
import headquartersAction from '../store/app/settings/headquarters/headquarters.action';
import { IHeadquarter } from '../modules/settings/headquarter/headquarter.d';

function useHeadquarters() {
  const data = useAppSelector(state => state?.headquarters.headquarters);
  const dispatch = useAppDispatch();


  const addOne = async (headquarter: IHeadquarter) => {
    dispatch(headquartersAction.addOne(headquarter));
  }

  const editOne = async (headquarter: IHeadquarter) => {
    dispatch(headquartersAction.editOne(headquarter));
  }

  const dropOne = async (id: number) => {
    dispatch(headquartersAction.dropOne(id));
  }

  return {
    addOne,
    editOne,
    dropOne,
    headquarters: data
  };
}

export default useHeadquarters;