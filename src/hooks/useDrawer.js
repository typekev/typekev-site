import { useState } from 'react';

export default function useDrawer() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(!open);

  return [open, toggleDrawer];
}
