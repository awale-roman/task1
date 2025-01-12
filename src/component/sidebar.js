import { sidebarItems } from "helpers/staticData";

const Sidebar = ({ setLanguage }) => {
  return (
    <div className="sidebar">
      {sidebarItems.map(({ title, icon }) => {
        const Icon = icon;
        return (
          <p
            className="icon__wrapper"
            onClick={() => {
              setLanguage(title);
            }}
          >
            <span>{title}</span>
            <Icon />
          </p>
        );
      })}
    </div>
  );
};

export default Sidebar;
