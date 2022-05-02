import { createContext, useState, useCallback } from "react";

/* Context Type */
type ThemeContext = {
  modalVisible: boolean;
  setIsModalVisible: (isModalVisible: boolean) => void;
};

/* Default(init) */
const defaultContext: ThemeContext = {
  modalVisible: false,
  setIsModalVisible: () => {},
};

/* Context Object */
export const modalVisibleContext = createContext(defaultContext);

/* Custom Hook */
export const useModalVisible = (): ThemeContext => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const setIsModalVisible = useCallback((current: boolean): void => {
    setModalVisible(current);
  }, []);

  return {
    modalVisible,
    setIsModalVisible,
  };
};
