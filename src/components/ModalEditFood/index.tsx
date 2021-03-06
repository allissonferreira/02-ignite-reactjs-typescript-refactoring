import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

import FoodInterface from '../../interfaces/FoodInterface';

interface ModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  editingFood: FoodInterface | any;
  handleUpdateFood: (food:FoodInterface) => void;
}

function ModalEditFood(props:ModalEditFoodProps) {
  const { isOpen, setIsOpen, editingFood, handleUpdateFood } = props;

  const handleSubmit = async (data:FoodInterface) => {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" icon="" />

        <Input name="name" placeholder="Ex: Moda Italiana" icon="" />
        <Input name="price" placeholder="Ex: 19.90" icon="" />

        <Input name="description" placeholder="Descrição" icon="" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

export default ModalEditFood;
