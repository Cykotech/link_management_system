import classes from "./ArmorTracker.module.scss";

type Props = {
  upgradeDisplay: boolean;
  upgradeClick: React.Dispatch<React.SetStateAction<boolean>>;
  obtainDisplay: boolean;
  obtainClick: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: string;
  modalClick: React.Dispatch<React.SetStateAction<string>>;
};

export function ArmorTrackerHeader({
  upgradeDisplay,
  upgradeClick,
  obtainDisplay,
  obtainClick,
  showModal,
  modalClick,
}: Props) {
  return (
    <div className={classes.headingContainer}>
      <h2>Armor Tracker</h2>
      <div className={classes.buttonContainer}>
        <button
          className={classes.button}
          onClick={() => {
            showModal === "none" ? modalClick("armor") : modalClick("none");
          }}>
          How To Use
        </button>
        <div className={classes.dropdown}>
          <button className={classes.dropdownButton}>Options</button>
          <ul className={classes.dropdownContent}>
            <li>
              <button
                onClick={() => {
                  upgradeClick(!upgradeDisplay);
                }}>
                {!upgradeDisplay
                  ? "Show upgradeable armors"
                  : "Hide upgradeable armors"}
                <p>Toggles the display of armors that cannot be upgraded.</p>
              </button>
            </li>
            <li>
              <button onClick={() => obtainClick(!obtainDisplay)}>
                Toggle highlights for obtained armors
                <p>{`${
                  !obtainDisplay ? "Turns off highlights for " : "Hightlights"
                } armors that have been obtained`}</p>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
