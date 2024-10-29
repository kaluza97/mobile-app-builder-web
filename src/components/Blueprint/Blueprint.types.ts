export interface BlueprintInterface {
  droppedItems: {
    headerState: string;
    contentState: string;
    navigationState: string;
  };
  clearHeaderSection: () => void;
  clearContentSection: () => void;
  clearNavigationSection: () => void;
}