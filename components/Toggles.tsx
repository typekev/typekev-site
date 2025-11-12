import { MuteToggle } from "./toggles/MuteToggle";
import { ThemeToggle } from "./toggles/ThemeToggle";

export default function Toggles() {
  return (
    <menu className="fixed right-6 top-6 flex gap-3 z-50">
      <li>
        <MuteToggle />
      </li>
      <li>
        <ThemeToggle />
      </li>
    </menu>
  );
}
