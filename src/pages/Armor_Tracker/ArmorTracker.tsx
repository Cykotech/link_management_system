import { ArmorCard } from "../../components/Armor_Card/ArmorCard";
import { ArmorModal } from "../../components/Modals/Armor_Modals/armorModal";

import { useArmorsStore } from "../../store/armorStore";

import classes from "./ArmorTracker.module.scss";

type Props = {
  obtainDisplay: boolean;
  upgradeDisplay: boolean;
  showModal: string;
  modalClick: React.Dispatch<React.SetStateAction<string>>;
};

export function ArmorTracker({ obtainDisplay, upgradeDisplay, showModal, modalClick }: Props) {
  const { armors } = useArmorsStore((state) => state);

  return (
    <div className={classes.container}>
      <div className={classes.grid}>
        {armors.map((armor, index) => {
          return (
            <ArmorCard
              key={`${armor.name}-${index}`}
              id={`${armor.name}-${index}`}
              armor={armor}
              obtainDisplay={obtainDisplay}
              upgradeDisplay={upgradeDisplay}>
              {armor.name}
            </ArmorCard>
          );
        })}
      </div>
      <ArmorModal showModal={showModal} handleClose={modalClick}></ArmorModal>
    </div>
  );
}
