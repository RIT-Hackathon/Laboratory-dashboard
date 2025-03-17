import { useDispatch, useSelector } from 'react-redux';
import { getStaffList, createStaff, removeStaff } from '../staffSlice';

export const useStaff = () => {
  const dispatch = useDispatch();
  const { staffList, loading, error } = useSelector((state) => state.staff);

  const fetchStaff = () => dispatch(getStaffList());
  const addStaff = (staffData) => dispatch(createStaff(staffData));
  const deleteStaff = (id) => dispatch(removeStaff(id));

  return { staffList, loading, error, fetchStaff, addStaff, deleteStaff };
};
