
interface StorageItemsProps {
  label: string;
  quantity: string;
}

export const StorageItem = (props: StorageItemsProps) => {
  const { label, quantity } = props;


  return (
    <div className='storage-item'>
      <input type='checkbox'aria-labelledby="checkbox-label"/>
      <label id='checkbox-label'>{label}</label>
      <p>{quantity}</p>
      <p>Used by:</p>
      <button>Edit</button>

    </div>
  );
};
