import React from 'react'

export const DeleteLastCategory = ( { onDeleteCategory } ) => {

    const deleteCategory  = () => {
        onDeleteCategory();
    };

  return (
    <button onClick={ deleteCategory }>
        Borrar categoría
    </button>
  )
}
