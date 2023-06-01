import { shallowEqual } from 'react-redux';
import { useAppSelector } from '../../app/store/StoreTypes';

export default function UseGetProduct() {
  const product = useAppSelector((state) => state.product, shallowEqual);
  return product;
}