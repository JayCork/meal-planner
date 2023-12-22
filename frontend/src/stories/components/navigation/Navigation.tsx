import { Dashboard } from "@styled-icons/material/Dashboard";
import { ShoppingCart } from "@styled-icons/entypo/ShoppingCart";
import { UserCircle } from "@styled-icons/boxicons-solid/UserCircle";
import { FoodMenu } from "@styled-icons/boxicons-solid/FoodMenu";
import { Fridge } from "@styled-icons/remix-fill/Fridge";
import styled from "styled-components";

const NavItemStyled = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {  
    color: var(--M3-sys-dark-on-surface, #e6e0e9);
    text-align: center;

    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0.5px;
  }
`;

const IconContainer = styled.div<{ $selected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${(props) => (props.$selected ? "#4A4458" : "")};
  border-radius: 16px;

  display: flex;
  width: 64px;
  height: 32px;
  padding: 4px 20px;
  justify-content: center;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    color: white;
  }
`;

interface NavItemProps {
  href: string;
  icon: unknown;
  label: string;
  selected?: boolean;
}

const NavItem = (props: NavItemProps) => {
  const { href, icon, label, selected = false } = props;

  return (
    <NavItemStyled>
      <IconContainer $selected={selected}>{icon}</IconContainer>
      <a href={href}>{label}</a>
    </NavItemStyled>
  );
};

const StyledNav = styled.nav`
  display: flex;
  padding: 0px 8px;
  align-items: flex-start;
  gap: 8px;

  background: var(--M3-sys-dark-surface-container, #211f26);
`;

const OrderedListStyled = styled.ol`
  display: flex;
  padding: 12px 0px 16px 0px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;
`;

export const Navigation = (props) => {
  const { id, selected } = props;

  const views = [
    { href: "/", label: "Dash", icon: <Dashboard /> },
    { href: "/shopping", label: "Shopping", icon: <ShoppingCart /> },
    { href: "/profile", label: "Profile", icon: <UserCircle /> },
    { href: "/recipies", label: "Recipies", icon: <FoodMenu /> },
    { href: "/storage", label: "Storage", icon: <Fridge /> },
  ];

  return (
    <StyledNav>
      <OrderedListStyled>
        {views.map((view) => {
          return (
            <NavItem
              key={view.label}
              href={view.href}
              label={view.label}
              icon={view.icon}
              selected={selected === view.label}
            />
          );
        })}
      </OrderedListStyled>
    </StyledNav>
  );
};
