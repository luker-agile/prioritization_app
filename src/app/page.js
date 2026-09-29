import styles from "./page.module.css";
import { PrimaryButton } from "app/components/ui/PrimaryButton";
import { Input } from "app/components/ui/Input";
import { UsersIcon } from "app/components/icons/UsersIcon";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <PrimaryButton>Click me</PrimaryButton>
        <Input placeholder="Enter your email" />
        <UsersIcon />
      </main>
    </div>
  );
}
