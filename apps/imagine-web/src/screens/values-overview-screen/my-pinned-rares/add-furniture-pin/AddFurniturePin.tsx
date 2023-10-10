import { toast } from 'react-toastify';
import React, { useState } from 'react';
import { AddFurniturePinProps } from './AddFurniturePin.types';
import { useUserPinnedFurnitureCreate } from '@imagine-cms/client';
import { ButtonNoBorder } from '../../../../components/button/Button.remix';
import { FurnitureIconLazy } from '../../../../components/furniture-icon/FurnitureIconLazy';
import { FurnitureSelector } from '../../../../components/furniture-selector/FurnitureSelector';
import { FurnitureValueGridContainerElement } from '../../../../components/furniture-value-grid-container/FurnitureValueGridContainer.styled';

export function AddFurniturePin({ onPinAdded }: AddFurniturePinProps) {
  const [isAddingPin, setIsAddingPin] = useState(false);
  const [furnitureID, setFurnitureID] = useState<number>();
  const createPinnedFurni = useUserPinnedFurnitureCreate();

  const isValidPin = !!furnitureID;

  const onToggleIsAddingPin = () => {
    setIsAddingPin(_ => !_);
  }

  const onSavePin = async () => {
    try {
      if (!isValidPin) {
        return;
      }
      await createPinnedFurni.execute({ furnitureID });
      setIsAddingPin(false);
      setFurnitureID(undefined);
      await toast.success(`Successfully pinned furni ${furnitureID}`);
      onPinAdded();
    } catch (e: any) {
      toast.error(`Failed to pin furni #${furnitureID}`);
    }
  }

  return (
    <FurnitureValueGridContainerElement>

      <div style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
        {
          isAddingPin && (
            <>
              {
                furnitureID && (
                  <FurnitureIconLazy furnitureID={furnitureID} />
                )
              }
              <FurnitureSelector furnitureID={furnitureID} onChange={setFurnitureID} />
              <ButtonNoBorder style={{ width: '100%' }} disabled={!isValidPin} onClick={onSavePin}>
                <i className="fa fa-save" /> Save Pin
              </ButtonNoBorder>
            </>
          )
        }
        {
          !isAddingPin && (
            <ButtonNoBorder style={{ width: '100%' }} onClick={onToggleIsAddingPin} >
              <i className="fa fa-plus-circle" /> New Pin
            </ButtonNoBorder>
          )
        }
      </div>
    </FurnitureValueGridContainerElement>
  )
}