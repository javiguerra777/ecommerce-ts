import { shallowEqual } from 'react-redux';
import { useAppSelector } from '../../app/store/StoreTypes';

export default function UseGetCart() {
  const cart = useAppSelector((state) => state.cart, shallowEqual);
  return cart;
}