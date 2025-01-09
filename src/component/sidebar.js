import { sidebarItems } from "helpers/staticData";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {sidebarItems.map(({ title, icon }) => {
        const Icon = icon;
        return (
          <p className="icon__wrapper">
            <span>{title}</span>
            <Icon />
          </p>
        );
      })}
    </div>
  );
};

export default Sidebar;
