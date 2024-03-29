import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <svg
          width="52"
          height="47"
          viewBox="0 0 56 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.42682 38.9999V20.3999L20.1916 9.3999L32.9564 20.3999V38.9999H7.42682ZM10.0378 36.7499H18.567V31.3999H21.8162V36.7499H30.2874V21.3499L20.1916 12.6499L10.0378 21.3499V36.7499ZM18.567 25.3999V22.5999H21.8162V25.3999H18.567ZM38.0043 38.9999V18.9499L26.9802 9.3999H31.0417L40.6153 17.6999V38.9999H38.0043ZM45.6632 38.9999V16.1999L37.8302 9.3999H41.8918L48.2742 14.9499V38.9999H45.6632ZM10.0378 36.7499H30.2874H10.0378Z"
            fill="white"
          />
        </svg>
        <p>UniLife</p>
      </div>
      <div className="buttons">
        <div
        style={{marginRight:'40px'}}>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.025 20.2865L9.875 19.1667C7.875 17.2569 6.14583 15.434 4.6875 13.6979C3.22917 11.9618 2.5 10.1649 2.5 8.30729C2.5 6.88368 2.9625 5.6901 3.8875 4.72656C4.8125 3.76302 5.95833 3.28125 7.325 3.28125C8.09167 3.28125 8.8875 3.48524 9.7125 3.89323C10.5375 4.30122 11.3 5.05208 12 6.14583C12.75 5.05208 13.5208 4.30122 14.3125 3.89323C15.1042 3.48524 15.8917 3.28125 16.675 3.28125C18.0417 3.28125 19.1875 3.76302 20.1125 4.72656C21.0375 5.6901 21.5 6.88368 21.5 8.30729C21.5 10.1823 20.7542 11.9922 19.2625 13.737C17.7708 15.4818 16.0583 17.2917 14.125 19.1667L12.975 20.2604C12.6917 20.5208 12.3667 20.651 12 20.651C11.6333 20.651 11.3083 20.5295 11.025 20.2865ZM11.5 7.47396C10.9833 6.50174 10.3583 5.75521 9.625 5.23437C8.89167 4.71354 8.125 4.45312 7.325 4.45312C6.24167 4.45312 5.35417 4.81771 4.6625 5.54687C3.97083 6.27604 3.625 7.19618 3.625 8.30729C3.625 9.22743 3.89583 10.1736 4.4375 11.1458C4.97917 12.1181 5.65833 13.0859 6.475 14.0495C7.29167 15.013 8.175 15.9505 9.125 16.862C10.075 17.7734 10.9667 18.6198 11.8 19.401C11.85 19.4531 11.9167 19.4792 12 19.4792C12.0833 19.4792 12.15 19.4531 12.2 19.401C13.0333 18.6372 13.925 17.7951 14.875 16.875C15.825 15.9549 16.7083 15.013 17.525 14.0495C18.3417 13.0859 19.0208 12.1137 19.5625 11.1328C20.1042 10.1519 20.375 9.21007 20.375 8.30729C20.375 7.19618 20.025 6.27604 19.325 5.54687C18.625 4.81771 17.7417 4.45312 16.675 4.45312C15.8583 4.45312 15.0875 4.7092 14.3625 5.22135C13.6375 5.73351 13.0083 6.48438 12.475 7.47396C12.4083 7.57812 12.3333 7.65625 12.25 7.70833C12.1667 7.76042 12.075 7.78646 11.975 7.78646C11.875 7.78646 11.7833 7.76042 11.7 7.70833C11.6167 7.65625 11.55 7.57812 11.5 7.47396Z"
              fill="white"
            />
          </svg>
          <p>Shortlist</p>
        </div>
        <div>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.95 20.3125C3.55 20.3125 3.20833 20.1649 2.925 19.8698C2.64167 19.5747 2.5 19.2187 2.5 18.8021V6.19792C2.5 5.78125 2.64167 5.42535 2.925 5.13021C3.20833 4.83507 3.55 4.6875 3.95 4.6875H20.05C20.45 4.6875 20.7917 4.83507 21.075 5.13021C21.3583 5.42535 21.5 5.78125 21.5 6.19792V18.8021C21.5 19.2187 21.3583 19.5747 21.075 19.8698C20.7917 20.1649 20.45 20.3125 20.05 20.3125H3.95ZM20.375 6.90104L12.4 12.3698C12.3333 12.4045 12.2708 12.4349 12.2125 12.4609C12.1542 12.487 12.0833 12.5 12 12.5C11.9167 12.5 11.8458 12.487 11.7875 12.4609C11.7292 12.4349 11.6667 12.4045 11.6 12.3698L3.625 6.90104V18.8021C3.625 18.9062 3.65417 18.9887 3.7125 19.0495C3.77083 19.1102 3.85 19.1406 3.95 19.1406H20.05C20.15 19.1406 20.2292 19.1102 20.2875 19.0495C20.3458 18.9887 20.375 18.9062 20.375 18.8021V6.90104ZM12 11.4062L20.15 5.85938H3.875L12 11.4062ZM3.625 6.90104V7.08333V6.26302V6.30208V5.85938V6.27604V6.23698V7.08333V6.90104V19.1406V18.8021V6.90104Z"
              fill="white"
            />
          </svg>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
