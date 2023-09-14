import styles from "../styles/main.module.css";
import Header from "./header";

function Main() {
  const teamName = ["Monoj", "Narayan", "Bikalp"];
  const mapTeamName = teamName.map((teamName) => {
    return (
      <div Key={teamName} className={StyleSheet.names}>
        {teamName}
      </div>
    );
  });
  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.names}>{mapTeamName}</div>
      </div>
    </>
  );
}
export default Main;
