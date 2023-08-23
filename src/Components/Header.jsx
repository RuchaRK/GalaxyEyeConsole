import styled from "@emotion/styled";
import { useNavigate, NavLink } from "react-router-dom";

const Headings = styled.div`
  padding: 16px 24px;
  text-align: left;
  display: flex;
  justify-content: space-between;
`;

const HeaderOptions = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;
const inActiveStyles = {
  color: "gray",
};
const activeStyles = {
  color: "#fff",
};

export const Header = () => {
  const navigate = useNavigate();
  return (
    <Headings>
      <h1>GalaxEye Satellite Image Console </h1>
      <HeaderOptions>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyles : inActiveStyles)}
        >
          <h3>Console </h3>
        </NavLink>
        <NavLink
          to={"/data-source"}
          style={({ isActive }) => (isActive ? activeStyles : inActiveStyles)}
        >
          <h3>View DataSource </h3>
        </NavLink>
      </HeaderOptions>
    </Headings>
  );
};
