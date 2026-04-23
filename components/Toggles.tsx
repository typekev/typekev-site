import { MuteToggle } from "./toggles/MuteToggle";
import { ThemeToggle } from "./toggles/ThemeToggle";

export default function Toggles() {
  return (
    <menu className="fixed top-6 right-6 z-50 flex gap-3">
      <li>
        <MuteToggle />
      </li>
      <li>
        <ThemeToggle />
      </li>
    </menu>
  );
}
