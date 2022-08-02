import { Menu, MenuItem } from "@mui/material";

export default function PopUpMenu({
  menuOpen,
  handleMenuClose,
  handleSulley,
  handleMike,
  handleFuzzy,
}) {
  return (
    <Menu
      open={menuOpen !== null}
      onClose={handleMenuClose}
      anchorReference="anchorPosition"
      anchorPosition={
        menuOpen !== null
          ? { top: menuOpen.mouseY, left: menuOpen.mouseX }
          : undefined
      }
    >
      <MenuItem onClick={handleSulley}>Sulley</MenuItem>
      <MenuItem onClick={handleMike}>Mike</MenuItem>
      <MenuItem onClick={handleFuzzy}>Fuzzy</MenuItem>
    </Menu>
  );
}
