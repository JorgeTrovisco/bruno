import React from 'react';
import { IconFolders } from '@tabler/icons';
import EnvironmentSelector from 'components/EnvironmentSelector';
import StyledWrapper from './StyledWrapper';

const CollectionToolBar = ({collection}) => {
  return (
    <StyledWrapper>
      <div className="flex items-center p-2">
        <div className="flex flex-1 items-center">
          <IconFolders size={18} strokeWidth={1.5}/>
          <span className="ml-2 mr-4 font-semibold">{collection.name}</span>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <EnvironmentSelector />
        </div>
      </div>
    </StyledWrapper>
  )
};

export default CollectionToolBar;