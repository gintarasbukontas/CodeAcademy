import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.grid}>
      <img
        src="https://www.kennedyspacecenter.com/-/media/DNC/KSCVC/Event-Images/Rocket-Launches/SpaceX/Falcon-Heavy/SpX_FH_LC39A_900x600.ashx?h=600&w=900&la=en&hash=3231259989E7D46D4918298A5FAC57FAD31EE17B"
        alt="launch"
      />
      <div>
        <h1>What is SpaceX?</h1>
        <p>
          Space Exploration Technologies Corporation, commonly referred to as
          SpaceX, is an American spacecraft manufacturer, launch service
          provider and satellite communications company headquartered in
          Hawthorne, California. The company was founded in 2002 by Elon Musk
          with the goal of reducing space transportation costs and ultimately
          developing a sustainable colony on Mars. The company currently
          produces and operates the Falcon 9 and Falcon Heavy rockets along with
          the Dragon, and Starship as a hybrid between a rocket and a
          spacecraft.
        </p>
      </div>
    </div>
  );
}
